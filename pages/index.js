import ProductCard from "../components/ProductCard";

export default function Home() {

  const rating = 4;

  return (
    <div className="flex justify-center items-center max-w-7 w-full h-screen bg-neutral-200">
      <ProductCard rating={4} />
    </div>
  )
}