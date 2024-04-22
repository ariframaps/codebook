import { Link } from "react-router-dom"
import { Rating } from "./Rating"
import { useCart } from "../../context/CartContext"
import { useEffect, useState } from "react"

export const ProductCard = ({ product }) => {
    // product destructuring
    const { id, poster, name, overview, rating, price, best_seller } = product

    // cart dispatch function
    const { cartList, addToCart, removeFromCart } = useCart()
    // is product in cart list check
    const [isInCart, setIsInCart] = useState(false)

    useEffect(() => {
        const find = cartList.find(cartItem => cartItem.id === product.id)
        setIsInCart(find)
    }, [cartList, product.id])

    // button color style
    const button = {
        disabled: 'bg-slate-700 dark:bg-slate-600',
        blue: 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
        red: 'bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
    }

    // product thumbnail styles
    const imgStyle = (url) => {
        const style = {
            width: '384px',
            height: '250px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            background: `url('${url}')`
        }
        return style;
    }

    function handleButton() {
        setIsInCart(!isInCart);
        isInCart ? removeFromCart(product) : addToCart(product);
    }

    return (
        <div className="w-full flex flex-col justify-between max-w-sm relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {best_seller ? <span className="absolute top-4 left-4 bg-orange-500 px-3 py-1.5 rounded text-white">Best seller</span> : ''}
            <div>
                <Link to={`/products/${id}`}>
                    <div style={imgStyle(poster)} className="rounded-t-lg"></div>
                </Link>
                <Link to={`/products/${id}`} className="px-5 mt-3 block">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </Link>
            </div>
            <div className="px-5 pb-5">
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{overview}</p>
                <div className="flex items-center mt-2.5 mb-5">
                    <Rating rating={rating} />
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{rating}.0</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                    <button disabled={!product.in_stock} onClick={handleButton} className={`${product.in_stock ? (isInCart ? button.red : button.blue) : button.disabled} text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-4 focus:outline-none`}>
                        {isInCart ? 'Remove' : 'Add to cart'}
                    </button>
                </div>
            </div>
        </div>

    )
}
