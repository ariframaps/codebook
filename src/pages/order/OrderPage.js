import { OrderSuccess } from "./components/OrderSuccess"
import { OrderFail } from "./components/OrderFail"
import { useLocation } from "react-router-dom"

export const OrderPage = () => {
    const { state } = useLocation() // get the state from the checkout

    return (
        <main className="dark:bg-gray-900">
            {state.status ? <OrderSuccess user={state.user} /> : <OrderFail />}
        </main >
    )
}
