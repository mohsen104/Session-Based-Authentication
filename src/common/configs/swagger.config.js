import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const SwaggerConfig = (app) => {
    const SwaggerDocument = swaggerJsdoc({
        definition: {
            openapi: "3.0.1",
            info: {
                title: "my-server",
                description: "",
                version: "1.0.0",
                contact: {
                    name: "Mohsen Karimvand",
                    url: "",
                    email: "m.karimvand.84@gmail.com",
                },
            },
            servers: [
                {
                    url: "http://localhost:3000/api",
                    description: "development",
                },
            ],
        },
        apis: [process.cwd() + "/src/modules/**/*.swagger.js"],
    });
    const swagger = swaggerUi.setup(SwaggerDocument);
    app.use("/api-docs", swaggerUi.serve, swagger);
};

export default SwaggerConfig;