import { MongoClient } from "mongodb";
export async function POST(req) {
  const body = await req.json();

  if (!body.name || !body.message || !body.email || !body.number) {
    return new Response(
      JSON.stringify({ message: "Please provide all values!" })
    );
  }

  const client = await MongoClient.connect(process.env.MONGO_URL);

  const db = client.db("portfolio");
  await db.collection("contact").insertOne({ body });
  client.close();

  return new Response(
    JSON.stringify({ message: "Message sent successfully!" })
  );
}
