import React, { Component } from 'react'
// import Heading from '../Reusable/Heading'
// import Img from 'gatsby-image'
export default class CourseCart extends Component {
    constructor(props){
        super()
        this.state={
            courses:this.props.courses.edges,
        }
    }
    render() {
        // console.log(this.state.courses);
        return (
            <div>
                <h1>Hey ,I am from Course Carts</h1>
            </div>
        )
    }
}
