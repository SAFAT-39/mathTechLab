import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../utils/mongodb";
import bcrypt from "bcryptjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { username, name, email, password } = req.body;

  if (!username || !name || !email || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const client = await clientPromise;
  const usersCollection = client.db().collection("users");

  const existing = await usersCollection.findOne({
    $or: [{ username }, { email }],
  });

  if (existing) {
    return res.status(409).json({ error: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await usersCollection.insertOne({
    username,
    name,
    email,
    password: hashedPassword,
    createdAt: new Date(),
  });

  return res.status(201).json({ message: "User registered" });
}
