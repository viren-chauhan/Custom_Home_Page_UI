import { HelpOutlineOutlined, MoreVertOutlined, SearchOutlined, TuneOutlined } from "@mui/icons-material"
import "./customers.scss"

export default function Customers(){
    return(
        <div className="box">
            <div className="info">
                <div className="top">
                <div className="search">
                    <span><SearchOutlined className="icon"/></span>
                    <input type="text" name="" className="searchBox" id="" placeholder="Search"/>
                    <span><HelpOutlineOutlined className="icon questionIcon" /></span>
                </div>

                <div className="filter">
                    <span>Filter</span>
                    <TuneOutlined  className="filterIcon"/>
                </div>
                </div>    

                <div className="user">
                    <div className="infoHeading">
                        <span className="name field">Name</span>
                        <span className="address field">Address</span>
                        <span className="mobile field">Mobile Number</span>
                        <span className="email field">Email ID</span>
                        <span className="action field">Action</span>
                    </div>

                    <div className="userData">
                        <span className="userName">Viren Chauhan</span>
                        <span className="userAddress">Bhavnagar</span>
                        <span className="userMobile">94XXXXXX87</span>
                        <span className="userEmail">virenchauhan.secure@gmail.com</span>
                        <span className="userAction"><MoreVertOutlined /></span>
                    </div>
                    <div className="userData">
                        <span className="userName">Milan Makwana</span>
                        <span className="userAddress">Bhavnagar</span>
                        <span className="userMobile">63XXXXXX65</span>
                        <span className="userEmail">milan.protect@gmail.com</span>
                        <span className="userAction"><MoreVertOutlined /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}