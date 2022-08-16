import React from "react";

import Header from './Header'
import Ticket from './Ticket'
import Footer from './Footer'

class Main extends React.Component {
    render() {
        return (
            <>
                <Header></Header>
                <Ticket></Ticket>
                <Footer></Footer>
            </>
        )
    }
}

export default Main;