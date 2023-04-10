import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datauser from "../../components/datatable/Datauser"

const Listuser = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Datauser />
            </div>
        </div>
    )
}

export default Listuser