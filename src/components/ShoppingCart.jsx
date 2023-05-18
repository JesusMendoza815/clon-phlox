import {
  Popover,
  PopoverHandler,
  PopoverContent,
  List,
  ListItem,
  ListItemSuffix,
  Card,
  IconButton,
  Typography
} from "@material-tailwind/react";

import { TrashIcon } from "@heroicons/react/24/solid";

import { FaShoppingCart } from "react-icons/fa";

import React, { useState } from "react";

export default function ShoppingCartButton({ addToCart, cartItems }) {

  <Popover placement="bottom">
  <PopoverHandler>
    <a>
      <FaShoppingCart />
    </a>
  </PopoverHandler>
  <PopoverContent>
    <h1 className="flex content-evenly">Tu carrito</h1>
    <Card className="w-96">
    <Card className="w-96">
  <List>
    {cartItems.map((item) => (
      <ListItem key={item.id} ripple={false} className="py-1 pr-1 pl-4">
        {item.title}
        <ListItemSuffix>
          <IconButton variant="text" color="blue-gray">
            <TrashIcon className="h-5 w-5" />
          </IconButton>
        </ListItemSuffix>
      </ListItem>
    ))}
  </List>
</Card>

    </Card>
    <button
      className="middle none center mr-3 rounded-lg border border-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      data-ripple-dark="true"
    >
      Chekout
    </button>
    <p>Total</p>
  </PopoverContent>
</Popover>
}
