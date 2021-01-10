const path = require("path")

exports.createPages = async function ({ graphql, actions}) {

  const query = await graphql(`
  {
    allContentfulElectronics {
      nodes {
        slug
        title
        decss {
          raw
        }
      }
     }
    }
  `);

    console.log(JSON.stringify(query));

    query.data.allContentfulElectronics.nodes.forEach((obj)=> {
      actions.createPage({
        path: `/product/${obj.slug}`,
        component: path.resolve('./src/templates/product.tsx'),
        context: {
          itemDetails: obj
        }
      })
    })
    
    console.log("End of Gatsby Node File");
}