import CardProduct from "../components/Fragments/CardProduct"
import Button from "../components/Elements/Button"
import { useEffect, useState } from "react"

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: 10000000,
        image: "/images/shoes-1.jpg",
        description: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae voluptate corrupti deleniti, facere aspernatur vitae aut perspiciatis voluptas provident. Eligendi voluptatibus saepe temporibus adipisci eveniet accusantium inventore in aperiam voluptatum!
        `
    },
    {
        id: 2,
        name: "Sepatu Lama",
        price: 500000,
        image: "/images/shoes-1.jpg",
        description: `
        Lorem ipsum ccusantium inventore in aperiam voluptatum!
        `
    },
    {
        id: 3,
        name: "Sepatu Ada",
        price: 2000000,
        image: "/images/shoes-1.jpg",
        description: `
        Ini adalah sepatu baru dari Sepatu Ada Dong
        `
    }
]

const email = localStorage.getItem("email")



const ProductsPage = () => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || [])
    }, [])
    
    useEffect(() => {
        if(cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id)
                return acc + product.price * item.qty
            },0 )
            setTotalPrice(sum)
            localStorage.setItem("cart", JSON.stringify(cart))    
        }
    }, [cart])
    
    const handleLogout = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        window.location.href = '/login'
    }

    const handleAddToCart = (id) => {

        if(cart.find(item=>item.id === id)) {
            setCart(
                cart.map(item => item.id === id ? { ...item, qty: item.qty + 1} : item)
            )
        }else {
            setCart([
                ...cart,
                {
                    id,
                    qty: 1
                }
            ])
        }

    }

    return (
        <>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10 mb-20">
                {email}
                <Button className="bg-black ml-5" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center bg-red-500 py-5">
                <div className="w-4/6 flex flex-wrap">
                    {products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} />
                            <CardProduct.Body title={product.name}>
                            {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer price={product.price} handleAddToCart={handleAddToCart} id={product.id} />
                        </CardProduct>
                    ))}
                </div>
                <div className="w-2/6">
                <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">
                    Cart
                </h1>
                <table className="text-left text-xs table-auto border-separate border-spacing-x-5">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => {
                            const product = products.find((product) => product.id === item.id)
                            return (
                                <tr key={item.id}>
                                    <td>{product.name}</td>
                                    <td>RP {" "} {product.price.toLocaleString("id-ID", {
                                        styles: "currency",
                                        currency: "IDR"
                                    })}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.qty * product.price}</td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td colSpan={3}>
                                <b>Price</b>
                            </td>
                            <td><b>
                            RP {" "} {totalPrice.toLocaleString("id-ID", {
                                        styles: "currency",
                                        currency: "IDR",
                                    })}
                                </b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            
        </>
    )
}

export default ProductsPage