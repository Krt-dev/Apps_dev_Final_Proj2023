import ProductGrid from '@/components/productGrid'
import { prisma } from '@/lib/db/prisma'
import Image from 'next/image'

export default async function Home() {
  const product = await prisma.product.findMany({
    orderBy: {id: "desc"}
  })
  return (
   <div>
      <ProductGrid product={product[0]}/>
   </div>
  )
}
