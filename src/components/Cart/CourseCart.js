import React, { Component } from "react"
import Heading from "../Reusable/Heading"
import Img from "gatsby-image"

const getCategory = items => {
  // console.log(items);
  let holdItems = items.map(item => item.node.category)
  // console.log(holdItems) ->  ["Web Dev", "Web dev", "Control Version", "Web Dev", "Android Dev", "Web Dev"]
  let holdCategories = new Set(holdItems)
  // console.log(holdCategories)
  let categories = Array.from(holdCategories)
  categories = ["All",...categories]
  // console.log(categories)
  return categories
}
export default class CourseCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: this.props.courses.edges,
      myCourses: this.props.courses.edges,
      myCategories: getCategory(this.props.courses.edges),
    }
  }
  categoryClicked =category=>{
    
    let keepItSafe = [...this.state.courses]
    if(category==="All"){
      this.setState(()=>{
        return {myCourses:keepItSafe}
      })
    }
    else {
      let showCourses =keepItSafe.filter(({node})=>node.category===category)
      this.setState(()=>{
        return {myCourses:showCourses}
      })
    }
  }
  render() {
    // console.log(this.state.myCourses);
    return (
      // <h1>Hello</h1>
      <section className="py-5">
        <div className="container">
          <Heading title="Course" />
          <div className="row my-3">
            <div className="coll-10 mx-auto text-center">
              {this.state.myCategories.map((category, index) => {
                return (
                  <button
                    className="btn btn-info m-3 px-3"
                    type="button"
                    key={index}
                    onClick={() => {
                      this.categoryClicked(category)
                    }}
                  >
                    {category}
                    
                  </button>
                )
              })}
            </div>
          </div>
          <div className="row" style={{ margin: "1rem" }}>
            {this.state.myCourses.map(({ node }) => {
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
                      data-item-url="https://ecommercereactapp.netlify.app/"
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
