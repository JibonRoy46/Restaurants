import React, { Component } from "react";
import HOMEDISH from "../../data/homedish";
import HomeItem from "./homeItem";
import HomeDish from "./HomeDish";
import HomeImage from "./HomeImage";
import Contact from "./Contact";
import Menu from "./Menu";
import About from "./About";


class Home extends Component {
    state = {
        dishes: HOMEDISH
    }

    render() {
        const home = this.state.dishes.map(item => {
            return (
                <HomeItem
                    dish={item} />
            )
        })
        const home1 = this.state.dishes.map(item => {
            return (
                <HomeDish dish={item} />
            )
        })
        const home2 = this.state.dishes.map(item => {
            return (
                <HomeImage dish={item} />
            )
        })
        document.title = "Bohubrihi Restaurant";
        return (
            <div className="home">
                {home}
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            {home1}
                        </div>
                        <div className="col-6">
                            {home2}
                        </div>
                    </div>
                </div>
                <div>
                    <Menu />
                </div>
                <div>
                    <About />
                </div>
                <div>
                    <Contact />
                </div>
            </div>

        )
    }
}

export default Home;