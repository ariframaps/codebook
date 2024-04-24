import { useEffect, useState } from "react"
import { DashBoardEmpty } from "./Components/DashBoardEmpty"
import { OrderCard } from "./Components/OrderCard"
import { GetOrder } from "../../services/DataService"

export const DashboardPage = () => {
    const [orderList, setOrderList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await GetOrder() // fetch user order list
            setOrderList(data.reverse())
        }
        fetchData()
    }, [])

    return (
        <main className="flex flex-col justify-start items-center mt-28">
            <h2 className="text-3xl font-bold ">My Dashboard</h2>
            {orderList.length ? (
                orderList.map(order => (
                    <OrderCard order={order} key={order.id} />
                ))
            ) : (
                <DashBoardEmpty />
            )}
        </main>
    )
}
