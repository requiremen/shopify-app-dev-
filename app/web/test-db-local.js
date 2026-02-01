import mongoose from "mongoose";
import { myapp, Message } from "./db.js";

// This script tests your database connection and models locally
// Run it with: node app/web/test-db-local.js

async function testLocalDB() {
  console.log("⏳ Connecting to MongoDB...");
  
  // Wait for the connection to be established (handled in db.js)
  // We check readyState: 0 = disconnected, 1 = connected, 2 = connecting
  if (mongoose.connection.readyState === 0) {
     // If not connected yet, wait for the 'open' event
     await new Promise(resolve => mongoose.connection.once('open', resolve));
  } else if (mongoose.connection.readyState === 2) {
      await new Promise(resolve => mongoose.connection.once('open', resolve));
  }

  console.log("✅ MongoDB Connected!");

  try {
    console.log("\n--- Testing Message Save ---");
    const testMessage = "Local Test Message " + new Date().toLocaleTimeString();
    
    const savedMessage = await Message.create({ content: testMessage });
    console.log("✅ Successfully saved message:");
    console.log(savedMessage);

    console.log("\n--- Testing Shop Save ---");
    const testDomain = "local-test-" + Date.now() + ".myshopify.com";
    
    const savedShop = await myapp.findOneAndUpdate(
      { domain: testDomain },
      { 
        domain: testDomain,
        $setOnInsert: { installedAt: new Date() }
      },
      { upsert: true, new: true }
    );
    console.log("✅ Successfully saved/updated shop:");
    console.log(savedShop);

  } catch (error) {
    console.error("❌ Error during test:", error);
  } finally {
    console.log("\n👋 Closing connection...");
    await mongoose.disconnect();
    console.log("Done.");
  }
}

testLocalDB();
