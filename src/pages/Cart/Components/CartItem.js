import { useNavigate } from "react-router-dom"
import { useCart } from "../../../context/CartContext"

export const CartItem = ({ item }) => {
    const navigate = useNavigate() // useNavigate
    const { removeFromCart } = useCart() // useCart function

    return (
        <li className="py-3 px-3 sm:py-4 bg-slate-100 dark:bg-gray-700">
            <div className="flex justify-between">
                <div onClick={() => navigate(`/products/${item.id}`)} className='flex items-center flex-1 cursor-pointer max-w-60s'>
                    <div className="flex-shrink-0">
                        <img className="w-10 md:w-12 h-10 md:h-12" src={item.poster} alt="preduct" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="truncate text-md md:text-lg font-medium text-gray-900 truncate dark:text-white">
                            {item.name}
                        </p>
                    </div>
                </div>
                <div className="inline-flex items-center text-base text-lg font-semibold text-gray-900 dark:text-white ms-3 md:ms-0">
                    ${item.price}
                    <button onClick={() => removeFromCart(item)} className="ms-2 md:ms-4 px-1 md:px-2 py-1 text-xl text-red-600 bi bi-trash3-fill rounded hover:text-white hover:bg-red-600"></button>
                </div>
            </div>
        </li>
    )
}
