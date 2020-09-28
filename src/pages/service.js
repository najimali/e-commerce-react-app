import React from "react"


//for image to be first converted to SVG
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import Infoblock from '../components/Reusable/Infoblock'
import DualInfoBlock from '../components/Reusable/DualInfoBlock'


//data is return from graphql queries
const ServicePage = ({ data }) => (
  <Layout>
    <SEO title="Home"></SEO>

    <HeroSection
      img={data.img.childImageSharp.fluid}
      title='Our Services'
      subtitle=''
      heroClass='about-background'>
    </HeroSection>
    <DualInfoBlock heading='Our Mission' image='https://images.pexels.com/photos/3577561/pexels-photo-3577561.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
    <Infoblock heading='Our Vision'/>

  </Layout>
)

// Converting the heromain.png image to SVG & returning in form of data 
//note img is reference is store in img
export const query = graphql`
{ 
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}
`
export default ServicePage
