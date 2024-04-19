import { useState, useEffect } from "react"
import { ProductCard } from "../../components"
import { Filter } from "./Components/Filter"

export const ProductListPage = () => {
    const [products, setProducts] = useState([])
    const [showFilter, setShowFilter] = useState(false)

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:8000/products')
            const result = await response.json()
            setProducts(result)
        }
        fetchProducts()
    }, [])

    return (
        <main className="mt-16">
            {showFilter && (<Filter setShowFilter={setShowFilter} />)}
            <div className=" max-w-screen-xl mx-auto p-4">
                <div className="flex justify-between my-6 text-2xl">
                    <span>All eBooks({products.length})</span>
                    <button onClick={() => setShowFilter(!showFilter)} className="hover:bg-slate-200 p-3 rounded-md" >Filter <i className="bi bi-sliders2 p-1"></i></button>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 gap-y-8 justify-items-center my-6">
                    {products.map(product => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </main>
    )
}
