import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductsComponent from "./ProductsComponent";

export default function IshopIndexComponent() {
  const [categories, setCategories] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [jewelery, setJewelery] = useState<number>(0);
  const [electronics, setElectronics] = useState<number>(0);
  const [menclothing, setMenclothing] = useState<number>(0);
  const [womenclothing, setWomenclothing] = useState<number>(4);

  useEffect(() => {
    alert("component will mount");
    axios.get("http://127.0.0.1:8080/products").then((res) => {
      setCategories(res.data); //this will set the response data into the setCategories.
      setProducts(res.data);
      setElectronics(res.data.filter((product: any) => product.category === "electronics").length);
      setJewelery(res.data.filter((product: any) => product.category === "jewelery").length);
      setMenclothing(
        res.data.filter((product: any) => product.category === "men's clothing").length
      );
      setWomenclothing(
        res.data.filter((product: any) => product.category === "women's clothing").length
      );
    });
  }, []);

  return (
    <div className='container-fluid'>
      <BrowserRouter>
        <header className='bg-danger p-2 text-white text-center'>
          <h2>
            <span className='bi bi-cart4'></span> I-Shop SPA
          </h2>
        </header>
        <section>
          <div className='row'>
            <div className='col-3'>
              <ul className='list-unstyled'>
                <li>
                  <Link className='btn btn-danger w-100 mt-2' to={`/products/electronics`}>
                    Electronics({electronics})
                  </Link>
                </li>
                <li>
                  <Link className='btn btn-danger w-100 mt-2' to={`/products/jewelery`}>
                    Jewelery({jewelery})
                  </Link>
                </li>
                <li>
                  <Link className='btn btn-danger w-100 mt-2' to={`/products/men's clothing`}>
                    Men's Clothing({menclothing})
                  </Link>
                </li>
                <li>
                  <Link className='btn btn-danger w-100 mt-2' to={`/products/women's clothing`}>
                    Women's Clothing({womenclothing})
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-6'>
              <Routes>
                <Route path='/products/:category' element={<ProductsComponent />}></Route>
              </Routes>
            </div>
            <div className='col-3'></div>
          </div>
        </section>
      </BrowserRouter>
    </div>
  );
}
