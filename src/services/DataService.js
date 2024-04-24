export const SetSessionStorage = (data) => {
    const sessionData = {
        accessToken: data.accessToken,
        id: data.user.id,
        name: data.user.name
    }
    sessionStorage.setItem('CodebookAuth', JSON.stringify(sessionData))
    return
}

export const GetSessionStorage = () => {
    return JSON.parse(sessionStorage.getItem('CodebookAuth'))
}

export const GetUser = async (sessionData) => {
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${sessionData.id}`, {
        type: 'GET',
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${sessionData.accessToken}`
        }
    })
    const data = await response.json();
    return data
}

export const PostOrder = async (cartList, totalPrice, user, sessionData) => {
    // create current date
    const currentDate = new Date();
    const date = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Perlu ditambah 1 karena bulan dimulai dari 0 (Januari)
    const year = currentDate.getFullYear()

    // storing user order from cart
    const userOrder = {
        cartList: cartList,
        amount_paid: totalPrice,
        quantity: cartList.length,
        date: `${date}/${month}/${year}`,
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        },
    }
    await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionData.accessToken}`
        },
        body: JSON.stringify(userOrder)
    });
}

export const GetOrder = async () => {
    const user = GetSessionStorage()

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
        type: 'GET',
        headers: { 'content-type': 'application/json', Authorization: `Bearer ${user.accessToken}` }
    })
    const data = await response.json()
    return data.filter((order) => order.user.id === user.id)
}