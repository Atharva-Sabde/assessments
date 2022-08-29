import React from "react";
import './Styles/Footer.css'

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <hr></hr>

                <div className="rights">
                    <p> Copyright  </p>
                    <p> All rights reserved </p>
                </div>

                <p> <b>made with ❤️ by <a href="https://github.com/Atharva-Sabde">Atharva Sabde </a> </b> </p>
            </div>
        )
    }

}