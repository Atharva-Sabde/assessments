import React from "react";
import './Footer.css'

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <hr></hr>
                <p> Ticket Making app </p>
                <p> <b>made with ❤️ by <a href="https://github.com/Atharva-Sabde">Atharva Sabde </a> </b> </p>
            </div>
        )
    }

}