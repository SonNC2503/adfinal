import "./datatable.scss";
import { useEffect, useState } from "react";
import { aboutUsColumns } from "../../datatablesource";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import EditAboutUs from "../../pages/edit/EditAboutUs";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};




const DataaboutUs = () => {
    const [data, setData] = useState([]);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);




    useEffect(() => {
        const unsub = onSnapshot(collection(db, "aboutUs"), (snapShot) => {
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
            await deleteDoc(doc(db, "aboutUs", id));
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

                        <div className="updateButton" onClick={handleOpen}>Update</div>

                        <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
                    </div>

                );
            },
        },
    ];




    return (
        <div className="datatable">
            <div className="datatableTitle">
                Information About My Store List
                <div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <EditAboutUs closeEvent={handleClose} />
                        </Box>
                    </Modal>
                </div>
                <Link to="/aboutUs/new" className="link">
                    Add New
                </Link>

            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={aboutUsColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>

    );
};

export default DataaboutUs;