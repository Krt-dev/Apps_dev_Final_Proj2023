import ProductGrid from '@/components/productGrid'
import { prisma } from '@/lib/db/prisma'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const product = await prisma.product.findMany({
    orderBy: { id: "desc" }
  })
  return (
    <div>
      <div className="hero-content flex-col lg:flex-row">
        <Image src={product[0].imageUrl}
          alt={product[0].name}
          width={400}
          height={800}
          className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{product[0].name}</h1>
          <p className="py-6">{product[0].description}</p>
          <Link href={"/products/" + product[0].id} className="btn btn-accent">Check Product</Link>
        </div>
      </div>
    </div>
  )
}
