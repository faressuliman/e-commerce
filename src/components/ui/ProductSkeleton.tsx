const ProductCardSkeleton = () => {
  return (
    <div className="w-[300px] h-[448px] bg-white border border-gray-200 shadow-sm flex flex-col animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-64 bg-gray-300"></div>

      {/* Details Skeleton */}
      <div className="flex flex-col justify-between grow p-5 bg-[#F4F5F7]">
        <div>
          {/* Title */}
          <div className="h-5 bg-gray-300 w-3/4 mb-3"></div>

          {/* Subtitle */}
          <div className="h-3 bg-gray-300 w-full mb-3"></div>
          <div className="h-3 bg-gray-300 w-5/6 mb-6"></div>
        </div>

        {/* Price & Buttons */}
        <div className="flex flex-col mt-auto">
          {/* Price Rectangle */}
          <div className="h-5 bg-gray-300 w-1/3 mb-4"></div>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-3 w-full">
            {/* Add to Cart Rectangle */}
            <div className="h-9 bg-gray-300 flex-1 rounded-md"></div>

            {/* Heart Icon Square */}
            <div className="h-9 w-9 bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
