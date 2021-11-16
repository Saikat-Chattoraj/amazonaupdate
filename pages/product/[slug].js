import { useRouter } from "next/router";
import data from "../../utils/data";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import { Button } from "@material-ui/core";

const ProductsDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  // // this above line means that for every slug value perform router.query routing
  // The goal of a query routing system is to provide efficient associative access to a large,
  // heterogeneous, distributed collection of information providers through routing a user query
  // to the most relevant information sources that can provide the best answer.
  //file name is product and does not work if name is products. Reason is our router link has
  // product/ so we need to name that same thing exactly in order to perform dynamic routing.
  const product = data.products.find((a) => a.slug == slug);
  if (!product) {
    return <div> 404 .Page Not Found. </div>;
  }
  return (
    <Layout
      title={product.name}
      description={product.description}
      addproperty="h-screen"
    >
      <div className="mb-36">
        <div className="px-72 mt-16">
          <Link href="/" passHref>
            <a className="text-yellow-500 hover:text-yellow-600 hover:underline">
              Back to Products
            </a>
          </Link>
        </div>
        <div className="container m-auto py-1 px-20 mt-12">
          <div className="grid grid-cols-3 gap-1 grid-flow-row">
            <div>
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={900}
                layout="responsive"
                className="rounded-md shadow-md"
              />
            </div>
            <div>
              <div className=" px-4 py-4 ml-8 tracking-wider">
                <ul>
                  <li className="mb-8 font-semibold text-4xl">
                    <h1>{product.name}</h1>
                  </li>
                  <li className="mb-2 text-lg font-semibold">
                    Category: {product.category}
                  </li>
                  <li className="mb-2 text-lg font-semibold">
                    Brand: {product.brand}
                  </li>
                  <li className="mb-2 text-lg font-semibold">
                    Rating: {product.rating} ⭐ ({product.numReviews} reviews)
                  </li>
                  <li className="mb-2 text-lg font-semibold">
                    Description: {product.description}
                  </li>
                </ul>
              </div>
            </div>
            <div className="pr-36 px-4 py-4">
              <div className="shadow-xl rounded-md">
                <div className="grid grid-cols-2 gap-0">
                  <div className=" pl-4">
                    <ul>
                      <li className="mb-2 text-lg font-semibold">Price</li>
                      <li className="mb-2 text-lg font-semibold">Status</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className="mb-2 text-lg font-semibold">
                        {product.price}
                      </li>
                      {/* ${product.countInStock} render incase u want to show actual amount of stock*/}
                      <li className="mb-2 text-lg font-semibold">
                        {product.countInStock > 0
                          ? "In Stock"
                          : "Currently Not Available "}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="m-auto py-2 px-2">
                  <Button
                    style={{
                      borderRadius: 35,
                      backgroundColor: "goldenrod",
                      padding: "6px 18px",
                      fontSize: "18px",
                    }}
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsDetails;
