import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ThreeCanvas from '../components/ThreeCanvas';


class BookPage extends React.Component {

  componentDidMount() {
    //
  }

  render() {
    const { frontmatter } = this.props.data.mdx;
    const { body } = this.props.data.mdx;

    return(
      <Layout>
        <SEO title="Home" />
        <Link to="/" className="back-button">← Back to 📚</Link>
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
