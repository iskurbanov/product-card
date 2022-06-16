import Image from "next/image";
import Star from "./Star";

const ProductCard = ({ rating }) => {
  return (
    <div className="flex flex-col justify-center items-center w-72 h-96 bg-white py-3 px-1 rounded-sm shadow-md group relative">
      <div className="relative w-full h-full">
        <div className="opacity-0 group-hover:opacity-100 absolute top-1/2 w-full flex justify-center z-10">
          <button className="bg-gradient-to-b from-sky-600 to-sky-800 px-6 py-1.5 text-white rounded">
            Add to cart
          </button>
        </div>
        <Image src="/assets/shirt-1.jpg" alt="shirt" layout="fill" objectFit="contain" className="group-hover:opacity-50 transition-opacity" />
      </div>
      <div className="flex flex-col items-center pb-4">
        <p className="text-center">Ultrafine Merino T-Shirt</p>
        <p className="text-center font-light text-md">$80.00</p>
        <div className="flex gap-x-0.5 pt-3">
          {
            [...Array(5)].map((_, i) => (
              <Star
                key={i}
                fill={`${i < rating ? "" : "gray"}`}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default ProductCard;