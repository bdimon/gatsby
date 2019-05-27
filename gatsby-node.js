const path = require('path') 
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  

   if (node.internal.type === 'MarkdownRemark') {
     
       const slug = path.basename(node.fileAbsolutePath, '.md')
      // console.log('@@@@@@@@@@@@@@@@@@', slug);
      createNodeField({
          node: node,
          name: 'slug',
          value: slug
      })
   }
}
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`./src/templates/blog.js`);
  
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
    `);
    
    res.data.allMarkdownRemark.edges.forEach((blogpost) => {
      createPage({
        path: `/blog/${blogpost.node.fields.slug}`,
        component: blogTemplate,
        context: {
          slug: blogpost.node.fields.slug
        },
      })
    })
  }
