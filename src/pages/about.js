import React from "react";
import {Link} from 'gatsby';
import Layout from '../components/layout';
const AboutPage = () => {
  return(
    <Layout>
      
      <h1>About Me</h1>
      <p><Link to="/contact">My short Bio. My FB-profile</Link></p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatibus obcaecati aut aperiam tempora ipsam incidunt error saepe! Praesentium quisquam molestias sed recusandae obcaecati, laudantium soluta voluptas iste deserunt saepe labore dolorem, architecto quasi nulla quaerat consectetur delectus ipsum ratione facilis aspernatur ullam? Explicabo architecto aperiam nobis inventore. Itaque facilis obcaecati necessitatibus suscipit modi dolorem maiores deserunt vel ea quidem esse, omnis optio mollitia ullam voluptas veniam eligendi placeat, officia quae magni? Debitis, ipsum reprehenderit.</p>
      
    </Layout>
    
  );
};
export default AboutPage;