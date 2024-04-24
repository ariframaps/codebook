import { OrderItem } from "./OrderItem"

export const OrderCard = () => {
    const products = [{}, {}]

    return (
        <div className="w-full max-w-3xl p-4 mt-10 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Order ID: 4</h5>
                <span className="text-xl font-medium text-blue-600 dark:text-blue-300">
                    total price: $
                </span>
            </div>

            <div className="flow-root">
                <ul className="divide-y-4 divide-white dark:divide-gray-600 my-5">
                    {products.map((item, index) => (
                        <OrderItem />
                    ))}
                </ul>
            </div>

        </div>
    )
}
