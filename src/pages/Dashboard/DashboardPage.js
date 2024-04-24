import { useEffect, useState } from "react"
import { DashBoardEmpty } from "./Components/DashBoardEmpty"
import { OrderCard } from "./Components/OrderCard"

export const DashboardPage = () => {
    const [orderList, setOrderList] = useState([])

    const user = JSON.parse(sessionStorage.getItem('CodebookAuth'))

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:8000/660/orders`, {
                type: 'GET',
                headers: { 'content-type': 'application/json', Authorization: `Bearer ${user.accessToken}` }
            })
            const data = await response.json()
            const filteredOrderList = data.filter((order) => order.user.id === user.id)
            console.log(filteredOrderList)
            setOrderList(filteredOrderList)
        }
        fetchData()
    }, [])

    return (
        <main className="flex flex-col justify-start items-center mt-20">
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
