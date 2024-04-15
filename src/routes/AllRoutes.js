import { Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage, CartPage, DashboardPage, HomePage, ProductListPage, PageNotFound } from "../pages";

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="products" element={<ProductListPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}
