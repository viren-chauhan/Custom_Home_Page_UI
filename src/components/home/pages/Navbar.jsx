import { AddCircleOutlineOutlined, AutoAwesomeMotionOutlined, CreditCardOutlined, DashboardCustomizeOutlined, Inventory2Outlined, LocalMallOutlined, LocalShippingOutlined, PeopleOutlineOutlined, SettingsSuggestOutlined } from "@mui/icons-material";
import "./navbar.scss"

export default function Navbar(){
    return(
        <>
            <div className="sidebar">
                <div className="logo">
                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324" alt="" />
                </div>
                <div className="item">
                    <div><span><DashboardCustomizeOutlined  className="icon"/></span><span>Deashboard</span></div>
                    <div><span><PeopleOutlineOutlined className="icon"/></span><span>Customers</span></div>
                    <div><span><LocalShippingOutlined className="icon"/></span><span>Suppliers</span></div>
                    <div><span><AutoAwesomeMotionOutlined className="icon  "/></span><span>Products</span></div>
                    <div><span><Inventory2Outlined className="icon"/></span><span>Stock</span></div>
                    <div><span><LocalMallOutlined className="icon"/></span><span>Orders</span></div>
                    <div><span><LocalMallOutlined className="icon"/></span><span>Purchase Orders</span></div>
                    <div><span><AddCircleOutlineOutlined className="icon"/></span><span>HSN</span></div>
                    <div><span><CreditCardOutlined className="icon"/></span><span>Payments</span></div>
                    <div><span><SettingsSuggestOutlined className="icon"/></span><span>Settings</span></div>
                </div>
            </div>
        </>
    );
}