import InputForm from "../Elements/Input"
import Button from "../Elements/Button"

const FormLogin = () => {
    return (
        <form action="">
          <InputForm name="email" label="Email" type="email" placeholder="example@mail.com" />
          <InputForm name="password" label="Password" type="password" placeholder="********"/>
          <Button classname="bg-blue-600">Login</Button>
        </form>
    )
}

export default FormLogin