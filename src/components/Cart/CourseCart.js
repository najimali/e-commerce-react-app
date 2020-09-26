import React, { Component } from "react"
import Heading from "../Reusable/Heading"
import Img from "gatsby-image"
export default class CourseCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: this.props.courses.edges,
      mycourses: this.props.courses.edges,
    }
  }
  render() {
    // console.log(this.state.mycourses);
    return (
      // <h1>Hello</h1>
      <section className="py-5">
        <div className="container">
          <Heading title="Course" />
          <div className="row" style={{ margin: "1rem" }}>
            {this.state.mycourses.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-6 d-flex my-3 mx-auto"
                >
                  <Img fixed={node.image.fixed}></Img>
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">{node.title}</h6>
                      <h6 className="mb-0 text-success">$ {node.price}</h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                    <button
                      className="btn btn-warning snipcart-add-item"
                      data-item-id={node.id}
                      data-item-price={node.price}
                      data-item-description={node.description.description}
                      data-item-image={node.image.fixed.src}
                      data-item-name={node.title}
                      data-item-url="https://web.learncodeonline.in/"
                    >
                      Join Now
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
