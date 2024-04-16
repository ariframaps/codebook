import { ProductCard } from "../../../components"

export const FeaturedProdct = () => {
    return (
        <section className="bg-white dark:bg-gray-900 min-h-section">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Featured eBooks</h2>
                    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Best selling collection of ebook on codebook this year with good reviews</p>
                </div>
                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </section>
    )
}