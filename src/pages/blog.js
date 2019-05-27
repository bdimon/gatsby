import React from "react";
import Layout from '../components/layout';
import {Link, graphql, useStaticQuery} from 'gatsby';
import blogStyles from './blog.module.scss'
const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query{
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          fields{
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
  `)
  
  return(
    <Layout>
      <h1>Blog Page</h1>
      <ol className={blogStyles.posts}>
        
        {data.allMarkdownRemark.edges.map((post) => {
          
          return (
            
            <li key={post.node.id} className={blogStyles.post}>
              <Link to={`/blog/${post.node.fields.slug}`}>
              <h2>{post.node.frontmatter.title}</h2>
              <p>{post.node.frontmatter.date}</p>
              {/* <p>{post.node.excerpt}</p> */}
              </Link>
            </li>
            
          )
        })
        
        }
        
          
          
        
      </ol>
      {/* <p>Some text in the paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus distinctio officia placeat optio qui enim deserunt nam, blanditiis quaerat nihil alias debitis vitae quasi, quibusdam maxime? Eius sequi mollitia qui ea, fugit perspiciatis molestias, dignissimos veritatis consequuntur accusantium magni praesentium nulla fuga aliquam repellat vel ad at cum, ipsum neque! Sapiente exercitationem labore provident, soluta maxime unde rerum optio consectetur quis? Quia itaque non quasi, quisquam, harum enim voluptas deleniti facere nostrum molestiae ab eligendi culpa eius. Possimus culpa dolorem eos vero cum, impedit asperiores vitae? Provident quae nemo, vel, dolore blanditiis magnam perspiciatis, explicabo eligendi alias eos hic non!</p> */}
    </Layout>
  );
};

export default BlogPage;