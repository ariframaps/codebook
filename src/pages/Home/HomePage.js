import { Hero } from "./Components/Hero"
import { FeaturedProdct } from "./Components/FeaturedProdct"
import { Testi } from "./Components/Testi"
import { FAQs } from "./Components/FAQs"

export const HomePage = () => {
    return (
        <main>
            <Hero />
            <FeaturedProdct />
            <Testi />
            <FAQs />
        </main>
    )
}
