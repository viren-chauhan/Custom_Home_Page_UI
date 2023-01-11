import { AddOutlined, ArrowDropDownOutlined, NotificationsNoneOutlined, SearchOutlined } from "@mui/icons-material"
import "./top.scss"

export default function Top(){
    return(
        <div className="container">
            <div className="top">
                <div className="search">
                    <SearchOutlined className="icon"/>
                    <input type="text" name="" className="searchBox" id="" placeholder="Search"/>
                </div>
                <div className="profile">
                    <span className="notificationIcon"><NotificationsNoneOutlined/></span>
                    <div className="signIn">
                        <img className="profilePicture" src="" alt="" />
                        <div className="name">
                            <span>Viren</span>
                            <span><ArrowDropDownOutlined/></span>
                            <div className="option">
                                <div>

                                    <span  pan className="options">Setting</span>
                                </div>
                                <div>

                                    <span className="options">Logout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="heading">
                <span>Customers</span>
                <button><AddOutlined className="addUserIcon"/> Add New Customers</button>
            </div>
        </div>
    )
}