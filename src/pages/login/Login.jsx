import { useContext, useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navitage = useNavigate()

    const { dispatch } = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();

        console.log(e);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                dispatch({ type: "LOGIN", payload: user })
                navitage("/dashboard")
            })
            .catch((error) => {
                setError(true);
            });
    };

    return (
        <div className="container1">
            <div className="screen">
                <div className="screen__content">
                    <form className="login" onSubmit={handleLogin}>
                        <h1>Sign In</h1>
                        <div className="login__field">
                            <input type="email" className="login__input" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="login__field">
                            <input type="password" className="login__input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="button login__submit">
                            <span className="button__text">Sign In Now!</span>
                        </button>
                        <br />
                        {error && <span className="err">Wrong email or password!</span>}
                    </form>

                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    );
};

export default Login;