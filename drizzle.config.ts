import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "./server/migrations",
	schema: "./server/schema.ts",
	dialect: "sqlite",
	dbCredentials: {
		url: process.env.DB_FILE_NAME!,
	},
});
