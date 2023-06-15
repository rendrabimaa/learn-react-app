import CardProduct from "../components/Fragments/CardProduct"
import Button from "../components/Elements/Button"

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: "Rp.1.000.000",
        image: "/images/shoes-1.jpg",
        description: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae voluptate corrupti deleniti, facere aspernatur vitae aut perspiciatis voluptas provident. Eligendi voluptatibus saepe temporibus adipisci eveniet accusantium inventore in aperiam voluptatum!
        `
    },
    {
        id: 2,
        name: "Sepatu Lama",
        price: "Rp.500.000",
        image: "/images/shoes-1.jpg",
        description: `
        Lorem ipsum ccusantium inventore in aperiam voluptatum!
        `
    },
    {
        id: 3,
        name: "Sepatu Ada",
        price: "Rp.5.000.000",
        image: "/images/shoes-1.jpg",
        description: `
        Ini adalah sepatu baru dari Sepatu Ada Dong
        `
    }
]

const email = localStorage.getItem("email")


const handleLogout = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    window.location.href = '/login'
}

const ProductsPage = () => {
    return (
        <>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {email}
                <Button className="bg-black ml-5" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center">
                {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image} />
                        <CardProduct.Body title={product.name}>
                        {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>
                ))}
            </div>
        </>
    )
}

export default ProductsPage