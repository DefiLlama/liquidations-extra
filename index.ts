import * as fs from "fs/promises";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { performance } from "perf_hooks";
import { Liq } from "./DefiLlama-Adapters/liquidations/utils/types";
import * as _venus from "./DefiLlama-Adapters/liquidations/venus";
// import * as _aaveV2 from "./DefiLlama-Adapters/liquidations/aave-v2";

interface LiquidationAdapter {
  // chain name
  [chain: string]: {
    liquidations: () => Promise<Liq[]>;
  };
}

const venus = (_venus as any).default as LiquidationAdapter;
// const aaveV2 = (_aaveV2 as any).default as LiquidationAdapter;

dotenv.config();

const STORE = {};

const app: Express = express();
const port = process.env.PORT;

const handleLiqsReq = (protocol: string, chain: string) => async (_req: Request, res: Response) => {
  try {
    const data = await getCachedLiqs(protocol, chain);
    if (data) {
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Cache-Control", "public, max-age=1200");
      res.send(data);
    } else {
      res.status(404).send("No data");
    }
  } catch (e) {
    console.error(e);
    res.status(500).send("Internal Server Error");
  }
};

app.get("/venus/bsc", handleLiqsReq("venus", "bsc"));

// app.get("/aave-v2/ethereum", handleLiqsReq("aave-v2", "ethereum"));

// app.get("/aave-v2/polygon", handleLiqsReq("aave-v2", "polygon"));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

const fetchVenusLiquidations = async () => {
  await Promise.all(
    Object.entries(venus).map(async ([chain, liquidationsFunc]) => {
      try {
        const _start = performance.now();
        console.log(`Fetching ${"venus"} data for ${chain}`);
        const liquidations = await liquidationsFunc.liquidations();
        await storeCachedLiqs("venus", chain, JSON.stringify(liquidations));
        const _end = performance.now();
        console.log(`Fetched ${"venus"} data for ${chain} in ${((_end - _start) / 1000).toLocaleString()}s`);
      } catch (e) {
        console.error(e);
      }
    }),
  );
};

// const fetchAaveV2Liquidations = async () => {
//   for (const chain of Object.keys(aaveV2)) {
//     if (chain === "ethereum") {
//       continue;
//     }
//     try {
//       const _start = performance.now();
//       console.log(`Fetching ${"aave-v2"} data for ${chain}`);
//       const liquidations = await aaveV2[chain].liquidations();
//       await storeCachedLiqs("aave-v2", chain, JSON.stringify(liquidations));
//       const _end = performance.now();
//       console.log(`Fetched ${"aave-v2"} data for ${chain} in ${((_end - _start) / 1000).toLocaleString()}s`);
//     } catch (e) {
//       console.error(e);
//     }
//   }
// };

const storeCachedLiqs = async (protocol: string, chain: string, data: string) => {
  delete STORE[protocol];
  STORE[protocol] = { [chain]: data };
};

const getCachedLiqs = async (protocol: string, chain: string) => {
  const data = STORE[protocol]?.[chain];
  return data;
};

// run every 30 minutes
setInterval(fetchVenusLiquidations, 1000 * 60 * 30);
fetchVenusLiquidations();

// // run every 30 minutes but delayed by 20 minutes
// setTimeout(() => {
//   setInterval(fetchAaveV2Liquidations, 1000 * 60 * 30);
//   fetchAaveV2Liquidations();
//   // }, 1000 * 60 * 20);
// }, 0);
