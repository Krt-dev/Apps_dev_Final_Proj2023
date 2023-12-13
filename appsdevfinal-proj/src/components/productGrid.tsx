import { Product } from "@prisma/client";
import Link from "next/link";

interface productGridProps{
    product:Product;
}

export default function ProductGrid({product}: productGridProps) {
    return(
        <Link href ={"/products/" + product.id}
        className="card w-full bg-base-300 hover:shadow-xl transition-shadow"> <div className="card-body">
            <h2 className="card-title">
                {product.name}
                </h2></div>
                <p className="p-5">{product.description}</p></Link>

    )

}