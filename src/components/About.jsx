import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import CustomButton from "./CustomButton";

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="headerImg">
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "35px",
            opacity: "0.7",
          }}
        >
          <p
            className="text-left"
            style={{
              color: "yellow",
              fontSize: "40px",
              textAlign: "center",
            }}
          >
            ABOUT ME!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            quis non ab deleniti tenetur, ad vel. Fugiat rem maiores accusantium
            laboriosam incidunt, neque hic facere dignissimos laudantium quidem
            rerum maxime? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ut numquam vitae quasi ipsam. Natus facilis, quod, recusandae
            similique asperiores cum aspernatur veritatis fugiat corrupti culpa
            esse quidem quos. Dicta, sit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facilis aliquid dignissimos error magnam veritatis
            eum rerum dolorum! Ut perspiciatis at eligendi qui nobis, tempore,
            ipsum commodi provident blanditiis tenetur quod. Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Totam, eveniet soluta odit
            error rem quod cum. Blanditiis cupiditate possimus ipsa cumque
            repellendus, eveniet incidunt architecto qui illum recusandae?
            Suscipit, magnam?
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
