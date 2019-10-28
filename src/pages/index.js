import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { italic } from 'ansi-colors';
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

        <div className="index-page__intro">
          <p>
            This website is a carefully curated collection of self help books.
            Its purpose is to serve as repository where people can find something new and interesting
            to read.
          </p>
          <p>
            Thank you to <a href="https://instagram.com/patbailouni">@patbailouni</a> for
            offering your knowledge on each of these books. Each summary has been
            pulled straight from his brain.
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
                    <span className="index-page__link--book">📖</span>
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
