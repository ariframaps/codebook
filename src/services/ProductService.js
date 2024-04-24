export const GetFeaturedProducts = async () => {
    const response = await fetch('http://localhost:8000/444/featured_products')
    const result = await response.json()
    return result
}

export const GetProducts = async () => {
    const response = await fetch('http://localhost:8000/444/products')
    const result = await response.json()
    return result
}

export const GetProductDetail = async (id) => {
    const response = await fetch(`http://localhost:8000/444/products?id=${id}`)
    const result = await response.json()
    return result
}