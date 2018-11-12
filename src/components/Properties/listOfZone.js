import React, { Component } from 'react'

import bad from "../../img/bad.png";
import shower from "../../img/shower.png";
import car from "../../img/car.png";

export default class ListOfZone extends Component {
    render() {
        const p = this.props.data
        return(
            <ul className="list_components">
                <li>
                    <img src={bad} />
                    <span><em className="bad_length">{p.bedroom}</em> Be</span>
                </li>
                <li>
                    <img src={shower} />
                    <span><em className="bad_length">{p.bathroom}</em> Ba</span>
                </li>
                <li>
                    <img src={car} />
                    <span><em className="bad_length">{p.garage_size}</em> Pa</span>
                </li>
            </ul>
        )
    }
}



