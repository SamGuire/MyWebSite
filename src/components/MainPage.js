import React from "react";
import { useState, useCallback } from "react";
import styled from "styled-components";
import BuildIcon from "@material-ui/icons/Build";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import HistoryIcon from "@material-ui/icons/History";
import IconButton from "@material-ui/core/IconButton";
import MainInfo from "./MainInfo";
import Projects from "./Projects";
import Experience from "./Experience";

function MainPage() {
  const [curNav, setCurNav] = useState("mainInfo");

  const handleIconClick = (value) => () => {
    setCurNav(value);
  };

  const getCurInfo = useCallback(() => {
    switch (curNav) {
      case "mainInfo":
        return <MainInfo />;
      case "projects":
        return <Projects />;
      case "experience":
        return <Experience />;
      default:
        return <MainInfo />;
    }
  }, [curNav]);
  
  return (
    <MainPageContainer>
      <Nav>
        <IconButton
          aria-label={"Main info"}
          onClick={handleIconClick("mainInfo")}
        >
          <PersonOutlineIcon
            style={{ color: "white", width: "50px", height: "50px" }}
            fontSize={"large"}
          />
        </IconButton>
        <IconButton
          aria-label={"Main info"}
          onClick={handleIconClick("experience")}
        >
          <HistoryIcon
            style={{ color: "white", width: "50px", height: "50px" }}
            fontSize={"large"}
          />
        </IconButton>
        <IconButton
          aria-label={"Main info"}
          onClick={handleIconClick("projects")}
        >
          <BuildIcon
            style={{ color: "white", width: "50px", height: "50px" }}
            fontSize={"large"}
          />
        </IconButton>
      </Nav>
      {getCurInfo()}
    </MainPageContainer>
  );
}
const MainPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  height: 100%;
  width: 10%;
`;

export default MainPage;
