import { useState } from "react";

export default function CartItemsComponent(props: any) {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [product, setProduct] = useState<any>({});
  return (
    <div>
      <button className='btn btn-warning'>
        <span className='bi bi-cart3'>[{props.count}] Your Cart Items</span>
      </button>
    </div>
  );
}
