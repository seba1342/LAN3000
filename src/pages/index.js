import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
// import ThreeCanvas from '../components/ThreeCanvas';


class IndexPage extends React.Component {
  componentDidMount() {
    //

  }

  render() {
    const { allMdx } = this.props.data;



    return(
      <Layout>
        <SEO title="Home" />

        <div className="index-page__list">
          {
            allMdx.edges.map((item, index) => {
              const { frontmatter } = item.node;
              const indexKey = index;

              return (
                <Link to={frontmatter.path} key={indexKey} className="index-page__link">
                  <div className="index-page__item">
                    <h1>{frontmatter.title}</h1>
                    <h3>{frontmatter.author}</h3>
                    <p></p>
                  </div>
                </Link>
              );

            })}
        </div>

      </Layout>
    );
  }
}

export default IndexPage;

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            path
            author
          }
        }
      }
    }
  }
`;
