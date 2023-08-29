import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin"
import Button from "../Elements/Button"
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";

const Navbar = () => {
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode)
    const username = useLogin();
    const handleLogout = () => {
        localStorage.removeItem('token')
        window.location.href = '/login'
    }
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data)

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }, 0)
        setTotalCart(sum)
    }, [cart])

    return (
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {username}
                <Button className="bg-black p-2 px-10 mx-5 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
                    {isDarkMode ? "Light" : "Dark"}
                </Button>
                <Button className="bg-black ml-5" onClick={handleLogout}>Logout</Button>
                <div className="flex item-center bg-gray-800 p-2 rounded-md ml-5">
                    {totalCart}
                </div>
            </div>
    )
}

export default Navbar