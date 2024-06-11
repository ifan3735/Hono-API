"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const migrator_1 = require("drizzle-orm/node-postgres/migrator");
const db_1 = require("./db");
async function migration() {
    try {
        console.log("======== Migrations started ========");
        await (0, migrator_1.migrate)(db_1.default, { migrationsFolder: __dirname + "/migrations" });
        await db_1.client.end();
        console.log("======== Migrations ended ========");
    }
    catch (err) {
        console.error('error creating');
        console.error(err);
    }
    finally {
        process.exit(0);
    }
}
migration().catch((err) => {
    console.error(err);
    process.exit(1);
});
