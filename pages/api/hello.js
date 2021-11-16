// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from "../../utils/db"


export default async function helloAPI(req, res) {  
  await db.connect(); //this was to check if connection was okay
  await db.disconnect();
  res.status(200).json({ name: 'John Doe' })
}


//second step for mongodb to check if connection is okay