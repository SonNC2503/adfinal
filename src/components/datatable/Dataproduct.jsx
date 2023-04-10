import "./datatable.scss";
import { useEffect, useState } from "react";
import { productColumns } from "../../datatablesource";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

const Dataproduct = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "product"), (snapShot) => {
            let list = [];
            snapShot.docs.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() });
            });
            setData(list);

        }, (err) => {
            console.log(err);
        }
        );

        return () => {
            unsub();
        };
    }, []);

    console.log(data);

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "product", id));
            setData(data.filter((item) => item.id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/products/test" style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className="datatable">
            <div className="datatableTitle">
                Products List
                <Link to="/products/new" className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={productColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default Dataproduct;