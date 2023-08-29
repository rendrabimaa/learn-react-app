import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin"
import Button from "../Elements/Button"
import { useSelector } from "react-redux";

const Navbar = () => {
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
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10 mb-20">
                {username}
                <Button className="bg-black ml-5" onClick={handleLogout}>Logout</Button>
                <div className="flex item-center bg-gray-800 p-2 rounded-md ml-5">
                    {totalCart}
                </div>
            </div>
    )
}

export default Navbar