import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { oneTap } from "better-auth/plugins";
import { MongoClient } from "mongodb";


const client = new MongoClient(process.env.MONGODB_URI!);
const db = client.db(process.env.DB_NAME);

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),
  emailAndPassword: {
    enabled: true
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        input: false,
        defaultValue: "user",
      }
    }
  },
  cors: {
    origin: [
      "http://localhost:3000",
      "https://mathtechlab.com"
    ],
    credentials: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  plugins: [
    oneTap(),
  ]
});
