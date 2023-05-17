import { MongoClient } from "mongodb"

export async function connect() {
    const client = new MongoClient("mongodb://localhost:21017")
    await client.connect()
}
