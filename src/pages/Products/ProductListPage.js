import { useState, useEffect } from "react"
import { ProductCard } from "../../components"
import { Filter } from "./Components/Filter"
import { useLocation } from "react-router-dom"
import { useFilter } from "../../context/filterContext"

export const ProductListPage = () => {
    const [showFilter, setShowFilter] = useState(false)
    const search = useLocation().search;
    const searchTerm = new URLSearchParams(search).get("q");
    const { productsList, initialProductsList } = useFilter()

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:8000/products')
            let result = await response.json()
            if (searchTerm) {
                result = await result.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
            }
            initialProductsList(result)
        }
        fetchProducts()
    }, [searchTerm, initialProductsList])

    return (
        <main>
            {showFilter && (<Filter setShowFilter={setShowFilter} />)}
            <div className=" max-w-screen-xl mx-auto p-4">
                <div className="flex justify-between my-6 text-2xl">
                    <span>All eBooks({productsList ? productsList.length : '0'})</span>
                    {searchTerm && <span>Search result for '{searchTerm}'</span>}
                    <button onClick={() => setShowFilter(!showFilter)} className="hover:bg-slate-200 p-3 rounded-md" >Filter <i className="bi bi-sliders2 p-1"></i></button>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 gap-y-8 justify-items-center my-6">
                    {productsList && productsList.map(product => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </main>
    )
}
