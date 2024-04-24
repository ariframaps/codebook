import logo from '../../../assets/logo.png'

export const OrderItem = ({ item }) => {
    return (
        <li className="py-3 px-3 sm:py-4 bg-slate-100 dark:bg-gray-700">
            <div className="flex">
                <div className='flex items-center flex-1 cursor-pointer'>
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
                </div>
            </div>
        </li>
    )
}
