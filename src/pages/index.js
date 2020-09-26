import React from "react"

//for image to be first converted to SVG
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import InfoBlock from "../components/Reusable/InfoBlock"
import DualInfoBlock from "../components/Reusable/DualInfoBlock"
import CourseCart from "../components/Cart/CourseCart"

//data is return from graphql queries
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home"></SEO>

    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="I write code"
      subtitle="LearnCodeOnline.in"
      heroClass="hero-background"
    ></HeroSection>
    <CourseCart courses={data.courses}></CourseCart>
    <InfoBlock heading="About us" />
    <DualInfoBlock
      heading="Our Team"
      image="https://images.pexels.com/photos/3561340/pexels-photo-3561340.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
  </Layout>
)
// query one is for images
// Converting the heromain.png image to SVG & returning in form of data
//note img is reference is store in img

//Query two from contentful resources the model we created on app.contentful.com
//edge will be data in array form
export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    courses:allContentfulCourses{
      edges {
        node {
          id
          title
          price
          description {
            description
          }
          image {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          
        }
      }
    }
  }
`

export default IndexPage
