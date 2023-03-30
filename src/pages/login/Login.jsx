import "./login.scss"

const Login = () => {
    return (
        <div className="Login">
            <form action="">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}

export default Login