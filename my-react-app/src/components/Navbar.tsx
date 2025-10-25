import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"
import shCsrt from "../assets/shoppingCart.svg"
import like from "../assets/like.svg"
import lk from "../assets/lk.svg"

const navLinks = [
    {to: "/catalog", label: "Каталог"},
    {to: "/sale", label: "Скидки"}
]

const navIcons = [
    {to: "/shoppingCart", icon: shCsrt, alt: "Корзина", size: "w-12"},
    {to: "/favourites", icon: like, alt: "Избранное", size: "w-9"},
    {to: "/lk", icon: lk, alt: "Личный кабинет", size: "w-12"},
]

export default function Navbar() {
    return (
        <>
        <nav className="text-2xl font-semibold sticky top-0 backdrop-blur-sm">
            <div className="flex justify-between items-center mx-5">
                <Link to="/">
                    <img src={logo} className="w-18 cursor-pointer hover:text-shadow"/>
                </Link>
                <div className="flex w-3/12 justify-evenly">
                    {navLinks.map(({to, label})=>(
                        <Link key={to} to={to} className="cursor-pointer hover:drop-shadow">{label}</Link>
                    ))}
                </div>
                <div className="flex w-60 justify-between items-center">
                    {navIcons.map(({to, icon, alt, size})=>(
                       <Link key={to} to={to} className="cursor-pointer hover:drop-shadow">
                            <img src={icon} className={`${size} cursor-pointer hover:text-shadow`} alt={alt}/>                    
                        </Link> 
                    ))}
                </div>
            </div>
        </nav>
        </>
    )
}
