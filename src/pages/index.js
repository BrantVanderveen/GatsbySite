import React from "react"
import Link from "gatsby-link"
import Layout from "../components/layout.js"
import DotMap from '../components/dotmap.js'
import SkinThumb from '../components/skintypeThumb.js'

export default({data}) => (
<Layout >
  <div>
    <h1>
      {data.site.siteMetadata.title}
    </h1>
    <p>
      Test paragraph 1!
    </p>
    <p>
      Test paragraph 2
    </p>
    <Link to="newPage">
      Link to new page
    </Link>
    <br/>
    <DotMap/>
    <br/>
    <SkinThumb/>
  </div>
</Layout>
)

export const query = graphql `
  query FirstQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    allFile {
  	  edges {
  	    node {
          relativePath
  				prettySize
          extension
          birthTime(fromNow: true)
  	    }
  	  }
  	}
  }

`
