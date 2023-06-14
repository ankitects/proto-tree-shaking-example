export const Used = /* @__PURE__ */ proto3.makeMessageType("used",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "transitive", kind: "message", T: Transitive },
  ],
);

export const Transitive = /* @__PURE__ */ proto3.makeMessageType("transitive",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

export const Unused = /* @__PURE__ */ proto3.makeMessageType("unused",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);
