import hero from "../assets/hero-bg.png"
import Button from "../components/ui/Button"
import { sectionsData } from "../data"
import ProductCard from "../components/ui/ProductCard";
import { IProduct } from "../interfaces";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../lib/api";

const index = () => {

  const renderSectionsData = sectionsData.map(({ title, imageURL }) => (
    <div key={title} className="h-[500px] flex flex-col items-center gap-4 pt-5">
      <div className="w-[380px] h-[480px] rounded-md overflow-hidden shadow-lg hover:opacity-70 transition-opacity duration-300 hover:cursor-pointer">
        <img src={imageURL} alt={title} className="w-full h-full object-cover" />
      </div>
      <h2 className="text-grey font-bold md:text-xl text-lg">{title}</h2>
    </div>
  ))

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts
  })

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Failed to load products.</p>;

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">

        <section className="absolute inset-0">
          <img src={hero} className="w-full h-full object-cover" alt="Stylish room with modern furniture" />
        </section>

        <section className="relative z-10 w-full max-w-7xl xl:max-w-8xl mx-auto px-6 lg:px-16">

          <div className="
          bg-secondary p-8 sm:p-10 lg:p-12 md:ml-auto w-11/12 max-w-lg sm:max-w-xl md:max-w-md lg:max-w-[550px]">
            <p className="tracking-widest text-sm font-bold mb-3 sm:mb-4">New Arrival</p>

            <h1 className="tracking-wide text-2xl sm:text-3xl lg:text-5xl text-primary font-bold md:mb-2 sm:mb-4 leading-tight">
              Discover Our
            </h1>

            <h1 className="tracking-wide text-2xl sm:text-3xl lg:text-5xl text-primary font-bold mb-3 sm:mb-4 leading-tight">
              New Collection
            </h1>

            <p className="font-medium text-sm sm:text-base mb-4 sm:mb-6 lg:mb-8">
              Elevate your space with our latest curated furniture and decor. Experience the perfect blend of modern design, crafted for comfort and lasting style.
            </p>

            <Button
              className="w-full md:w-48 py-4 text-white bg-primary border hover:bg-secondary hover:-translate-y-1 hover:border-primary hover:text-primary mb-4 text-sm">
              SHOP NOW
            </Button>
          </div>
        </section>
      </section>

      {/* Dining/Living/Bedroom Section */}
      <section className="mt-8">
        <h2 className="text-grey font-bold md:text-3xl text-2xl text-center mb-1">Browse The Range</h2>
        <p className="md:text-lg text-md text-center mb-3 ">Intriguing and Concise Explore a world of possibilities with our diverse and ever-growing selection.</p>
        {/* Dining & Living & Bedroom */}
        <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center lg:space-x-6 space-y-6 lg:space-y-0">
          {renderSectionsData}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="mt-16">
        <h2 className="text-grey font-bold md:text-3xl text-2xl text-center mb-7">Featured Products</h2>
        {/* Dining & Living & Bedroom */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-10 space-y-6 lg:space-y-0">
          {data?.data?.map((product: IProduct) => (
            <ProductCard
              key={product.id}
              title={product.title}
              subtitle={product.subtitle}
              price={product.price}
              thumbnail={product.thumbnail}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default index