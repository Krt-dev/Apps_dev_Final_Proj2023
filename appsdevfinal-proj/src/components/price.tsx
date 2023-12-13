import { formatPrice } from "@/lib/db/format";

interface PriceProps {
    price: number,
    className?: string
}

export default function Price({price, className}:PriceProps){
    return(<span className= {`badge p-4 ${className}`}>{formatPrice(price)}</span>);

}