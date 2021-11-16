// import nc from "next-connect";
// import productSchema from "../../../model/productSchema";
// import db from "../../../utils/db"

// // handler calls the next connect . next connect is used for middleware routing
// const handler=nc();
// handler.get(async(req,res)=>{
//     // like express in get,req and res is accepted as a parameter,
//     await db.connect();
//     //we want all the products from database, but before that we want to connect to database .
//     const products=await productSchema.find({});//empty json objct means find returns all the product list
//     // now delete the database connection after use;
//     await db.disconnect();
//     res.send(products);
// })
// //since handler is the one where we are getting the req and response.
// export default handler;


// //4th step for mongodb.this will give you empty array. now we want to make another api page that will seed all the 
// // product details into this page.
import nc from 'next-connect';
import Product from '../../../model/Product';
import db from '../../../utils/db';
import data from '../../../utils/data';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  res.send(products);
});

export default handler;