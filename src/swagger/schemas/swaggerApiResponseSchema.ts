const swaggerApiResponseSchema = {
  type: "object",
  properties: {
    code: {
      type: "integer",
      format: "int32",
    },
    type: {
      type: "string",
    },
    message: {
      type: "string",
    },
  },
  xml: {
    name: "##default",
  },
};

export { swaggerApiResponseSchema };
