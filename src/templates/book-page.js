import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ThreeCanvas from '../components/ThreeCanvas';


class BookPage extends React.Component {

  componentDidMount() {
    //
  }

  render() {
    const { frontmatter, body } = this.props.data.mdx;
    const { site } = this.props.data;

    return(
      <Layout>
        <SEO title={frontmatter.title} />
        <Header
          siteTitle={site.siteMetadata.title}
        />

        <div className="book-page">
          <ThreeCanvas
            bookName={frontmatter.path}
          />
          <div className="book-page__book">
            <h1>{frontmatter.title}</h1>
            <h3>{frontmatter.author}</h3>
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>

      </Layout>
    );
  }
}

export default BookPage;

export const query = graphql`
  query($pathSlug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      body
      frontmatter {
        title
        author
        path
      }
    }
  }
`;
