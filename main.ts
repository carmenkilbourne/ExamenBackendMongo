import { MongoClient, ObjectId } from "mongodb";

const MONGO_URL =
  "mongodb+srv://ckilbourne:12345@nebrija-cluster.cumaf.mongodb.net/?retryWrites=true&w=majority&appName=Nebrija-Cluster";
const client = new MongoClient(MONGO_URL);
const dbName = "Examen";
await client.connect();
console.log("Conexion exitosa");
const db = client.db(dbName);
//const testCollection = db.collection<TestModel>("test");
const handler = async (req: Request): Promise<Response> => {
  const method = req.method;
  const url = new URL(req.url);
  const path = url.pathname;
  if (method === "GET") {
    if (path === "/hola") {
      return new Response("hola",{status:200});
    }
  }
  else if (method === "POST") {}
  else if (method === "PUT") {}

  return new Response("No endpoint", { status: 404 });
};
Deno.serve({ port: 4000 }, handler);
