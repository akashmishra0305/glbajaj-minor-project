import { Link } from "react-router-dom"

export default function NotFound(){
    return (
        <>
            This route is not present in our app ! Go to Your Dashboard Click Here <Link to={"/dashboard"} style={{ textDecoration : "none"}}>Dashboard</Link>
        </>
    )
}