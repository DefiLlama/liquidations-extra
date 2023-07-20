import { Liq } from "../DefiLlama-Adapters/liquidations/utils/types";

import { Hex, createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http("https://eth.llamarpc.com"),
});

// all maker contracts: https://chainlog.makerdao.com/api/mainnet/active.json

const CDP_MANAGER = {
  address: "0x5ef30b9986345249bc32d8928B7ee64DE9435E39",
  abi: [
    {
      inputs: [{ internalType: "address", name: "vat_", type: "address" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: true,
      inputs: [
        { indexed: true, internalType: "bytes4", name: "sig", type: "bytes4" },
        { indexed: true, internalType: "address", name: "usr", type: "address" },
        { indexed: true, internalType: "bytes32", name: "arg1", type: "bytes32" },
        { indexed: true, internalType: "bytes32", name: "arg2", type: "bytes32" },
        { indexed: false, internalType: "bytes", name: "data", type: "bytes" },
      ],
      name: "LogNote",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: "address", name: "usr", type: "address" },
        { indexed: true, internalType: "address", name: "own", type: "address" },
        { indexed: true, internalType: "uint256", name: "cdp", type: "uint256" },
      ],
      name: "NewCdp",
      type: "event",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "cdp", type: "uint256" },
        { internalType: "address", name: "usr", type: "address" },
        { internalType: "uint256", name: "ok", type: "uint256" },
      ],
      name: "cdpAllow",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "address", name: "", type: "address" },
      ],
      name: "cdpCan",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "cdpi",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "count",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "src", type: "address" },
        { internalType: "uint256", name: "cdp", type: "uint256" },
      ],
      name: "enter",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "first",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "bytes32", name: "ilk", type: "bytes32" },
        { internalType: "uint256", name: "cdp", type: "uint256" },
        { internalType: "address", name: "dst", type: "address" },
        { internalType: "uint256", name: "wad", type: "uint256" },
      ],
      name: "flux",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "cdp", type: "uint256" },
        { internalType: "address", name: "dst", type: "address" },
        { internalType: "uint256", name: "wad", type: "uint256" },
      ],
      name: "flux",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "cdp", type: "uint256" },
        { internalType: "int256", name: "dink", type: "int256" },
        { internalType: "int256", name: "dart", type: "int256" },
      ],
      name: "frob",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "cdp", type: "uint256" },
        { internalType: "address", name: "dst", type: "address" },
      ],
      name: "give",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "ilks",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "last",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "list",
      outputs: [
        { internalType: "uint256", name: "prev", type: "uint256" },
        { internalType: "uint256", name: "next", type: "uint256" },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "cdp", type: "uint256" },
        { internalType: "address", name: "dst", type: "address" },
        { internalType: "uint256", name: "rad", type: "uint256" },
      ],
      name: "move",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "bytes32", name: "ilk", type: "bytes32" },
        { internalType: "address", name: "usr", type: "address" },
      ],
      name: "open",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "owns",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "cdp", type: "uint256" },
        { internalType: "address", name: "dst", type: "address" },
      ],
      name: "quit",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "cdpSrc", type: "uint256" },
        { internalType: "uint256", name: "cdpDst", type: "uint256" },
      ],
      name: "shift",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "usr", type: "address" },
        { internalType: "uint256", name: "ok", type: "uint256" },
      ],
      name: "urnAllow",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "address", name: "", type: "address" },
      ],
      name: "urnCan",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "urns",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "vat",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ],
} as const;

