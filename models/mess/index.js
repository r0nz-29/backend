import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../../utils/index.js";

const Mess = sequelize.define("tb_mess", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contact: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    valueForMoney: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export default Mess;
