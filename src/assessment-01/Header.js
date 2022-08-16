import React from "react";
import './Header.css'

export default class Header extends React.Component {
    render() {
        return (
            <div className="header" >
                <h3 align='center'>---------- Ticket Raising App---------</h3>
                <p align='center'>---------  Quickly analyse and prioritize your job  ---------</p>
            </div>
        )
    }

}