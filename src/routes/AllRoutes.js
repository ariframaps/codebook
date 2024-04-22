import { Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage, CartPage, DashboardPage, HomePage, ProductListPage, PageNotFound, ProductDetail } from "../pages";

export const AllRoutes = ({ setIsLoggedIn }) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="register" element={<RegisterPage setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="products" element={<ProductListPage />} />
                <Route path="products/:id" element={<ProductDetail />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}
