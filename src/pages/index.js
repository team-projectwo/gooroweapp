import React from "react";
import Layout from "../components/layout";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { Parallax } from "react-materialize";

const LandingPage = () => (
  <Layout>
    <div>
      <Parallax imageSrc="https://images.unsplash.com/photo-1506197061617-7f5c0b093236?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=418764a3f148dde8a8debcea492f9156&auto=format&fit=crop&w=1000&q=80" />
      <div className="section white">
        <div className="row container">
          <h2 className="header">Go Or Owe</h2>
          <p className="grey-text text-darken-3 lighten-3">
            This Shit Better Be Working!
          </p>
        </div>
      </div>
      <Parallax imageSrc="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=de05b46a8ac91fcff2b134811e62d79f&auto=format&fit=crop&w=1000&q=80" />
    </div>
  </Layout>
);

export default LandingPage;
