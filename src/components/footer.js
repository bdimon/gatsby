import React from "react";
import {Link, graphql, useStaticQuery} from 'gatsby';
import footerStyles from './footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }`
  )
  return(
    <footer className={footerStyles.footer}>
      <p>Created by <Link to="/contact"> {data.site.siteMetadata.author}</Link> &copy; 2019.</p>
    </footer>
  )
  
};
export default Footer;