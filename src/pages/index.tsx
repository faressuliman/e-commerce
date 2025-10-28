import hero from "../assets/hero-bg.png"
import Button from "../components/ui/Button"

const index = () => {
  return (
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
  )
}

export default index