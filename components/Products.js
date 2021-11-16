import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core"
import data from "../utils/data"
import Link from "next/link"
const Products = () => {
    return (
        <div className="flex mt-4 ">
            <div>
                <div>
                    <div className="text-3xl font-extrabold">Products</div>
                </div>
                <div className="grid grid-cols-3 gap-3 grid-flow-row mt-4">
                    {data.products.map((product)=>(
                        <div key={product.name}>
                            <Card>
                                <Link href={`/product/${product.slug}`} passHref>
                                        {/*slug is a user friendly name, product mapped to
                                        data.products. inside that array we want to map to every objects
                                        and while using a property of an object, we use 
                                        name with which objects were mapped dot the property of
                                        mapped object like in this case product.slug . "` `" is used
                                        when we need to access values followed by ${urlname} syntax.   */}
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={product.image}
                                        title={product.name}
                                    >
                                    </CardMedia>
                                    <CardContent><div className="font-bold">{product.name}</div>
                                    </CardContent>
                                </CardActionArea>
                                </Link>
                                <CardActions><div className="flex px-2 space-x-4">
                                    <div>{product.price}</div>
                                    <Button size="small"
                                    style={{
                                        color:"goldenrod",
                                        borderColor: "goldenrod",
                                    }} color="primary">Add to Cart</Button>
                                    </div>
                                </CardActions>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products;
