import { Link } from "react-router-dom"

const AuthLayouts = (props) => {

  const {children, title, type} = props

  return (
    <div className='flex justify-center min-h-screen items-center bg-white'>
      <div className="w-full max-w-xs">
          <h1 className="text-blue-600 text-3xl font-bold mb-2">
              {title}
          </h1>
          <p className="font-medium text-slate-500">Welcome, Please enter your Details</p>
          {children}
          <p className="text-sm mt-5 text-center">
            {type === "login" ? "Don't have an account?" : "Already have an account?"} {" "}

            {type === "login" && (
              <Link to="/register" className="font-bold text-blue-600">
                Sign Up
              </Link>
            )}
            {type === "register" && (
              <Link to="/login" className="font-bold text-blue-600">
                Login
              </Link>
            )}
          </p>
      </div>
    </div>
  )
}

export default AuthLayouts
