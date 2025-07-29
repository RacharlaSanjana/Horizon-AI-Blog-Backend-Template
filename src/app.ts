import express from "express";
import prisma from './config/db';

const app = express();
app.use(express.json());

prisma.$connect()
  .then(() => {
    console.log("✅ Connected to the database");

    app.listen(3000, () => {
      console.log("🚀 Server is running on port 3000");
    });
  })
  .catch((error: any) => {
    console.error("❌ Database connection error:", error);
    process.exit(1);
  });

export default app;
