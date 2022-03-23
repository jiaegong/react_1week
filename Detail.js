import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const history = useHistory();
  const day = useParams();
  const [rating, setRating] = React.useState(Math.floor(Math.random() * 5));


  return (
    <>
      <Title>
        <Span>{day.day}요일</Span>평점 남기기
      </Title>
      <Rating>
        {Array.from({ length: 5 }, (item, idx) => {
          return (
            <div onClick={() => {setRating(idx + 1);}}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "30px",
                margin: "5px",
                backgroundColor: rating < idx +1 ? "#ddd" : "#ffeb3b",
              }}
            />
          );
        })}
      </Rating>
      <Button
        onClick={() => {
          history.goBack();
        }}
      >
        평점 남기기
      </Button>
    </>
  );
};

const Title = styled.h3`
  text-align: center;
`;

const Span = styled.span`
  color: #fff;
  font-weight: 900;
  background: orange;
  padding: 0.2rem;
  border-radius: 5px;
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0px;
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
  background-color: purple;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  color: #fff;
`;

export default Detail;
