import * as fs from "fs/promises";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { performance } from "perf_hooks";
import { Liq } from "./DefiLlama-Adapters/liquidations/utils/types";
import * as _venus from "./DefiLlama-Adapters/liquidations/venus";

interface LiquidationAdapter {
  // chain name
  [chain: string]: {
    liquidations: () => Promise<Liq[]>;
  };
}

const venus = (_venus as any).default as LiquidationAdapter;

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/venus/bsc", async (_req: Request, res: Response) => {
  try {
    const data = await getCachedLiqs("venus", "bsc");
    res.json(data);
  } catch (e) {
    console.error(e);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

const fetchLiquidations = async () => {
  await Promise.all(
    Object.entries(venus).map(async ([chain, liquidationsFunc]) => {
      try {
        const _start = performance.now();
        console.log(`Fetching ${"venus"} data for ${chain}`);
        const liquidations = await liquidationsFunc.liquidations();
        await storeCachedLiqs("venus", chain, JSON.stringify(liquidations));
        const _end = performance.now();
        console.log(
          `Fetched ${"venus"} data for ${chain} in ${(
            (_end - _start) /
            1000
          ).toLocaleString()}s`,
        );
      } catch (e) {
        console.error(e);
      }
    }),
  );
};

const storeCachedLiqs = async (
  protocol: string,
  chain: string,
  data: string,
) => {
  // save to local as json
  const path = `./temp/${protocol}/${chain}.json`;
  await fs.writeFile(path, data, "utf8");
};

const getCachedLiqs = async (protocol: string, chain: string) => {
  const path = `./temp/${protocol}/${chain}.json`;
  const data = await fs.readFile(path, "utf8");
  return JSON.parse(data);
};

// run fetchLiquidations every 20 minutes
setInterval(fetchLiquidations, 1000 * 60 * 20);
fetchLiquidations();
