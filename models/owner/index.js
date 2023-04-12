import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../../utils/index.js";

const Owner = sequelize.define("tb_mess_owner", {
    ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Mess_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
   
});

export default Owner;