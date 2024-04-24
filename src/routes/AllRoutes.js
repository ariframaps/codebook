import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage, RegisterPage, CartPage, DashboardPage, HomePage, ProductListPage, PageNotFound, ProductDetail, OrderPage } from "../pages";
import { useAuth } from "../context/AuthContext";

export const AllRoutes = () => {
    const { isLoggedIn } = useAuth()

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="cart" element={isLoggedIn ? <CartPage /> : <Navigate to='/login' />} />
                <Route path="dashboard" element={isLoggedIn ? <DashboardPage /> : <Navigate to='/login' />} />
                <Route path="order-status" element={<OrderPage />} />
                <Route path="products" element={<ProductListPage />} />
                <Route path="products/:id" element={<ProductDetail />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}
