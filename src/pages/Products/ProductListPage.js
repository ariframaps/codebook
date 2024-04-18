import { useState, useEffect } from "react"
import { ProductCard } from "../../components"

export const ProductListPage = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:8000/products')
            const result = await response.json()
            setProducts(result)
        }
        fetchProducts()
    }, [])

    return (
        <main>
            <div className=" max-w-screen-xl mx-auto p-4">
                <div className="flex justify-between my-6 text-2xl">
                    <span>All eBooks({products.length})</span>
                    <button>Filter <i class="bi bi-sliders2 p-1"></i></button>
                </div>
                <div className="grid grid-cols-3 gap-y-8 justify-items-center my-6">
                    {products.map(product => (
                        <ProductCard product={product} />
                    ))}
                </div>
            </div>

        </main>
    )
}
