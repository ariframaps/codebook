import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { LoginRequest } from "../../services/AuthService";
import { useAuth } from "../../context/AuthContext";
import { Loading } from "../../components/Elements/Loading";

export const LoginPage = () => {
    const navigate = useNavigate() // useNavigate
    const { setLoggedIn } = useAuth() // auth reducer
    const [isLoading, setIsLoading] = useState()

    // response status
    const [statusMessage, setStatusMessage] = useState(); // response status message
    const [isSuccess, setIsSuccess] = useState(); // response is success or not?

    async function handleLogin(e) {
        e.preventDefault();
        // storing user login input
        const userLoginInfo = {
            email: e.target.email.value,
            password: e.target.password.value,
        }

        setIsLoading(true);
        const data = await LoginRequest(userLoginInfo) // login request
        setIsLoading(false);

        if (typeof (data) === "string") { // if string, then it is returning error message string
            setStatusMessage(data) // set response status message
            setIsSuccess(false)
        } else {
            setIsSuccess(true)
            setLoggedIn(data) // logging in user
            navigate('/products') // navigating to products page
        }
    }

    return (
        <main className="bg-gray-50 dark:bg-gray-900 flex items-center">
            <section className="w-screen px-5">
                <div className="mx-auto max-w-screen-xl">
                    <div>
                        <div className="w-full mx-auto lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Log in to CodeBook
                            </h2>
                            <form onSubmit={handleLogin} className="mt-8 space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                {
                                    statusMessage && (
                                        <div className={`${isSuccess ? 'bg-green-100 border-green-200' : 'bg-red-100 border-red-200'} p-3 rounded-lg border `}>
                                            {isLoading ? (
                                                <Loading />
                                            ) : (
                                                <span>{isSuccess ? "Login success" : statusMessage} <i className={`ps-2 bi ${isSuccess ? "bi-check-circle-fill text-green-700" : "bi-exclamation-circle-fill text-red-700"}`}></i></span>
                                            )}
                                        </div>
                                    )
                                }
                                <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                                <div className="text-sm font-medium text-gray-900 dark:text-white">
                                    Not registered yet? <Link to='/register' className="text-blue-600 hover:underline dark:text-blue-500">Create account</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </main >
    )
}
