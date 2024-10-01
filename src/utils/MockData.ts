export const functions = [
  {
    value: "SPLIT (dim, delimiter, occurrence_number)",
    label: "SPLIT",
    type: "function",
    key: "split",
    keyLabel: "f(x)",
    params: ["dim", "delimiter"],
    helper:
      "Returns the nth substring divided by a specified delimiter. Index, n, starts from 0",
  },
  {
    value: "CONCAT (dim1, dim2)",
    label: "CONCAT",
    key: "concat",
    params: ["dim1", "dim2"],
    type: "function",
    keyLabel: "f(x)",
    helper: "Returns the concatenation of two strings.",
  },
  {
    value: "SUB (dim, starting_at, ending_at)",
    label: "SUB",
    key: "sub",
    params: ["dim", "starting_at", "ending_at"],
    type: "function",
    keyLabel: "f(x)",
    helper:
      "Returns a substring between specified character indices. Index starts from 0",
  },
  {
    value: "EXTRACT (dim, prefix_string, suffix_string)",
    label: "EXTRACT",
    key: "extract",
    params: ["dim1", "prefix_string", "suffix_string"],
    type: "function",
    keyLabel: "f(x)",
    helper:
      "Returns a substring between the first prefix_string and first suffix_string",
  },
];

export const staticValues = [
  {
    value: "ACCOUNT",
    label: "Account",
    type: "dimension",
    keyLabel: "dim",
    key: "account",
    helper: "Account dimension",
  },
  {
    value: "AD",
    label: "Ad",
    type: "dimension",
    keyLabel: "dim",
    key: "ad",
    helper: "Account ad",
  },
];

export const testingOptions = [
  {
    value: "+",
    label: "PLUS",
    type: "function",
    key: "plus",
    keyLabel: "f(x)",
    params: ["a", "b"],
  },
  {
    value: "-",
    label: "MINUS",
    type: "function",
    key: "minus",
    keyLabel: "f(x)",
    params: ["a", "b"],
  },
  {
    value: "/",
    label: "DIVIDE",
    type: "function",
    key: "divide",
    keyLabel: "f(x)",
    params: ["a", "b"],
  },
  {
    value: "*",
    label: "MULTIPLY",
    type: "function",
    key: "multiply",
    keyLabel: "f(x)",
    params: ["a", "b"],
  },
];
