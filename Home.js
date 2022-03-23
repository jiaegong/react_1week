import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const history = useHistory();
  const day_list = ["월", "화", "수", "목", "금", "토", "일"];

  return (
    <>
      <h3 style={{ textAlign: "center" }}>내 일주일은?</h3>
      {day_list.map((value, index) => {
        const rates = Math.floor(Math.random() * 5);
        return (
          <Rate key={value}>
            <p style={{ margin: "0px 0.5rem 0px 0px", fontWeight: "bold" }}>
              {value}
            </p>
            {Array.from({ length: 5 }, (item, idx) => {
              return (
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "30px",
                    margin: "5px",
                    backgroundColor: rates < idx ? "#ddd" : "#ffeb3b",
                  }}
                />
              );
            })}
            <Triangle
              onClick={() => {
                history.push("/detail/" + value);
              }}
            />
          </Rate>
        );
      })}
    </>
  );
};

const Rate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0px;
  width: 100%;
`;

const Triangle = styled.div`
  background-color: transparent;
  border-color: transparent purple;
  width: 0px;
  height: 0px;
  border-top-width: 1rem;
  border-top-style: solid;
  border-bottom-width: 1rem;
  border-bottom-style: solid;
  border-left-width: 1.6rem;
  border-left-style: solid;
  color: purple;
  cursor: pointer;
`;

export default Home;
