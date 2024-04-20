import { NavLink } from "react-router-dom"

export const DropdownLoggedOut = () => {
    return (
        <div id="dropdownNavbar" className={`absolute right-0 mt-3 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                <li>
                    <NavLink to="/products" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Log in</NavLink>
                </li>
            </ul>
            <div className="py-1">
                <NavLink to="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Register</NavLink>
            </div>
        </div>
    )
}
