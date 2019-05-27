import React from "react";
import {Link} from 'gatsby';
// import Footer from '../components/footer';
// import Header from '../components/header';
import Layout from '../components/layout';

const IndexPage = () => {
  return(
    <Layout>
      <h1>Hello Gatsby!</h1>
    <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo assumenda quidem provident tempore, ab perferendis a harum fugit aliquid iure in, voluptate repudiandae, doloremque molestiae. Ducimus, dicta in vel tempore modi deserunt, itaque harum commodi sint similique sunt. Ullam, deleniti quibusdam asperiores amet quidem sint explicabo impedit ut quis repellat expedita alias eaque architecto iste neque sed rerum aperiam unde! Explicabo, quo non eius suscipit illum voluptate odit fugit quidem aliquid sint optio ex enim excepturi obcaecati reprehenderit quia id nihil! Perspiciatis explicabo provident minima. Saepe quibusdam iusto tempora deserunt expedita cupiditate delectus reiciendis ratione, facere illo maxime, perspiciatis laboriosam.</p>
    </Layout>
  )
  // return(
  // <div>
  //   <Header />
    
  //   <Footer />
  // </div>
  // ); 
    
  };
  export default IndexPage;
