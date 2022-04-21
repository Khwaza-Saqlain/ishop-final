import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProductsComponent() {
  const params = useParams();
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    // alert("component mounted");
    axios.get(`http://127.0.0.1:8080/products/category/${params.category}`).then((res) => {
      setProducts(res.data);
    });
  }, [params.category]); // this dependenty states that when the params.category will change then useEffect will fire up
  return (
    <div>
      <h2>{params.category} Products</h2>
      <div className='d-flex flex-wrap overflow-auto' style={{ height: "500px" }}>
        {products.map((product) => {
          return (
            <Card style={{ width: "250px" }} className='m-2 p-2'>
              <p className='text-center bg-dark text-light'>$ {product.price}</p>
              <CardMedia component='img' height='180' image={product.image} alt={product.title} />
              <CardContent style={{ height: "400px" }}>
                <Typography variant='h6' component='div'>
                  {product.title}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  className='overflow-auto'
                  style={{ height: "200px" }}
                >
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant='contained' className='w-100'>
                  <span className='bi bi-cart4'> Add to Cart</span>
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
