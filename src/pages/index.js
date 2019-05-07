import React from "react"
import Link from "gatsby-link"
import Counter from "./counter"
import Wrapper from "./pagewrapper"

export default({data}) => (<Wrapper>
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
    <Counter color="blue"/>
    <br/>
    <div style={{
        padding: '20px',
        width: '50%',
        minWidth: '500px',
        color: "red"
      }}>
      <table>
        <tbody>
          <tr>
            <th>path</th>
            <th>size</th>
            <th>extension</th>
            <th>birth time</th>
            <th>index</th>
          </tr>
          {
            data.allFile.edges.map(({
              node
            }, i) => <tr>
              <td>
                {node.relativePath}
              </td>
              <td>
                {node.prettySize}
              </td>
              <td>
                {node.extension}
              </td>
              <td>
                {node.birthTime}
              </td>
              <td>
                {i}
              </td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  </div>
</Wrapper>)

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
