import CardProduct from "../components/Fragments/CardProduct"

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


const ProductsPage = () => {
    return (
        <div className="flex justify-center">
            {products.map((product) => (
                <CardProduct>
                    <CardProduct.Header image={product.image} />
                    <CardProduct.Body title={product.name}>
                    {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price} />
                </CardProduct>
            ))}
        </div>
    )
}

export default ProductsPage