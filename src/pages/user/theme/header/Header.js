import {memo} from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../../../../assets/user/logo.png";
import { GrNotification } from "react-icons/gr";

const Header = function() {
    return (
        <div className="header_top">
            <div className="container header">
                <div className="user-options">
                    <ul>
                        <li>
                            <Link>
                                <GrNotification />
                            </Link>
                        </li>
                    </ul>
                    <span>Thông báo</span>
                    <span>Hỗ trợ</span>
                    <span>Tiếng Việt</span>
                    <span>Đăng nhập</span>
                    <span>Đăng ký</span>
                </div>
                <div className="logo">
                    <img src={logo} alt="Pawfect Logo" />
                </div>
                <div className="search-bar">
                        <input type="text" placeholder="Tìm kiếm sản phẩm..." />
                        <button>Tìm</button>
                    </div>
    
            </div>
        </div>
    )
}

export default memo(Header);