const ILK_REGISTRY = {
  address: "0x5a464C28D19848f44199D003BeF5ecc87d090F87",
  abi: [
    {
      inputs: [
        { internalType: "address", name: "vat_", type: "address" },
        { internalType: "address", name: "dog_", type: "address" },
        { internalType: "address", name: "cat_", type: "address" },
        { internalType: "address", name: "spot_", type: "address" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [{ indexed: false, internalType: "bytes32", name: "ilk", type: "bytes32" }],
      name: "AddIlk",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [{ indexed: false, internalType: "address", name: "usr", type: "address" }],
      name: "Deny",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, internalType: "bytes32", name: "what", type: "bytes32" },
        { indexed: false, internalType: "address", name: "data", type: "address" },
      ],
      name: "File",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, internalType: "bytes32", name: "ilk", type: "bytes32" },
        { indexed: false, internalType: "bytes32", name: "what", type: "bytes32" },
        { indexed: false, internalType: "address", name: "data", type: "address" },
      ],
      name: "File",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, internalType: "bytes32", name: "ilk", type: "bytes32" },
        { indexed: false, internalType: "bytes32", name: "what", type: "bytes32" },
        { indexed: false, internalType: "uint256", name: "data", type: "uint256" },
      ],
      name: "File",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, internalType: "bytes32", name: "ilk", type: "bytes32" },
        { indexed: false, internalType: "bytes32", name: "what", type: "bytes32" },
        { indexed: false, internalType: "string", name: "data", type: "string" },
      ],
      name: "File",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [{ indexed: false, internalType: "bytes32", name: "ilk", type: "bytes32" }],
      name: "NameError",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [{ indexed: false, internalType: "address", name: "usr", type: "address" }],
      name: "Rely",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [{ indexed: false, internalType: "bytes32", name: "ilk", type: "bytes32" }],
      name: "RemoveIlk",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [{ indexed: false, internalType: "bytes32", name: "ilk", type: "bytes32" }],
      name: "SymbolError",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [{ indexed: false, internalType: "bytes32", name: "ilk", type: "bytes32" }],
      name: "UpdateIlk",
      type: "event",
    },
    {
      inputs: [{ internalType: "address", name: "adapter", type: "address" }],
      name: "add",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "cat",
      outputs: [{ internalType: "contract CatLike", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "ilk", type: "bytes32" }],
      name: "class",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "count",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "ilk", type: "bytes32" }],
      name: "dec",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "usr", type: "address" }],
      name: "deny",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "dog",
      outputs: [{ internalType: "contract DogLike", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "bytes32", name: "ilk", type: "bytes32" },
        { internalType: "bytes32", name: "what", type: "bytes32" },
        { internalType: "uint256", name: "data", type: "uint256" },
      ],
      name: "file",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "bytes32", name: "ilk", type: "bytes32" },
        { internalType: "bytes32", name: "what", type: "bytes32" },
        { internalType: "string", name: "data", type: "string" },
      ],
      name: "file",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "bytes32", name: "what", type: "bytes32" },
        { internalType: "address", name: "data", type: "address" },
      ],
      name: "file",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "bytes32", name: "ilk", type: "bytes32" },
        { internalType: "bytes32", name: "what", type: "bytes32" },
        { internalType: "address", name: "data", type: "address" },
      ],
      name: "file",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "ilk", type: "bytes32" }],
      name: "gem",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "pos", type: "uint256" }],
      name: "get",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      name: "ilkData",
      outputs: [
        { internalType: "uint96", name: "pos", type: "uint96" },
        { internalType: "address", name: "join", type: "address" },
        { internalType: "address", name: "gem", type: "address" },
        { internalType: "uint8", name: "dec", type: "uint8" },
        { internalType: "uint96", name: "class", type: "uint96" },
        { internalType: "address", name: "pip", type: "address" },
        { internalType: "address", name: "xlip", type: "address" },
        { internalType: "string", name: "name", type: "string" },
        { internalType: "string", name: "symbol", type: "string" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "ilk", type: "bytes32" }],
      name: "info",
      outputs: [
        { internalType: "string", name: "name", type: "string" },
        { internalType: "string", name: "symbol", type: "string" },
        { internalType: "uint256", name: "class", type: "uint256" },
        { internalType: "uint256", name: "dec", type: "uint256" },
        { internalType: "address", name: "gem", type: "address" },
        { internalType: "address", name: "pip", type: "address" },
        { internalType: "address", name: "join", type: "address" },
        { internalType: "address", name: "xlip", type: "address" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "ilk", type: "bytes32" }],
      name: "join",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "list",
      outputs: [{ internalType: "bytes32[]", name: "", type: "bytes32[]" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "start", type: "uint256" },
        { internalType: "uint256", name: "end", type: "uint256" },
      ],
      name: "list",
      outputs: [{ internalType: "bytes32[]", name: "", type: "bytes32[]" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "ilk", type: "bytes32" }],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "ilk", type: "bytes32" }],
      name: "pip",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "ilk", type: "bytes32" }],
      name: "pos",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "bytes32", name: "_ilk", type: "bytes32" },
        { internalType: "address", name: "_join", type: "address" },
        { internalType: "address", name: "_gem", type: "address" },
        { internalType: "uint256", name: "_dec", type: "uint256" },
        { internalType: "uint256", name: "_class", type: "uint256" },
        { internalType: "address", name: "_pip", type: "address" },
        { internalType: "address", name: "_xlip", type: "address" },
        { internalType: "string", name: "_name", type: "string" },
        { internalType: "string", name: "_symbol", type: "string" },
      ],
      name: "put",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "usr", type: "address" }],
      name: "rely",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "ilk", type: "bytes32" }],
      name: "remove",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "ilk", type: "bytes32" }],
      name: "removeAuth",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "spot",
      outputs: [{ internalType: "contract SpotLike", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "ilk", type: "bytes32" }],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "ilk", type: "bytes32" }],
      name: "update",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "vat",
      outputs: [{ internalType: "contract VatLike", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "wards",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "ilk", type: "bytes32" }],
      name: "xlip",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
  ],
} as const;

