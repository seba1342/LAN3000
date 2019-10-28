const path = require('path');

exports.createPages = (({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const bookPageTemplate = path.resolve('src/templates/book-page.js');

    resolve(
      graphql(
        ` query {
          allMdx {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }`).then(result => {
        result.data.allMdx.edges.forEach(({ node }) => {
          const path = node.frontmatter.path;
          createPage({
            path: path,
            component: bookPageTemplate,
            context: {
              pathSlug: path,
            }
          });

          resolve();
        });
      })
    );
  });
});
