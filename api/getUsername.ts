import { MongoClient } from 'mongodb'



export default async function getUserName(request, response) {
  const client = await MongoClient.connect(CONNECTION_STRING)
  const db = await client.db()
  console.log(db)
  // console.log(client)
  // var result = await db.collection("[northwind]").find().toArray();
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  })
}
