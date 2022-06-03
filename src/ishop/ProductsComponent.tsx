import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CartItemsComponent from "./CartItemsComponent";

export default function ProductsComponent() {
  const params = useParams();
  const [products, setProducts] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  // const AddToCartClick = (id: any) => {
  //   alert("add clicked");
  // };

  const AddToCart=()=>{
    
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    // alert("component mounted");
    axios.get(`http://127.0.0.1:8080/products/category/${params.category}`).then((res) => {
      setProducts(res.data);
    });
  }, [params.category]); // this dependency states that when the params.category will change then useEffect will fire up each time
  return (
    <div>
      <h2>{params.category} Products</h2>
      <div className='d-flex flex-wrap overflow-auto' style={{ height: "500px" }}>
        {products.map((product) => {
          return (
            <Card style={{ width: "250px" }} className='m-2 p-2'>
              <p className='text-center bg-dark text-light'>$ {product.price}</p>
              <CardMedia component='img' height='180' image={product.image} alt={product.title} />
              <CardContent>
                <Typography variant='h6' component='div' style={{ height: "200px" }}>
                  {product.title}
                </Typography>
                <Button onClick={handleClickOpen}>Description</Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby='alert-dialog-title'
                  aria-describedby='alert-dialog-description'
                >
                  <DialogTitle id='alert-dialog-title'>{product.title}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id='alert-dialog-description'>
                      {product.description}
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button variant='contained' onClick={handleClose}>
                      Ok
                    </Button>
                  </DialogActions>
                </Dialog>
              </CardContent>
              <CardActions>
                <Button
                  onClick={(e: any) => {
                    <CartItemsComponent count={product.id} />;
                  }}
                  variant='contained'
                  className='w-100'
                >
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
