import logo from '../../../assets/logo.png'

export const CartItem = ({ item }) => {
    return (
        <li className="py-3 sm:py-4">
            <div className="flex items-center">
                <div className="flex-shrink-0 border">
                    <img className="w-12 h-12 rounded-full" src={logo} alt="Neil" />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                    <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                        Neil Sims
                    </p>
                </div>
                <div className="inline-flex items-center text-base text-lg font-semibold text-gray-900 dark:text-white">
                    $320
                    <button className="ms-4 px-2 py-1 text-xl text-red-600 bi bi-trash3-fill rounded hover:text-white hover:bg-red-600"></button>
                </div>
            </div>
        </li>
    )
}
