import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import config from "../../config"


const InitialState = {
    email : "",
    password : "",
    rememberme : false,
}

export default function Login() {
    const [login , setlogin] = useState(InitialState)
    const navigate = useNavigate()

    const handleChange = (event) => {
        setlogin((current) => ({...current , [event.target.name] : event.target.value}))
    }

    // const updateState = () => {

    // }

    useEffect(() => {
        // updateState()
        // console.log(config)
    } , [])
    
    const handleClick = (e) => {
        e.preventDefault()
        if(login.email === config.email && login.password === config.password){
            navigate("/dashboard")
        } else {
            console.log("User is not valid")
        }
    }

    return (
        <>
            <div className="login-body">
                <div id="login">
                    <div className="container">
                        <div id="login-row" className="row justify-content-center align-items-center">
                            <div id="login-column" className="col-md-6">
                                <div id="login-box" className="col-md-12">
                                    <form id="login-form" className="form" onSubmit={handleClick}>
                                        <h3 className="text-center text-info">ATS Login</h3>
                                        <div className="form-group">
                                            <label htmlFor="username" className="text-info">Username:</label><br />
                                            <input type="email" required value={login.email} name="email" onChange={handleChange} id="username" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-info">Password:</label><br />
                                            <input type="password" required name="password" value={login.password} onChange={handleChange} id="password" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="rememberme" value={login.rememberme} onChange={handleChange} type="checkbox" /></span></label><br />
                                            <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}