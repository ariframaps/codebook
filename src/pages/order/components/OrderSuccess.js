import { Link } from "react-router-dom"

export const OrderSuccess = ({ user }) => {
    return (
        <div className="my-20 overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-modal md:h-full">
            <div className="max-w-screen-md mx-auto relative p-4 w-full h-full md:h-auto">
                {/* <!-- Modal content --> */}
                <div className="relative p-4 text-center bg-white rounded-lg shadow-lg border dark:bg-gray-800 sm:p-7">
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                        <svg aria-hidden="true" className="w-8 h-8 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Success</span>
                    </div>
                    <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Order successful.</p>
                    <div className="flex flex-col items-center text-gray-900 dark:text-white">
                        <p>Thank you <span className="font-semibold">{user.name}</span> for your order</p>
                        <p>Please check your mail ({user.email}) for the eBook</p>
                        <div className="p-3 text-start w-fit rounded border border-slate-300 my-7">
                            <p>Order ID: (5)</p>
                            <p>Payment ID: xyz12345454</p>
                        </div>
                    </div>
                    <Link to='/dashboard' className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900">
                        Continue
                    </Link>
                </div>
            </div>
        </div>
    )
}
