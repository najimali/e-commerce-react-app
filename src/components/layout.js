/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from './Reusable/Navbar'
import Footer from './Reusable/Footer'
import './bootstrap.min.css'
import "./layout.css"
// children is like props 
const Layout =({children})=>(
  <>
    <Navbar/>
    {children}
    <Footer supername="batman"></Footer>
    <Footer supername="Thor"></Footer>
  </>
)

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
