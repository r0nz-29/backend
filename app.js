import express from "express";
import cors from "cors";
import {config} from "./config/index.js";
import sequelize from "./utils/index.js";
import routes from "./routes/index.js";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || config.server.port || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

sequelize.sync();

process
.on("unhandledRejection", (reason, p) => {
        console.error(reason, "Unhandled Rejection at Promise", p);
    })
.on("uncaughtException", err => {
        console.error(err, "Uncaught Exception thrown");
        process.exit(1);
    });

app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);