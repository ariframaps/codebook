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
    const response = await fetch(`http://localhost:8000/600/users/${sessionData.id}`, {
        type: 'GET',
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${sessionData.accessToken}`
        }
    })
    const data = await response.json();
    return data
}

export const PostOrder = async (userOrder, sessionData) => {
    await fetch("http://localhost:8000/660/orders", {
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

    const response = await fetch(`http://localhost:8000/660/orders`, {
        type: 'GET',
        headers: { 'content-type': 'application/json', Authorization: `Bearer ${user.accessToken}` }
    })
    const data = await response.json()
    return data.filter((order) => order.user.id === user.id)
}