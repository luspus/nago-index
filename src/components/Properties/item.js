import React, { Component } from 'react'
import ListOfZone from '../Properties/listOfZone'

import user from "../../img/user.png"
import i2 from "../../img/i2.png"
import home from "../../img/home.png"

export default class Item extends Component {
    render() {
        const p = this.props.data
        return(
            <div className="col_porop">
                <div className="head_col">
                    <div className="author">
                        <img src={user} className="face" />
                        <div>
                            <span className="name">
                                {p.agent.first_name}  {p.agent.last_name}
                            </span>
                            <span className="subtitle">
                                {p.agent.agency} Real Estate
                            </span>
                        </div>
                    </div>
                    <img src={i2} className="company_logo" />
                </div>
                <div className="body_col">
                    <img src={home} alt="home" className="present_product" />
                    <div className="info_panel">
                        <div className="info">
                            <span className="title">The Zenith, 821 Pacific Highway</span>
                            <span className="address">{p.property.address}</span>
                        </div>
                        <ListOfZone data={p.property}/>
                    </div>
                </div>
                <div className="overlay">
                    <div className="info">
                        <span className="title">The Zenith, 821 Pacific Highway</span>
                        <span className="address">{p.property.address}</span>
                    </div>
                    <ListOfZone data={p.property}/>
                    <a href="javascript:void(0);" className="learn_more">Learn more</a>
                </div>
            </div>
        )
    }
}
