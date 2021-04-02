import React from "react";
import { Heading } from "../../Shared/Heading";
import { PageContainer } from "../../Shared/PageContainer";
import { SectionContainer } from "../../Shared/SectionContainer";

function Questionaire() {
  return (
    <PageContainer fullWidth="true">
      <div>
        <h1>digg</h1>
        <div>====================================</div>
      </div>
      <SectionContainer>
        <Heading>question of questions</Heading>
      </SectionContainer>
    </PageContainer>
  );
}

export default Questionaire;
