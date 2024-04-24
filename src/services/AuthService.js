export const LoginRequest = async (userLoginInfo) => {
    const request = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userLoginInfo)
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/login`, request)
    const data = await response.json()
    return data
}

export const RegisterRequest = async (userRegisterInfo) => {
    const request = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userRegisterInfo)
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/register`, request)
    const data = await response.json()
    return data
}
