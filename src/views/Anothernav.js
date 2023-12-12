import {useContext, useState} from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'
import useAxios from "../utils/useAxios";
import jwtDecode from "jwt-decode";

function Anothernav() {
    const [res, setRes] = useState("")
    const token = localStorage.getItem("authTokens")
    const api = useAxios();
    const {user, logoutUser} = useContext(AuthContext)
    if (token){
        const decode = jwtDecode(token)
        var user_id = decode.user_id
        var username = decode.username
        var full_name = decode.full_name
        var image = decode.image

    }

    return (
        <div>
            <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">Bottom navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav">
                            {token === null && <li className="nav-item">
                                <Link class="nav-link" to="/login">Login</Link>
                            </li>
                            }

                            {token !== null &&
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/dashboard">Dashboard</a>
                                    </li>
                                    <li className="nav-item">
                                        <Link class="nav-link" to="/register">Register</Link>
                                    </li>
                                </>
                            }
                            <li className="nav-item dropup">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">{username}!</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" onClick={logoutUser} style={{cursor:"pointer"}}>Logout</a></li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Anothernav