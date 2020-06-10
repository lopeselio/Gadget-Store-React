import React, { Component } from 'react'
import styled from 'styled-components'
import { FaDolly, FaRedo, FaDollarSign } from 'react-icons/fa'
export default class Services extends Component {
    state={
        services:[
            {
                id: 1,
                icon:<FaDolly/>,
                title:'Free Shipping',
                text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, Quos, accusamus."
            },
            {
                id: 2,
                icon:<FaRedo/>,
                title:'30 Days Return Policy',
                text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, Quos, accusamus."
            },
            {
                id: 3,
                icon:<FaDollarSign/>,
                title:'Secured Payment',
                text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, Quos, accusamus."
            }
        ]
    }
    render() {
        return (
            <ServicesWrapper className='py-5'>
                <div className='container'>
                    <div className='row'>
                        {this.state.services.map(item => {
                            return (
                                <div className='col-10 mx-auto col-sm-6 col-md-4 text-center my-3' key={item.id}>
                                    <div className='service-icon'>
                                        {item.icon}
                                    </div>
                                    <div className='mt-3 text-capitalize'>{item.title}</div>
                                    <div className='mt-3'>{item.text}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </ServicesWrapper> 
        )
    }
}

const ServicesWrapper = styled.section`
background: rgba(95,183,235,0.5);
.service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor)
}
`