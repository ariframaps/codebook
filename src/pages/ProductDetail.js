import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Rating } from "../components"
import { useCart } from "../context/CartContext"
import { GetProductDetail } from "../services/ProductService"
import { useAuth } from "../context/AuthContext"

export const ProductDetail = () => {
    const { id } = useParams() // get product id from  url
    const [product, setProduct] = useState() // store product
    const { cartList, addToCart, removeFromCart } = useCart() // cart context and reducer functions
    const { isLoggedIn } = useAuth() // logged in status
    const navigate = useNavigate()

    const [isInCart, setIsInCart] = useState(false) // is product in cart list check

    useEffect(() => {
        const fetchProduct = async () => {
            // storing product
            const result = await GetProductDetail(id)
            setProduct(result[0])
            // check if product is already in cart or not
            const find = cartList.find(cartItem => cartItem.id === result[0].id)
            setIsInCart(find)
        }
        fetchProduct()
    }, [id, cartList])

    // button
    function handleButton() {
        if (!isLoggedIn) {
            navigate('/login');
            return;
        }
        setIsInCart(!isInCart);
        isInCart ? removeFromCart(product) : addToCart(product);
    }

    const button = {
        disabled: 'bg-slate-700 dark:bg-slate-600',
        blue: 'bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
        red: 'bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
    }

    return (
        <main className="mt-16 md:mt-20 py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
            {product && (
                <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                        <div className="shrink-0 max-w-lg lg:max-w-2xl mx-auto">
                            <img className="w-full  rounded-lg border dark:border-slate-600" src={product.poster} alt="" />
                        </div>

                        <div className="mt-6 sm:mt-8 lg:mt-0">
                            <h1
                                className="text-xl font-semibold text-gray-900 sm:text-4xl dark:text-white"
                            >
                                {product.name}
                            </h1>
                            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                <p
                                    className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
                                >
                                    ${product.price}
                                </p>

                                <div className="flex items-center gap-3 md:gap-4 mt-2 sm:mt-0">
                                    <Rating rating={product.rating} />
                                    <p
                                        className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
                                    >
                                        ({product.rating}.0)
                                    </p>
                                    {product.best_seller && (<span className="px-2 py-1 rounded border bg-orange-100 border-orange-300 text-xs md:ext-base">Best seller</span>)}
                                    {product.in_stock ? (<span className="px-2 py-1 rounded border bg-green-100 border-green-300 text-xs md:ext-base">in stock</span>) : (<span className="px-2 py-1 rounded border bg-red-100 border-red-300">out of stock</span>)}
                                    <span className="px-2 py-1 rounded border bg-blue-100 border-blue-300 text-xs md:ext-base">{product.size} MB</span>
                                </div>
                            </div>

                            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                                <button
                                    className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    <svg
                                        className="w-5 h-5 -ms-2 me-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                        />
                                    </svg>
                                    Add to favorites
                                </button>

                                <button onClick={handleButton} disabled={!product.in_stock}
                                    className={`${product.in_stock ? (isInCart ? button.red : button.blue) : button.disabled} text-white mt-4 sm:mt-0 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none flex items-center justify-center`}
                                >
                                    <svg
                                        className="w-5 h-5 -ms-2 me-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                                        />
                                    </svg>
                                    {isInCart ? 'Remove' : 'Add to cart'}
                                </button>
                            </div>

                            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                            <p className="mb-6 text-gray-500 dark:text-gray-400">
                                {product.long_description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}
