import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datanew from "../../components/datatable/Datanew"

const Listproduct = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Datanew />
            </div>
        </div>
    )
}

export default Listproduct