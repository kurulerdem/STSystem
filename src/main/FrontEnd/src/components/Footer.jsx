import React from "react";
import {Component} from "react";
const d = new Date().getFullYear();
class Footer extends Component{
    render() {
        return <footer>
            <p>Copyright © {d} Erdem Kurul</p>
        </footer>

    }

}


export default Footer;