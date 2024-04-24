export const LoginRequest = async (userLoginInfo) => {
    const request = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userLoginInfo)
    }

    const response = await fetch('http://localhost:8000/login', request)
    const data = await response.json()
    return data
}

export const RegisterRequest = async (userRegisterInfo) => {
    const request = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userRegisterInfo)
    }

    const response = await fetch('http://localhost:8000/register', request)
    const data = await response.json()
    return data
}

export const LogOut = () => {
    sessionStorage.removeItem('CodebookAuth')
}
