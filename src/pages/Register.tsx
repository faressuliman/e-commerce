import Button from "../components/ui/Button"
import Input from "../components/ui/Input"
import PageHeader from "../components/PageHeader"

const Register = () => {
  return (
    <div>

      <PageHeader title="Register"/>
      <div className="max-w-screen-3xl mx-auto lg:px-12 p-4 pb-24">
        <h2 className="py-4 font-semibold">CREATE AN ACCOUNT</h2>
        <h6 className="pb-6 text-xs font-normal tracking-wide">Please register below to create an account</h6>

        {/* Form wrapper */}
        <form className="text-sm flex flex-col gap-4">
          <div className="max-w-xs">
            <Input label="First Name" className="w-full" />
            <Input label="Last Name" className="w-full" />
            <Input label="Your Email Address" className="w-full" />
            <Input label="Your Password" className="w-full" />
            <Button
              className="w-56 rounded-md mt-2 py-3 text-white bg-primary border hover:bg-white hover:-translate-y-1 hover:border-primary hover:text-primary mb-4 text-xs"
            >
              CREATE AN ACCOUNT
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
