import React  from 'react'
import Item from '../Agents/item'
import MainItem from '../Agents/mainItem'

import agents from '../../data/get-agent-featured'

const Agents = () => {
    const p = agents.data[0]
    return (
        <section className="feature_agents">
            <div className="container">
                <h3 className="block_title">FEATURED <span>agents</span></h3>
                <div className="group_agents">
                    <MainItem data={p} />
                    <div className="right">
                        {agents.data.slice(1).map((p, id) => {
                            return <Item data={p} key={id} id={id} />
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Agents