const MCD_VAT = {
  address: "0x35D1b3F3D7966A1DFe207aa4514C12a259A0492B",
  abi: [
    { inputs: [], payable: false, stateMutability: "nonpayable", type: "constructor" },
    {
      anonymous: true,
      inputs: [
        { indexed: true, internalType: "bytes4", name: "sig", type: "bytes4" },
        { indexed: true, internalType: "bytes32", name: "arg1", type: "bytes32" },
        { indexed: true, internalType: "bytes32", name: "arg2", type: "bytes32" },
        { indexed: true, internalType: "bytes32", name: "arg3", type: "bytes32" },
        { indexed: false, internalType: "bytes", name: "data", type: "bytes" },
      ],
      name: "LogNote",
      type: "event",
    },
    {
      constant: true,
      inputs: [],
      name: "Line",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "cage",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "address", name: "", type: "address" },
      ],
      name: "can",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "dai",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "debt",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "usr", type: "address" }],
      name: "deny",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "bytes32", name: "ilk", type: "bytes32" },
        { internalType: "bytes32", name: "what", type: "bytes32" },
        { internalType: "uint256", name: "data", type: "uint256" },
      ],
      name: "file",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "bytes32", name: "what", type: "bytes32" },
        { internalType: "uint256", name: "data", type: "uint256" },
      ],
      name: "file",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "bytes32", name: "ilk", type: "bytes32" },
        { internalType: "address", name: "src", type: "address" },
        { internalType: "address", name: "dst", type: "address" },
        { internalType: "uint256", name: "wad", type: "uint256" },
      ],
      name: "flux",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "bytes32", name: "i", type: "bytes32" },
        { internalType: "address", name: "u", type: "address" },
        { internalType: "int256", name: "rate", type: "int256" },
      ],
      name: "fold",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "bytes32", name: "ilk", type: "bytes32" },
        { internalType: "address", name: "src", type: "address" },
        { internalType: "address", name: "dst", type: "address" },
        { internalType: "int256", name: "dink", type: "int256" },
        { internalType: "int256", name: "dart", type: "int256" },
      ],
      name: "fork",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "bytes32", name: "i", type: "bytes32" },
        { internalType: "address", name: "u", type: "address" },
        { internalType: "address", name: "v", type: "address" },
        { internalType: "address", name: "w", type: "address" },
        { internalType: "int256", name: "dink", type: "int256" },
        { internalType: "int256", name: "dart", type: "int256" },
      ],
      name: "frob",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "bytes32", name: "", type: "bytes32" },
        { internalType: "address", name: "", type: "address" },
      ],
      name: "gem",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "bytes32", name: "i", type: "bytes32" },
        { internalType: "address", name: "u", type: "address" },
        { internalType: "address", name: "v", type: "address" },
        { internalType: "address", name: "w", type: "address" },
        { internalType: "int256", name: "dink", type: "int256" },
        { internalType: "int256", name: "dart", type: "int256" },
      ],
      name: "grab",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "uint256", name: "rad", type: "uint256" }],
      name: "heal",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "usr", type: "address" }],
      name: "hope",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      name: "ilks",
      outputs: [
        { internalType: "uint256", name: "Art", type: "uint256" },
        { internalType: "uint256", name: "rate", type: "uint256" },
        { internalType: "uint256", name: "spot", type: "uint256" },
        { internalType: "uint256", name: "line", type: "uint256" },
        { internalType: "uint256", name: "dust", type: "uint256" },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "bytes32", name: "ilk", type: "bytes32" }],
      name: "init",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "live",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "src", type: "address" },
        { internalType: "address", name: "dst", type: "address" },
        { internalType: "uint256", name: "rad", type: "uint256" },
      ],
      name: "move",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "usr", type: "address" }],
      name: "nope",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "usr", type: "address" }],
      name: "rely",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "sin",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "bytes32", name: "ilk", type: "bytes32" },
        { internalType: "address", name: "usr", type: "address" },
        { internalType: "int256", name: "wad", type: "int256" },
      ],
      name: "slip",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "u", type: "address" },
        { internalType: "address", name: "v", type: "address" },
        { internalType: "uint256", name: "rad", type: "uint256" },
      ],
      name: "suck",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "bytes32", name: "", type: "bytes32" },
        { internalType: "address", name: "", type: "address" },
      ],
      name: "urns",
      outputs: [
        { internalType: "uint256", name: "ink", type: "uint256" },
        { internalType: "uint256", name: "art", type: "uint256" },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "vice",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "wards",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ],
} as const;

