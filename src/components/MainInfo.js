import React from "react";
import styled from "styled-components";
import InfoContainer from "./common/InfoContainer";

function MainInfo() {
  return (
    <InfoContainer>
      <NameAdress>
        <h1>Issam Robler</h1>
        <h3>My address</h3>
        <h3>My city</h3>
        <h3>My postal code</h3>
      </NameAdress>
      <Academics>
        <h2>My Academics</h2>
        <h4>
          <span style={{ fontWeight: "1" }}>Program of studies:</span> Honours
          Bachelor of Science in Computer Science (CO-OP)
        </h4>
        <h4>
          <span style={{ fontWeight: "1" }}>Year Level:</span> 4 (3<sup>rd</sup>{" "}
          year in computer science)
        </h4>
        <h4>
          <span style={{ fontWeight: "1" }}>CGPA:</span> 9.61
        </h4>
      </Academics>
      <Languages>
        <h2>Languages</h2>
        <h4>
          <span style={{ fontWeight: "1" }}>English:</span> Fluent
        </h4>
        <h4>
          <span style={{ fontWeight: "1" }}>French:</span> Fluent
        </h4>
      </Languages>
      <ExtraInfo>
        <h2>Extra</h2>
        <h4>
          <span style={{ fontWeight: "1" }}>Expected Graduation Date:</span>{" "}
          December 2022
        </h4>
        <h4>
          <span style={{ fontWeight: "1" }}>Awards:</span> Dean's Honour List
          (every semester until now)
        </h4>
      </ExtraInfo>
    </InfoContainer>
  );
}
const ExtraInfo = styled.div`
  margin-bottom: 50px;
`;

const Languages = styled.div`
  margin-bottom: 50px;
`;
const NameAdress = styled.div`
  margin-bottom: 50px;
`;

const Academics = styled.div`
  margin-bottom: 50px;
`;

export default MainInfo;
