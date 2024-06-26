import { useState, useEffect } from "react"
import { Loading, ProductCard } from "../../components"
import { Filter } from "./Components/Filter"
import { useLocation } from "react-router-dom"
import { useFilter } from "../../context/filterContext"
import { GetProducts } from "../../services/ProductService"

export const ProductListPage = () => {
    const [showFilter, setShowFilter] = useState(false) // filter bar show
    const search = useLocation().search; // use location for search value
    const searchTerm = new URLSearchParams(search).get("q"); // getting search value from URL after submitting search input
    const { productsList, initialProductsList } = useFilter()
    const [isLoading, setIsLoading] = useState()

    useEffect(() => {
        if (searchTerm) {
            setIsLoading(false);
            return;
        }
        productsList.length ? setIsLoading(false) : setIsLoading(true);
    }, [productsList, searchTerm])

    useEffect(() => {
        const fetchProducts = async () => {
            let result = await GetProducts() // get products list
            if (searchTerm) { // if there is a search term then filter it
                result = await result.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
            }
            initialProductsList(result)
        }
        fetchProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm])

    return (
        <main className="dark:bg-gray-900">
            {showFilter && (<Filter setShowFilter={setShowFilter} />)}
            <div className=" max-w-screen-xl mx-auto mt-16 p-4">
                <div className="flex justify-between items-center my-6 text-lg md:text-2xl dark:text-white">
                    <span className="hidden md:block ">All eBooks({productsList ? productsList.length : '0'})</span>
                    {searchTerm && <span>Search result for '{searchTerm}'</span>}
                    <button onClick={() => setShowFilter(!showFilter)} className="hover:bg-slate-300 hover:text-black p-3 rounded-md" >Filter <i className="bi bi-sliders2 p-1"></i></button>
                </div>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 gap-y-8 justify-items-center my-6">
                        {productsList && productsList.map(product => (
                            <ProductCard product={product} key={product.id} />
                        ))}
                    </div>
                )}

            </div>
        </main>
    )
}
