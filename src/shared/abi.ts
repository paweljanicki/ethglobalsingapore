export const ABI_TOKENIZATION = [
  {
    constant: false,
    inputs: [
      {
        name: "asset",
        type: "tuple",
        components: [
          {
            name: "name",
            type: "string",
          },
          {
            name: "length",
            type: "uint256",
          },
          {
            name: "year",
            type: "string",
          },
          {
            name: "price",
            type: "uint256",
          },
        ],
      },
    ],
    name: "tokenizeAsset",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export const ABI_ASSETS = [
  {
    constant: true,
    inputs: [],
    name: "getAssets",
    outputs: [
      {
        name: "",
        type: "tuple[]",
        components: [
          {
            name: "name",
            type: "string",
          },
          {
            name: "length",
            type: "uint256",
          },
          {
            name: "year",
            type: "string",
          },
          {
            name: "price",
            type: "uint256",
          },
        ],
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "assetId",
        type: "address",
      },
    ],
    name: "requestAttestation",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "assetId",
        type: "address",
      },
    ],
    name: "attestAsset",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
