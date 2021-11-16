// import nc from "next-connect";
// import productSchema from "../../model/Product";
// import db from "../../utils/db";
// import data from "../../utils/data";
// // handler calls the next connect . next connect is used for middleware routing
// const handler=nc();
// handler.get(async(req,res)=>{
//     // like express in get,req and res is accepted as a parameter,
//     await db.connect();
//     await productSchema.deleteMany();//deletes everything in products array. doing this to avoid duplicacy.
//     //await Product.insertMany(). we seen from api/products that it returns empty array for products array, but we want
//     //to feed data. now if we leave like this then there is no data until u fetch it from data.js
//     await productSchema.insertMany(data.products);
//     await db.disconnect();
//     res.send({message:"seeded Succesfully"});
// })
// //since handler is the one where we are getting the req and response. dont confuse this handler with the one in api/
// // prodcts/index.js. its just var name. work is different.
// export default handler;

// //5th step of mongodb for this project. 
import nc from 'next-connect';
import Product from '../../model/Product';
import db from '../../utils/db';
import data from '../../utils/data';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
});

export default handler;