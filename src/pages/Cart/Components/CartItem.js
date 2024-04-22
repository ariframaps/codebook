import { useNavigate } from "react-router-dom"
import { useCart } from "../../../context/CartContext"

export const CartItem = ({ item }) => {
    const navigate = useNavigate()

    // useCart dispatch function
    const { removeFromCart } = useCart()

    return (
        <li className="py-3 px-3 sm:py-4 bg-slate-100 dark:bg-gray-700">
            <div className="flex">
                <div onClick={() => navigate(`/products/${item.id}`)} className='flex items-center flex-1 cursor-pointer'>
                    <div className="flex-shrink-0">
                        <img className="w-12 h-12" src={item.poster} alt="Neil" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                            {item.name}
                        </p>
                    </div>
                </div>
                <div className="inline-flex items-center text-base text-lg font-semibold text-gray-900 dark:text-white">
                    ${item.price}
                    <button onClick={() => removeFromCart(item)} className="ms-4 px-2 py-1 text-xl text-red-600 bi bi-trash3-fill rounded hover:text-white hover:bg-red-600"></button>
                </div>
            </div>
        </li>
    )
}
