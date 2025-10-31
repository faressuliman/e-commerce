import { NavLink } from "react-router-dom"
import background from "../assets/background.png"
import logo from "../assets/logo.png"

interface IProps {
    title: string
}

const PageHeader = ({ title }: IProps) => {
    return (
        <section className="relative w-full h-[316px] flex items-center justify-center">
            <img src={background} className="absolute inset-0 w-full h-full object-cover brightness-90" />
            <div className="absolute inset-0 z-10 text-center pl-3 lg:pl-0">
                {/* Logo */}
                <div className="hidden lg:flex justify-center mt-20 mb-2">
                    <img src={logo} alt="Logo" className="h-10 w-auto" />
                </div>
                {/* Title */}
                <h1 className="text-3xl font-semibold text-black mt-24 lg:mt-0">{title}</h1>

                {/* Breadcrumb */}
                <div className="text-sm text-gray-700 mt-2">
                    <NavLink to="/"><span className="font-bold hover:underline hover:cursor-pointer">Home</span></NavLink> <span className="mx-2">{'>'}</span> <span>{title}</span>
                </div>
            </div>
        </section>
    )
}

export default PageHeader