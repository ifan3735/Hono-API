"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const migrator_1 = require("drizzle-orm/neon-http/migrator");
const db_1 = require("./db");
async function migration() {
    console.log("====== migration Started ====");
    await (0, migrator_1.migrate)(db_1.db, { migrationsFolder: __dirname + "/migrations" });
    console.log("====== migration Ended ====");
    process.exitCode = 0;
}
migration();
