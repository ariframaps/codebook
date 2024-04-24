import { DashBoardEmpty } from "./Components/DashBoardEmpty"
import { OrderCard } from "./Components/OrderCard"

export const DashboardPage = () => {
    const orderList = [{}, {}]

    return (
        <main className="flex flex-col justify-start items-center mt-20">
            <h2 className="text-3xl font-bold ">My Dashboard</h2>
            {orderList.length ? (
                orderList.map(order => (
                    <OrderCard />
                ))
            ) : (
                <DashBoardEmpty />
            )}
        </main>
    )
}
