import CardProduct from "../components/Fragments/CardProduct"
import Button from "../components/Elements/Button"
import { useEffect, useRef, useState } from "react"
import getProducts from "../services/product.service"
import { useLogin } from "../hooks/useLogin"



const ProductsPage = () => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [products, setProducts] = useState([])
    const username = useLogin()

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || [])
    }, [])

    useEffect(() => {
        getProducts((data) => {
            setProducts(data)
            console.log(data)
        });
    },[])
    
    useEffect(() => {
        if(products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id)
                return acc + product.price * item.qty
            },0 )
            setTotalPrice(sum)
            localStorage.setItem("cart", JSON.stringify(cart))    
        }
    }, [cart, products])

    
    
    const handleLogout = () => {
        localStorage.removeItem('token')
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

    const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || [])
    
    const totalPriceRef = useRef(null)
    console.log(totalPriceRef)

    useEffect(() => {
        if(cart.length > 0) {
            totalPriceRef.current.style.display = "table-row"
        }else {
            totalPriceRef.current.style.display = "none"
        }
    }, [cart])

    return (
        <>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10 mb-20">
                {username}
                <Button className="bg-black ml-5" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
                <div className="w-4/6 flex flex-wrap">
                    {products.length > 0 && products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} />
                            <CardProduct.Body title={product.title}>
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
                        {products.length > 0 && cart.map((item) => {
                            const product = products.find((product) => product.id === item.id)
                            return (
                                <tr key={item.id}>
                                    <td>{product.title}</td>
                                    <td>$ {" "} {product.price.toLocaleString("id-ID", {
                                        styles: "currency",
                                        currency: "USD"
                                    })}</td>
                                    <td>{item.qty}</td>
                                    <td>$ {" "} {(item.qty * product.price).toLocaleString("id-ID", {
                                        styles: "currency",
                                        currency: "USD"
                                    })}</td>
                                </tr>
                            )
                        })}
                        <tr ref={totalPriceRef}>
                            <td colSpan={3}>
                                <b>Price</b>
                            </td>
                            <td><b>
                            $ {" "} {totalPrice.toLocaleString("id-ID", {
                                        styles: "currency",
                                        currency: "USD",
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