import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datacategory from "../../components/datatable/Datacategory"

const Listcategory = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Datacategory />
            </div>
        </div>
    )
}

export default Listcategory