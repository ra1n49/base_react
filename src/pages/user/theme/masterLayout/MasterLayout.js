import {memo} from "react";
import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";

const MasterLayout = function({ children, ...props}) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default memo(MasterLayout);