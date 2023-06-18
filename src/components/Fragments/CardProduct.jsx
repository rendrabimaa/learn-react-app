import Button from "../Elements/Button"

const CardProduct = (props) => {
    const {children} = props
    return (
        <div className="w-full max-w-xs bg-gray-800 border border-gray-300 rounded-lg shadow ml-2 flex flex-col justify-between">
            {children}
        </div>
    )
}

const Body = (props) => {
    const {children, title} = props
    return (
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">{title.substring(0,20)} ...</h5>
                <p className="text-m text-white">
                    {children.substring(0,100)} ...
                </p>
            </a>
        </div>
    )
}

const Footer = (props) => {
    const {price, handleAddToCart, id} = props
    return(
        <div className="flex items-center justify-between px-5 pb-5 py-5">
            <span className="text-xl font-bold text-white">{price.toLocaleString('id-ID', {style: 'currency', currency:'USD'})}</span>
            <Button className="bg-blue-600" onClick={() => handleAddToCart(id)}>Add To Cart</Button>
        </div>
    )
}

const Header = (props) => {
    const {image} = props 
    return (
        <a href="#">
            <img src={image} alt="product" className="p-4 rounded-t-lg" />
        </a>
    )
}


CardProduct.Body = Body
CardProduct.Footer = Footer
CardProduct.Header = Header



export default CardProduct