import React from "react";
import content from "../content";
import { styled } from "styled-components";

const Cards = () => {
  return (
    <Container>
      {content.map(function (data) {
        return (
          <Card layout={data.id % 2 === 0 && "row-reverse"} key={data.id}>
            <div className="cards_container">
              <div className="cards_wrapper">
                <div className="cards_area">
                  <h2 className="cards_title">{data.title}</h2>
                  <p className="cards_para">{data.body}</p>
                </div>
                <img className="cards_image" src={`./images/${data.image}`} alt={data.title} />
              </div>
            </div>
          </Card>
        );
      })}
    </Container>
  );
};

export default Cards;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  padding-bottom: 2rem;
  @media only screen and (max-width: 600px) {
      width: 100vh;
      
    }
`;

const Card = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  .cards_wrapper {
   
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${({ layout }) => layout === "row-reverse" && "row-reverse"};
    text-align: center; 

    @media only screen and (max-width: 600px) {
      flex-direction: column;
      align-items: center; 
    }
  }

  .cards_container {
    margin: 0 auto;
    width: 90%;

  }

  .cards_para {
    width: 90%;
    text-align: justify;
    margin: 0 auto; 
    padding-top: 1rem; 
  }

  .cards_area {
    width: 90%;
    padding-top: 2rem;
    text-align: center; /* Center the content horizontally */

    @media only screen and (max-width: 600px) {
      width: 100%; 
    
    }
  }

  .cards_image {
    width: 18rem;
    padding-top: 2rem;
    margin-top: 0.5rem;

    @media only screen and (max-width: 600px) {
      width: 70%;
    }
  }
`;
