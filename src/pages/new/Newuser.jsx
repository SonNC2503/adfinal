import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
//import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
//import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";



const New = ({ inputs, title }) => {
    //const [file, setFile] = useState("");
    const [data, setData] = useState({});
    //const [per, setPerc] = useState(null);
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
            /*const res = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );*/
            const res = await addDoc(collection(db, "users"), {
                ...data,

            });
            navigate(-1)
        } catch (err) {
            console.log(err);
        }
    };

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
                        <form onSubmit={handleAdd}>


                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input
                                        id={input.id}
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        onChange={handleInput}
                                    />
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

export default New;