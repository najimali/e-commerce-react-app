import React from "react"


//for image to be first converted to SVG
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home"></SEO>
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title='I write code'
      subtitle='LearnCodeOnline.in'
      heroClass='hero-background'></HeroSection>
  </Layout>
)
export const query = graphql`
{ 
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}
`
export default IndexPage
