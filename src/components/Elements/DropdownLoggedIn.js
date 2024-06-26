import { NavLink } from "react-router-dom"
import { GetSessionStorage } from "../../services/DataService";
import { useAuth } from "../../context/AuthContext";

export const DropdownLoggedIn = () => {
  const { setLoggedOut } = useAuth() // use reducer from auth context
  const name = GetSessionStorage().name // get usename from session storage

  return (
    <div id="dropdownNavbar" className={`absolute right-0 mt-3 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
        <li>
          <NavLink to="/dashboard" className="block px-4 py-2 dark:hover:text-white border border-0 border-b-2">{name}</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cart</NavLink>
        </li>
      </ul>
      <div className="py-1" onClick={() => setLoggedOut()}>
        <NavLink to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</NavLink>
      </div>
    </div>
  )
}

