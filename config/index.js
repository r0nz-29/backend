export const config = {
    server: {
        host: "localhost",
        port: 8080,
    },
    db: {
        database: "<--db-name-->",
        username: "<--db-username-->",
        password: "<--db-pwd-->",
        dialect: "mysql",
        host: "<--db-host-->",
        seederStorage: "sequelize", // default
        seederStorageTableName: "sequelize_seeders", // default
    }
};