const MCD_SPOT = {
  address: "0x65C79fcB50Ca1594B025960e539eD7A9a6D434A3",
  abi: [
    {
      inputs: [{ internalType: "address", name: "vat_", type: "address" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: true,
      inputs: [
        { indexed: true, internalType: "bytes4", name: "sig", type: "bytes4" },
        { indexed: true, internalType: "address", name: "usr", type: "address" },
        { indexed: true, internalType: "bytes32", name: "arg1", type: "bytes32" },
        { indexed: true, internalType: "bytes32", name: "arg2", type: "bytes32" },
        { indexed: false, internalType: "bytes", name: "data", type: "bytes" },
      ],
      name: "LogNote",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, internalType: "bytes32", name: "ilk", type: "bytes32" },
        { indexed: false, internalType: "bytes32", name: "val", type: "bytes32" },
        { indexed: false, internalType: "uint256", name: "spot", type: "uint256" },
      ],
      name: "Poke",
      type: "event",
    },
    {
      constant: false,
      inputs: [],
      name: "cage",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "guy", type: "address" }],
      name: "deny",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "bytes32", name: "ilk", type: "bytes32" },
        { internalType: "bytes32", name: "what", type: "bytes32" },
        { internalType: "uint256", name: "data", type: "uint256" },
      ],
      name: "file",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "bytes32", name: "what", type: "bytes32" },
        { internalType: "uint256", name: "data", type: "uint256" },
      ],
      name: "file",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "bytes32", name: "ilk", type: "bytes32" },
        { internalType: "bytes32", name: "what", type: "bytes32" },
        { internalType: "address", name: "pip_", type: "address" },
      ],
      name: "file",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      name: "ilks",
      outputs: [
        { internalType: "contract PipLike", name: "pip", type: "address" },
        { internalType: "uint256", name: "mat", type: "uint256" },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "live",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "par",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "bytes32", name: "ilk", type: "bytes32" }],
      name: "poke",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "guy", type: "address" }],
      name: "rely",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "vat",
      outputs: [{ internalType: "contract VatLike", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "wards",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ],
} as const;

const ERC20 = {
  abi: [
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ name: "", type: "uint8" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ],
} as const;

