import { MongoClient, ObjectId } from "mongodb";

const MONGO_URL =
  "mongodb+srv://ckilbourne:12345@nebrija-cluster.cumaf.mongodb.net/?retryWrites=true&w=majority&appName=Nebrija-Cluster";
const client = new MongoClient(MONGO_URL);
const dbName = "nebrijadb";
await client.connect();
console.log("Conexion exitosa");
const db = client.db(dbName);
//const cosaCollection = db.collection<cosaModel>("cosa");
const handler = async (req: Request): Promise<Response> => {
  return new Response("No endpoint", { status: 404 });
};
Deno.serve({ port: 6768 }, handler);
