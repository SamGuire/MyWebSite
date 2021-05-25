import React from "react";
import styled from "styled-components";
import BulletPoints from "./common/BulletPoints";
import InfoContainer from "./common/InfoContainer";
function Experience() {
  return (
    <InfoContainer>
      <TitleContainer>
        <h1>My Work Experience</h1>
      </TitleContainer>
      <Macadamian>
        <h2>Macadamian (May 2020 - September 2020)</h2>
        <BulletPoints>
          <li>
            Implemented a customizable graph to a check-in application that
            would allow a receptionist of a building to monitor their
            daily/weekly number of check-ins using Chart.js.
          </li>
          <li>
            Improved the user experience of a check-in application by allowing
            the concierge of a facility to prioritize certain visitors with a
            drag and drop feature, remove visitors from a queue, and
            differentiate visitors who might have contracted the COVID-19 virus.
          </li>
          <li>
            Added a questionnaire functionality that would be used to determine
            if a visitor checking in a building should be approached with care
            due to the virus.
          </li>
          <li>
            Languages used: <strong>React, TypeScript and JavaScript</strong>
          </li>
        </BulletPoints>
      </Macadamian>
      <CartoVista>
        <h2>CartoVista (January 2021 - May 2021)</h2>
        <BulletPoints>
          <li>
            Worked closely alongside the UX designer and took ownership in
            setting up the user interface of their new web application.
          </li>
          <li>
            Setup an API to allow front-end developers to fetch GIS data to be
            used for the new web application.
          </li>
          <li>
            Improved application performance by reducing the time needed to
            retrieve and insert 1000s of rows of data from a database from a few
            minutes down to a few seconds, improving wait times and overall user
            experience.
          </li>
          <li>
            Setup automation scripts to streamline the modification and
            extension of the companies database, thereby increasing developer
            productivity.
          </li>
          <li>
            Languages used:{" "}
            <strong>React, TypeScript, C# and PostgreSQL</strong>
          </li>
        </BulletPoints>
      </CartoVista>
    </InfoContainer>
  );
}

const TitleContainer = styled.div`
  margin-bottom: 50px;
`;
const Macadamian = styled.div`
  margin-bottom: 50px;
`;
const CartoVista = styled.div`
  margin-bottom: 50px;
`;

export default Experience;
