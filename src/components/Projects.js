import React from "react";
import styled from "styled-components";
import BulletPoints from "./common/BulletPoints";
import InfoContainer from "./common/InfoContainer";

function Projects() {
  return (
    <InfoContainer>
      <TitleContainer>
        <h1>My Projects</h1>
      </TitleContainer>
      <FlappyBirdAI>
        <h2>Flappy Bird AI</h2>
        <h3>
          Implemented an algorithm that teaches an AI how to play a cloned
          version of Flappy Bird. “Play it yourself” option is included.
        </h3>
        <BulletPoints>
          <li>
            AI able to reach up to a score of 300 after only 2 generations has
            passed.
          </li>
          <li>Pixel perfect collision was added to improve hit detection.</li>
          <li>
            Languages used: <strong>Python</strong>
          </li>
        </BulletPoints>
      </FlappyBirdAI>
      <ClinicBooker>
        <h2>Clinic Booker</h2>
        <h3>
          3-man project involving the creation of an app that lets users book
          appointments with a clinic of their choice.{" "}
        </h3>
        <BulletPoints>
          <li>Android App created with Java and SQLite.</li>
          <li>
            Developed the components that allow clinics to manipulate their
            account and view their clientele, as well as the components
            dedicated to the admin.
          </li>
          <li>
            Minimized bugs and improved the quality of the app by using the
            Circle CI continuous integration tool as well as the Espresso
            testing framework for the UI.
          </li>
          <li>
            Languages used: <strong>Java and SQLite</strong>
          </li>
        </BulletPoints>
      </ClinicBooker>
      <AlgoVisualizer>
        <h2>Algorithm Visualizer</h2>
        <h3>
          Developed a web app that can visualize numerous algorithms and data
          structures using the p5.js library.
        </h3>
        <BulletPoints>
          <li>
            The current build contains a visualization of Bubble Sort, Insertion
            Sort, Selection Sort, Quick Sort, Merge Sort, Stacks, Queues,
            Breadth-First-Search maze traversal, and Depth-First-Search maze
            traversal.
          </li>
          <li>
            Description of each algorithm and data structures with their
            respective time complexities (best, average, and worst-case)
            included.
          </li>
          <li>
            Languages used: <strong>JavaScript, HTML and CSS</strong>
          </li>
        </BulletPoints>
      </AlgoVisualizer>
    </InfoContainer>
  );
}

const TitleContainer = styled.div`
  margin-bottom: 50px;
`;
const AlgoVisualizer = styled.div`
  margin-bottom: 50px;
`;
const FlappyBirdAI = styled.div`
  margin-bottom: 50px;
`;

const ClinicBooker = styled.div`
  margin-bottom: 50px;
`;

export default Projects;
