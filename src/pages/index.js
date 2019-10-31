import React from 'react';
import { graphql, Link } from 'gatsby';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

class IndexPage extends React.Component {
  componentDidMount() {
    //

  }

  render() {
    const { allMdx, site } = this.props.data;



    return(
      <Layout>

        <SEO title=" " />

        <div className="index-page__intro">
          <p>
            This website is a carefully curated collection of self help books.
            Its purpose is to serve as repository where people can find something new and interesting
            to read.
          </p>
          <p>
            Thank you <a href="https://instagram.com/patbailouni" target="_blank" rel="noopener noreferrer">@patbailouni</a> for
            offering your knowledge on each of these books. Each summary has been
            pulled straight from his brain.
          </p>
          <p>
            It has been developed as a part of a network of user-run public websites for public good. Have a look at
            the others at <a href="http://openforpublic.com" target="_blank" rel="noopener noreferrer">http://openforpublic.com</a>
          </p>
        </div>

        <div className="index-page__list">
          {
            allMdx.edges.map((item, index) => {
              const { frontmatter } = item.node;
              const indexKey = index;

              return (
                <Link to={frontmatter.path} key={indexKey} className="index-page__link">
                  <div className="index-page__link--row">
                    <span className="index-page__link--book" role="img" aria-label="Book hover emoji">📖</span>
                    <div className="index-page__link--col">
                      <h2>{frontmatter.title}</h2>
                      <p>{frontmatter.author}</p>
                    </div>

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
    site {
      siteMetadata {
        title
      }
    }
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
