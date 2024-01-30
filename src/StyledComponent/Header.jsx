import React from "react";
import { styled } from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="wrapper">
        <div className="header_container">
          <img className="logo_header" src="./images/logo.svg" />
          <button className="button_header">Try it Free</button>
        </div>
        <div className="header_content_container">
          <div className="header_content">
            <h1 className="header_content_heading">
              Build The Community Your Fans Will Love
            </h1>
            <p className="header_content_paragrph">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button className="content_button">Get Started For Free</button>
          </div>
          <img
            className="content_header_image"
            src="./images/illustration-mockups.svg"
          />
        </div>
      </div>  
    </HeaderContainer>
  );
};
export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;

  
.wrapper {
  width: 80%;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    min-width: 50%;
  }
}

  

  .header_container {
    display: flex;
    padding-top: 2rem;
    padding-bottom: 2rem;
    justify-content: space-between;
    
    @media only screen and (max-width:600px) {
      display: flex;
    }
  }
  .logo_header {
    font-weight: bolder;
    font-family: cursive;
  }
  .button_header {
  font-weight: bolder;
  font-family: cursive;
  text-align: center;
  border-radius: 2rem;
  width: auto; 
  min-width: 9rem; 
  padding: 0.5rem 1rem; 
  margin-right: 1rem; 
  &:hover {
    box-shadow: rgba(230, 47, 47, 0.2) 0 3px 15px inset,
      rgba(0, 0, 0, 0.1) 0 3px 5px, rgba(0, 0, 0, 0.1) 0 10px 13px;
    transform: scale(1.05);
  }
}

.logo_header {
  font-weight: bolder;
  font-family: cursive;
  max-width: 100%; 
  margin-right: 4rem; 
}


  .header_content_container {
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 600px) {
      display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
  }
  }
  .header_content {
    width: 30rem;
    margin-right: 2rem;
   
  }
  .header_content_heading {
    text-align: left;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
  .content_button {
    font-weight: bolder;
    font-family: cursive;
    text-align: center;
    border-radius: 2rem;
    width: 13rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
    background-color: #ec0d0dcc;
    &:hover {
      box-shadow: rgba(230, 47, 47, 0.2) 0 3px 15px inset,
        rgba(0, 0, 0, 0.1) 0 3px 5px, rgba(0, 0, 0, 0.1) 0 8px 11px;
      transform: scale(1.05);
    }
  }
  .header_content_paragrph {
    text-align: justify;
  }
  .content_header_image {
    width: 20rem;
 
  }
`;
