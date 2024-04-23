import { OrderSuccess } from "./components/OrderSuccess"
import { OrderFail } from "./components/OrderFail"

export const OrderPage = () => {
    const orderStatus = false

    return (
        <main>
            orderpage
            {orderStatus ? <OrderSuccess /> : <OrderFail />}
        </main >
    )
}
