import { useEffect, useState } from "react";

export default function ProductsComponent() {
  const [products, setProducts] = useState<any[]>([]); //set as generic type any [] which will only receive array type data.

  useEffect(() => {
    fetch("http://fakestoreapi.com/products")
      .then((response) => response.json()) //here the response from the api is converted into Json format.
      .then((data) => {
        setProducts(data); //here the json data received will be set into the setProducts state.
      });
  }, []);
  return (
    <div>
      <h3>Products List</h3>
      <ol>
        {products.map((product) => {
          return <li>{product.title}</li>;
        })}
      </ol>
    </div>
  );
}
