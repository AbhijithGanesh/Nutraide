import { RedocStandalone } from "redoc";

const APIDefinition = (): JSX.Element => {
  let openapi_schema: any = {
    openapi: "3.0.2",
    info: { title: "Nutraide", version: "0.9.0" },
    paths: {
      "/api/model": {
        post: {
          summary: "Predict Model",
          description:
            'A simple API end point to predict the nutritional needs of a patient\nIt takes the model as input and returns the predicted nutritional needs\nThe values are as defined in the Data class of the file\n\nThis API will not return results as this is a test server just used to display the API\n\nModel for predicting the nutritional needs of a patient\nThe values abbreviated are:\n- Haemoglobin: hb\n- Fasting Blood Sugar: fbs\n- Glycosylated Haemoglobin: hba1c\n- Serum Glutamic Oxaloacetic Transaminase: sgot\n- Serum Glutamic Pyruvic Transaminase: sgpt\n\n```python\nclass PredictModel(BaseModel):\n    patient_gender: "male" | "female"\n    height: float\n    weight: float\n    haemoglobin: float\n    urea: float\n    creatinine: float\n    sodium: float\n    potassium: float\n    fbs: float\n    hba1c: float\n    sgot: float\n    sgpt: float\n```',
          operationId: "predict_model_api_model_post",
          requestBody: {
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/PredictModel" },
              },
            },
            required: true,
          },
          responses: {
            "200": {
              description: "Successful Response",
              content: { "application/json": { schema: {} } },
            },
            "422": {
              description: "Validation Error",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/HTTPValidationError" },
                },
              },
            },
          },
        },
      },
    },
    components: {
      schemas: {
        GenderEnum: {
          title: "GenderEnum",
          enum: ["male", "female"],
          type: "string",
          description: "An enumeration.",
        },
        HTTPValidationError: {
          title: "HTTPValidationError",
          type: "object",
          properties: {
            detail: {
              title: "Detail",
              type: "array",
              items: { $ref: "#/components/schemas/ValidationError" },
            },
          },
        },
        PredictModel: {
          title: "PredictModel",
          required: [
            "patient_gender",
            "height",
            "weight",
            "haemoglobin",
            "urea",
            "creatinine",
            "sodium",
            "potassium",
            "fbs",
            "hba1c",
            "sgot",
            "sgpt",
          ],
          type: "object",
          properties: {
            patient_gender: { $ref: "#/components/schemas/GenderEnum" },
            height: { title: "Height", type: "number" },
            weight: { title: "Weight", type: "number" },
            haemoglobin: { title: "Haemoglobin", type: "number" },
            urea: { title: "Urea", type: "number" },
            creatinine: { title: "Creatinine", type: "number" },
            sodium: { title: "Sodium", type: "number" },
            potassium: { title: "Potassium", type: "number" },
            fbs: { title: "Fbs", type: "number" },
            hba1c: { title: "Hba1C", type: "number" },
            sgot: { title: "Sgot", type: "number" },
            sgpt: { title: "Sgpt", type: "number" },
          },
          description:
            "Model for predicting the nutritional needs of a patient\nThe values abbreviated are:\n- Haemoglobin: hb\n- Fasting Blood Sugar: fbs\n- Glycosylated Haemoglobin: hba1c\n- Serum Glutamic Oxaloacetic Transaminase: sgot\n- Serum Glutamic Pyruvic Transaminase: sgpt",
        },
        ValidationError: {
          title: "ValidationError",
          required: ["loc", "msg", "type"],
          type: "object",
          properties: {
            loc: {
              title: "Location",
              type: "array",
              items: { anyOf: [{ type: "string" }, { type: "integer" }] },
            },
            msg: { title: "Message", type: "string" },
            type: { title: "Error Type", type: "string" },
          },
        },
      },
    },
  };
  return <RedocStandalone spec={openapi_schema} />;
};

export default APIDefinition;
