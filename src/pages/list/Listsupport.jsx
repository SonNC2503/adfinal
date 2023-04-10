import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datasupport from "../../components/datatable/Datasupport"

const Listsupport = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Datasupport />
            </div>
        </div>
    )
}

export default Listsupport