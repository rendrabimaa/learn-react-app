import InputForm from "../Elements/Input"
import Button from "../Elements/Button"
import { redirect } from "react-router-dom"

const FormLogin = () => {

    const handleLogin= () => {
      event.preventDefault()
      localStorage.setItem("email", event.target.email.value)
      localStorage.setItem("password", event.target.password.value)

      window.location.href = "/products"
    }

    return (
        <form action="" onSubmit={handleLogin}>
          <InputForm name="email" label="Email" type="email" placeholder="example@mail.com" />
          <InputForm name="password" label="Password" type="password" placeholder="********"/>
          <Button classname="bg-blue-600" type="submit">Login</Button>
        </form>
    )
}

export default FormLogin