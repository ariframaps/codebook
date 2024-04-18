import { Link } from "react-router-dom"
import { Rating } from "./Rating"

export const ProductCard = ({ product }) => {

    // product thumbnail styles
    const imgStyle = (url) => {
        const style = {
            width: '384px',
            height: '250px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            background: `url('${url}')`
        }
        return style;
    }

    const { id, poster, name, overview, rating, price, best_seller } = product

    return (
        <div className="w-full flex flex-col justify-between max-w-sm relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {best_seller ? <span className="absolute top-4 left-4 bg-orange-500 px-3 py-1.5 rounded text-white">Best seller</span> : ''}
            <div>
                <Link to={`/products/${id}`}>
                    <div style={imgStyle(poster)} className="rounded-t-lg"></div>
                </Link>
                <Link to={`/products/${id}`} className="px-5 mt-3 block">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </Link>
            </div>
            <div className="px-5 pb-5">
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{overview}</p>
                <div className="flex items-center mt-2.5 mb-5">
                    <Rating rating={rating} />
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{rating}.0</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                </div>
            </div>
        </div>

    )
}
