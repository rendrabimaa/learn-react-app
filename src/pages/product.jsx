import CardProduct from "../components/Fragments/CardProduct"

const ProductsPage = () => {
    return (
        <div className="flex justify-center">
            <CardProduct>
                <CardProduct.Header image="/images/shoes-1.jpg" />
                <CardProduct.Body title="Sepatu Baru">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae voluptate corrupti deleniti, facere aspernatur vitae aut perspiciatis voluptas provident. Eligendi voluptatibus saepe temporibus adipisci eveniet accusantium inventore in aperiam voluptatum!
                </CardProduct.Body>
                <CardProduct.Footer price="Rp. 100.0000" />
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image="/images/shoes-1.jpg" />
                <CardProduct.Body title="Sepatu Baru">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae voluptate corrupti deleniti, facere aspernatur vitae aut perspiciatis voluptas provident. Eligendi voluptatibus saepe temporibus adipisci eveniet accusantium inventore in aperiam voluptatum!
                </CardProduct.Body>
                <CardProduct.Footer price="Rp. 100.0000" />
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image="/images/shoes-1.jpg" />
                <CardProduct.Body title="Sepatu Baru">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae voluptate corrupti deleniti, facere aspernatur vitae aut perspiciatis voluptas provident. Eligendi voluptatibus saepe temporibus adipisci eveniet accusantium inventore in aperiam voluptatum!
                </CardProduct.Body>
                <CardProduct.Footer price="Rp. 100.0000" />
            </CardProduct>
        </div>
    )
}

export default ProductsPage