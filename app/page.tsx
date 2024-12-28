import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'
export default function Home() {
  return (
    <main className="">
      <h1>Hello World</h1>
      <Link href="/users" className='text-blue-600'>Users</Link>
      <ProductCard />
    </main>
  )
}
