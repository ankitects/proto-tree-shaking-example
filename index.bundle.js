(() => {
  // proto.js
  var Used = /* @__PURE__ */ proto3.makeMessageType(
    "used",
    () => [
      {
        no: 1,
        name: "id",
        kind: "scalar",
        T: 3
        /* ScalarType.INT64 */
      },
      { no: 2, name: "transitive", kind: "message", T: Transitive }
    ]
  );
  var Transitive = /* @__PURE__ */ proto3.makeMessageType(
    "transitive",
    () => [
      {
        no: 1,
        name: "id",
        kind: "scalar",
        T: 3
        /* ScalarType.INT64 */
      }
    ]
  );
})();
