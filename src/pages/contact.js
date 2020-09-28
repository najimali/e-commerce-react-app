import React from "react"


//for image to be first converted to SVG
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import Infoblock from '../components/Reusable/Infoblock'
import Contact from '../components/Contact/Contact'

//data is return from graphql queries
const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Home"></SEO>

    <HeroSection
      img={data.img.childImageSharp.fluid}
      title='Contact Us'
      subtitle=''
      heroClass='about-background'>
    </HeroSection>
    <Infoblock heading='How can we Help'/>
    <Contact></Contact>

  </Layout>
)

// Converting the heromain.png image to SVG & returning in form of data 
//note img is reference is store in img
export const query = graphql`
{ 
    img: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}
`
export default ContactPage
