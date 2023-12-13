import { Product } from "@prisma/client";
import Link from "next/link";
import Price from "./price";
import Image from "next/image"

interface productGridProps{
    product:Product;
}

export default function ProductGrid({product}: productGridProps) {
    const isNewProduct = Date.now() - new Date(product.dateCreate).getTime() - 1000 * 60 * 60 *24 * 7 // checking the days of product age
    

    
    return(
        <Link href ={"/products/" + product.id}
        className="card w-full bg-base-300 hover:shadow-xl transition-shadow"> <div className="card-body">
           <figure>
            <Image src={product.imageUrl} alt={product.name}
            width={400}
            height={700}
            className="h-48 object-cover"/>
           </figure>
           
            <h2 className="card-title">
                {product.name}
                {isNewProduct && <div className="badge badge-accent">New</div>}
                </h2></div>
                <p className="p-5">{product.description}</p>
                <Price price={product.price}></Price></Link>

    )

}