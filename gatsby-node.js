const path = require("path");
const slugify = require("slugify");
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allContentfulGatsbyTutorial {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `);

  result.data.allContentfulGatsbyTutorial.nodes.forEach((node) => {
    node.content.tags.forEach((tag) => {
      const tagSlug = slugify(tag, { lower: true });
      createPage({
        path: `/tags/${tagSlug}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag: tag,
        },
      });
    });
  });
};
