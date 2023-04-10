import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Newcategory = ({ inputs, title }) => {
    const [data, setData] = useState({});
    const navigate = useNavigate()

    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;

        setData({ ...data, [id]: value });
    }
    console.log(data);

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const res = await addDoc(collection(db, "category"), {
                ...data,

            });
            navigate(-1)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form onSubmit={handleAdd} style={{ justifyContent: "left", display: "unset" }}>
                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleInput} style={{ width: "50%" }} />
                                </div>
                            ))}
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newcategory;