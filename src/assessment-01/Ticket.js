import React from "react"
import "./Ticket.css"
import db from './data/db'

import Resolved from './Resolved'
import Unresolved from './Unresolved'

class Ticket extends React.Component {
    constructor(props) {
        super(props)      // super=> sets the data to parent class
        this.state = {
            tickets: db    // assigning the data to state.
        }
    }
    getPriorityClass = (priority) => {   // sets the CSS className for color change
        // const result= priority=="1"? "p1" : 
        return priority === 1 ? "p1"
            : priority === 2 ? "p2"
                : "p3";
    }
    changeResolveStatus = (itemId) => {   // changing the status of ticket
        const result = this.state.tickets.find((item) => item.ticketID === itemId)

    }

    render() {
        return (
         <>
            <Resolved></Resolved>
            <Unresolved></Unresolved>
         </>
        )
    }

}
export default Ticket


