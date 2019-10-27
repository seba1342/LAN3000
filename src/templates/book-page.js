import React from 'react';
// import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ThreeCanvas from '../components/ThreeCanvas';


class BookPage extends React.Component {

  componentDidMount() {
    //
  }

  render() {

    return(
      <Layout>
        <SEO title="Home" />

        <div className="index-page">
          <div className="thumbnail">
            <ThreeCanvas
              modelName="compact"
            />
            <div className="thumbnail-content">
              <div className="title">
                How to win friends and influence people
              </div>
              <div className="author">
                Dale Carnegie
              </div>
            </div>
          </div>

          <div className="intro">
            Websites act as virtual architecture. Websites are private homes and
            public parks. Websites provide community services. Existing public
            structures have become Websites, including the Town square, Market,
            Libraries, Schools, Stage, Clubs, Galleries, Public forums etc. Websites
            act like buildings and public pools. Websites are inhabited together and
            become social in their nature. Like all self organised spaces, Websites
            rely on independence, open collaboration and agency to give them
            resilience.
          </div>
        </div>

      </Layout>
    );
  }
}

export default BookPage;

// export const query = graphql`
//   query($pathSlug: String!) {
//     markdownRemark(fields: { slug: { eq: $pathSlug } }) {
//       html
//       frontmatter {
//         title
//         tags
//       }
//     }
//   }
// `;
