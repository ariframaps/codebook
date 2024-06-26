import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { CartItem } from "./Components/CartItem"
import { EmptyCart } from "./Components/EmptyCart"
import { Checkout } from "./Components/Checkout"
import { Link } from "react-router-dom"

export const CartPage = () => {
    const [showCheckout, setShowCheckout] = useState(false) // set show checkout modal
    const { cartList, totalPrice } = useCart() // useCart context

    return (
        <main className="flex justify-center items-start pt-28 dark:bg-gray-900 px-5">
            <div className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Cart ({cartList.length})</h5>
                    <span className="text-xl font-medium text-blue-600 dark:text-blue-300">
                        total price: ${totalPrice}
                    </span>
                </div>
                {(cartList.length > 0) ? (
                    <div className="flow-root">
                        <ul className="divide-y-2 divide-gray-200 dark:divide-gray-600 my-5">
                            {cartList.map((item, index) => (
                                <CartItem item={item} key={index} />
                            ))}
                        </ul>

                        {/* <!-- Modal toggle --> */}
                        <button onClick={() => setShowCheckout(!showCheckout)} data-modal-target="authentication-modal" className="w-full mt-7 md:mt-10 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                            Checkout
                        </button>
                        <Link to='/products' className="w-full mt-2 block text-black hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border border-blue-600 dark:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800" type="button">
                            Add more!
                        </Link>

                        {showCheckout && <Checkout setShowCheckout={setShowCheckout} />}
                    </div>
                ) : (
                    <EmptyCart />
                )}

            </div>
        </main>
    )
}
