import { OrderItem } from "./OrderItem"

export const OrderCard = ({ order }) => {
    return (
        <div className="w-full max-w-3xl p-4 mt-7 md:mt-10 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-md md:text-xl font-bold leading-none text-gray-900 dark:text-white">Order ID: {order.id}</h5>
                <span className="text-sm md:text-base font-bold dark:text-white">{order.date}</span>
                <span className="text-md md:text-xl font-medium text-blue-600 dark:text-blue-300">
                    total price: ${order.amount_paid}
                </span>
            </div>

            <div className="flow-root">
                <ul className="divide-y-4 divide-white dark:divide-gray-600 my-5">
                    {order.cartList.map((item) => (
                        <OrderItem key={item.id} item={item} />
                    ))}
                </ul>
            </div>

        </div>
    )
}
