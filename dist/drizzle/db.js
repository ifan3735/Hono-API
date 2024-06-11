"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
require("dotenv/config");
const node_postgres_1 = require("drizzle-orm/node-postgres");
const pg_1 = require("pg");
const schema = require("./schema");
exports.client = new pg_1.Client({
    connectionString: process.env.Database_URL,
});
const main = async () => {
    await exports.client.connect();
    console.log("Connected to database");
};
main().catch((err) => {
    console.log(err);
    process.exit(1);
});
const db = (0, node_postgres_1.drizzle)(exports.client, { schema, logger: true });
exports.default = db;
