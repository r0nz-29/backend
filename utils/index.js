import Sequelize from "sequelize";
import {config} from "../config/index.js";
import {ERROR} from "./constants.js";

const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
    dialect: config.db.dialect,
    host: config.db.host,
    logging: true,
});

export default sequelize;

export const throwError = (res, e) => {
    res.status(ERROR).json({ error: e, message: e?.message, success: false });
};

export const OK = (errorCode, res, jsonValue) => {
    res.status(errorCode).json(Object.assign({ success: true }, jsonValue));
};
