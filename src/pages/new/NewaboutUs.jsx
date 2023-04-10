import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

const NewaboutUs = ({ inputs, title }) => {
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
            const res = await addDoc(collection(db, "aboutUs"), {
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
                        <form onSubmit={handleAdd} style={{ display: "unset" }}>
                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label style={{ margin: "5px" }}>{input.label}</label>
                                    <textarea id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleInput} style={{ width: "300px" }} />
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

export default NewaboutUs;