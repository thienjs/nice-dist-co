import type Prisma from "@prisma/client";
import { CartItem } from "./CartItem";

type CartItemsProps = {
  readonly products: Array<Prisma.Product>;
};

export const CartItems = ({ products }: CartItemsProps) => (
  <ul className="-my-5 divide-y divide-gray-200">
    {products.map((product) => (
      <CartItem key={product.id} {...product} />
    ))}
  </ul>
);
