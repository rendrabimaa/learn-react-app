import InputForm from "../Elements/Input"
import Button from "../Elements/Button"
import { useEffect, useRef } from "react"

const FormLogin = () => {

    const handleLogin= () => {
      event.preventDefault()
      localStorage.setItem("email", event.target.email.value)
      localStorage.setItem("password", event.target.password.value)

      window.location.href = "/products"
    }

    const emailRef = useRef(null)

    useEffect(() => {
      emailRef.current.focus()
    },[])

    return (
        <form action="" onSubmit={handleLogin}>
          <InputForm name="email" label="Email" type="email" placeholder="example@mail.com" ref={emailRef} />
          <InputForm name="password" label="Password" type="password" placeholder="********"/>
          <Button classname="bg-blue-600" type="submit">Login</Button>
        </form>
    )
}

export default FormLogin