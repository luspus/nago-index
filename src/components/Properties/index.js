import React, { Component } from 'react'
import Item from '../Properties/item'
import prop from '../../data/get_property_featured'

export default class Properties extends Component {
    render() {
        const p = prop.data[0]
        return (
            <div>
                <section className="featured_properties">
                    <div className="container">
                        <h3 className="block_title">Featured <span>Properties</span></h3>
                        <div className="group_prop">
                            <div className="left">
                                <Item data={p} />
                            </div>
                            <div className="right">
                                {prop.data.slice(1).map((p, id) => {
                                    return <Item data={p} key={id} />
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
