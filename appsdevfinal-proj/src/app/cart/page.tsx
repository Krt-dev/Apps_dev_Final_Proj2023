import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry";

export const metadata = {
    title: "Your Cart - RhuKuJo Store",
};
export default async function CartPage() {
    //Fetch Item Data
    const cart = await getCart();

    return(
        //Title 
        <div>
            <h1 className="mb-6 text-3x1 font-bold">Shopping Cart</h1> 
           {cart?.items.map(cartItem => (
            <CartEntry cartItem={cartItem} key={cartItem.id} />
           ))}
        </div>
    )
}