import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataaboutUs from "../../components/datatable/DataaboutUs"

const ListaboutUs = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <DataaboutUs />
            </div>
        </div>
    )
}

export default ListaboutUs