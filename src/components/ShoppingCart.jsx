import {
  Popover,
  PopoverHandler,
  PopoverContent,
  List,
  ListItem,
  ListItemSuffix,
  Card
} from "@material-tailwind/react";

import { TrashIcon } from "@heroicons/react/24/solid";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function ShoppingCartButton() {
  const { removeFromCart, cartItems, total, totalPrice } = useContext(CartContext);
  totalPrice()

  return (
    <Popover placement="bottom">
      <PopoverHandler>
        <a className="flex">
          <FaShoppingCart />
          <small className="ms-1">{cartItems.length}</small>
        </a>
      </PopoverHandler>
      <PopoverContent className="p-5">
        <h3 className="flex content-evenly font-bold text-xl mb-4">Your cart</h3>
        <Card className="w-96">
          <List>
            {
            cartItems.length > 0
            ? cartItems.map((item, i) => <CardItemCart data={item} key={`${item.id}-cart-${i}`} handleRemove={removeFromCart}/>)
            : <p>Vacio</p>
            }
          </List>
        </Card>
        <button
          className="middle none center mt-3 rounded-lg border border-pink-500 py-2 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-dark="true"
        >
          Chekout
        </button>
        <p className="font-bold mt-5">Total: $ {total}</p>
      </PopoverContent>
    </Popover>
  );
}

function CardItemCart({data, handleRemove}) {
  const { title, id } = data;
  return (
    <ListItem ripple={false} className="py-3 px-2 flex hover:bg-blue-100">
      {title.split(" ").splice(0, 4).join(" ")}
      <ListItemSuffix>
        <button onClick={() => handleRemove(id)} className="ms-3">
          <TrashIcon className="h-5 w-5" />
        </button>
      </ListItemSuffix>
      <br />
    </ListItem>
  );
}
