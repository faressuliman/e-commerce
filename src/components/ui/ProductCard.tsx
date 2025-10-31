import { ShoppingCart, Heart } from "lucide-react";
import { IProduct } from "../../interfaces";
import Button from "./Button"

const ProductCard = ({
  title,
  subtitle,
  price,
  thumbnail,
}: Pick<IProduct, "title" | "subtitle" | "price" | "thumbnail">) => {
  return (
    <div className="w-[300px] bg-white border border-gray-200 shadow-sm flex flex-col h-[448px]">
      {/* Product Image */}
      <img
        className="rounded-t-lg w-full h-64 object-cover"
        src={thumbnail}
        alt={title}
      />

      {/* Product Details */}
      <div className="flex flex-col justify-between grow p-5 bg-[#F4F5F7] rounded-b-lg">
        <div>
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="mb-4 font-normal text-gray-700 text-sm">
            {subtitle}
          </p>
        </div>

        {/* Price & Buttons */}
        <div className="flex flex-col mt-auto">
          <span className="text-lg font-semibold text-gray-900 mb-3">
            ${price}
          </span>

          <div className="flex items-center justify-center gap-3 w-full">
            <Button className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-primary border hover:bg-white hover:-translate-y-1 hover:border-primary hover:text-primary text-sm font-medium rounded-md transition-all flex-1">
              <ShoppingCart size={18} />
              Add To Cart
            </Button>

            <button className="p-2 border border-gray-300 rounded-lg hover:border-primary hover:cursor-pointer transition-colors">
              <Heart size={18} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
