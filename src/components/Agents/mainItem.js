import React, { Component } from 'react'

import i1 from "../../img/i1.png";
import a1 from "../../img/a1.png";

export default class MainItem extends Component {
    render(){
        const p = this.props.data
        return(
            <div className="left">
                <div className="agent_col">
                    <div className="head_col">
                        <img src={i1} alt="" className="logo_company" />
                    </div>
                    <img src={a1} className="face_agent" />
                    <div className="description">
                        <div className="contact_info">
                            <div>
                                <span className="name">
                                   { p.userFirstName } { p.userLastName }
                                </span>
                                <span className="name_company">
                                    { p. agency }
                                </span>
                            </div>
                            <div>
                                <span className="line location">
                                   { p.address.display_name }
                                </span>
                                <span className="line phone">
                                    { p.userPhone }
                                </span>
                            </div>
                        </div>
                        <span className="text">
                            Mapped: Suburbs with a high rate of singletons: So which suburbs around the country have the highest amount of single people?
                        </span>
                        <div className="line_button">
                            <a href="javascript:void(0);" className="btn green">
                                <span>
                                    follow me
                                </span>
                            </a>
                            <a href="javascript:void(0);" className="btn blue">
                                <span>
                                    view profile
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}