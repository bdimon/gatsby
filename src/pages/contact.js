import React from "react";
// import {Link} from 'gatsby';
import Layout from '../components/layout';
const ContactPage = () => {
  return(
    <Layout>
      <h1>Contact Page</h1>
      <p>Some text about my contact info</p>
      <p>Contact Me via  
        <a href="https://twitter.com/Opixib" target="_blank" rel="noopener noreferrer"> Twitter</a>
      </p>
      <p>Contact Me via  
        <a href="https://www.facebook.com/profile.php?id=100002197195461" target="_blank" rel="noopener noreferrer"> Facebook</a>
      </p>
      
    </Layout>
  );
};

export default ContactPage;