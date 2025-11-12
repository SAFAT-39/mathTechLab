import { NextRequest, NextResponse } from "next/server";
import { getDb } from "../../../utils/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  const { username, name, email, password } = await req.json();

  if (!username || !name || !email || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const db = await getDb();
  const usersCollection = db.collection("users");

  const existing = await usersCollection.findOne({
    $or: [{ username }, { email }],
  });

  if (existing) {
    return NextResponse.json({ error: "User already exists" }, { status: 409 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await usersCollection.insertOne({
    username,
    name,
    email,
    password: hashedPassword,
    createdAt: new Date(),
  });

  return NextResponse.json({ message: "User registered" }, { status: 201 });
}
