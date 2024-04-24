import { Link } from "react-router-dom"

export const OrderFail = () => {
    return (
        <div className="my-40 overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-modal md:h-full">
            <div className="max-w-screen-md mx-auto relative p-4 w-full h-full md:h-auto">
                {/* <!-- Modal content --> */}
                <div className="relative p-4 text-center bg-white rounded-lg shadow-lg border dark:bg-gray-800 sm:p-7">
                    <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                        <svg className="w-8 h-8 text-red-500 dark:text-red-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>
                        <span className="sr-only">Fail</span>
                    </div>
                    <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Payment failed, please try again!</p>
                    <div className="flex flex-col items-center text-gray-900 dark:text-white mb-7">
                        <p>Your order is not confirmed</p>
                        <p>Contact us codebook@example.com for support</p>
                    </div>
                    <Link to='/cart' className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900">
                        Check your cart again
                    </Link>
                </div>
            </div>
        </div>
    )
}