// the collateral price at which the collateral ratio is reached
function collateralPriceAtRatio({
  colRatio,
  collateral,
  vaultDebt,
}: {
  colRatio: number;
  collateral: number;
  vaultDebt: number;
}): number {
  return collateral === 0 || vaultDebt === 0 ? 0 : (vaultDebt * colRatio) / collateral;
}

const INSPECTOR_BASE_URL = "https://oasis.app/";

const positions = async (): Promise<Liq[]> => {
  const cdpi = Number(
    await publicClient.readContract({
      ...CDP_MANAGER,
      functionName: "cdpi",
    }),
  );

  const cdps = Array.from(Array(cdpi).keys()).map((x) => BigInt(x + 1)); // starts from 1

  const ilkIds = await publicClient.multicall({
    contracts: cdps.map((i) => ({ ...CDP_MANAGER, args: [i], functionName: "ilks" })),
    allowFailure: false,
  });

  const urnHandlers = await publicClient.multicall({
    contracts: cdps.map((i) => ({ ...CDP_MANAGER, args: [i], functionName: "urns" })),
    allowFailure: false,
  });

  const owners = await publicClient.multicall({
    contracts: cdps.map((i) => ({ ...CDP_MANAGER, args: [i], functionName: "owns" })),
    allowFailure: false,
  });

  const collaterals = await publicClient.multicall({
    contracts: ilkIds.map((ilkId) => ({ ...ILK_REGISTRY, args: [ilkId], functionName: "gem" })),
    allowFailure: false,
  });

  const spots = await publicClient.multicall({
    contracts: ilkIds.map((ilkId) => ({ ...MCD_SPOT, args: [ilkId], functionName: "ilks" })),
    allowFailure: false,
  });

  const decimals = await publicClient.multicall({
    contracts: collaterals.map((collateral) => ({ ...ERC20, address: collateral, functionName: "decimals" })),
    allowFailure: false,
  });

  const urnParamPairs = cdps.map((i) => [ilkIds[Number(i) - 1], urnHandlers[Number(i) - 1]]);

  const urns = await publicClient.multicall({
    contracts: urnParamPairs.map((pair) => ({ ...MCD_VAT, args: pair as [Hex, Hex], functionName: "urns" })),
    allowFailure: false,
  });

  const ilks = await publicClient.multicall({
    contracts: ilkIds.map((ilkId) => ({ ...MCD_VAT, args: [ilkId], functionName: "ilks" })),
    allowFailure: false,
  });

  const positions = cdps
    .map((_i) => {
      const i = Number(_i);
      const urn = urns[i - 1];
      const collateralAmount = Number(urn[0]) / 1e18; // ink in wei
      const normalizedDebt = Number(urn[1]) / 1e18; // art in wei
      const ilk = ilks[i - 1];
      // const normalizedIlkDebt = ilk.Art; // in wei
      const debtScalingFactor = Number(ilk[1]) / 1e27; // rate in ray (27 decimal places)
      // const maxDebtPerUnitCollateral = ilk.spot; // in ray (27 decimal places)
      // const debtCeiling = ilk.line; // in rad (45 decimal places)
      // const debtFloor = ilk.dust; // in rad (45 decimal places)
      const spot = spots[i - 1];
      const liquidationRatio = Number(spot[1]) / 1e27; // in ray (27 decimal places)
      const debt = normalizedDebt * debtScalingFactor;

      const liqPrice = collateralPriceAtRatio({
        colRatio: liquidationRatio,
        collateral: collateralAmount,
        vaultDebt: debt,
      });

      const owner = owners[i - 1].toLowerCase();
      const collateral = "ethereum:" + collaterals[i - 1].toLowerCase();

      const decimal = decimals[i - 1];
      const collateralAmountFormatted = (collateralAmount * 10 ** Number(decimal)).toFixed(2);

      return {
        collateralAmount: collateralAmountFormatted,
        collateral,
        liqPrice,
        owner,
        extra: {
          displayName: `Vault ${i}`,
          url: INSPECTOR_BASE_URL + i,
        },
      } as Liq;
    })
    .filter((x) => x.liqPrice > 0);

  return positions;
};

export default {
  ethereum: {
    liquidations: positions,
  },
};
