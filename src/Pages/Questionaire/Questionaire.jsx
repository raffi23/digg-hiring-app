import React from "react";
import { Button } from "../../Shared/Button";
import { PageContainer } from "../../Shared/PageContainer";
import { SectionContainer } from "../../Shared/SectionContainer";
import Question from "./Question/Question";

function Questionaire({
  questions,
  answers,
  onNext,
  onPrev,
  currentStep,
  onSelection,
}) {
  return (
    <PageContainer fullWidth="true" contain="true" column="true">
      <SectionContainer gap="true" contain="true">
        {questions?.length > 0 && currentStep === 0 && (
          <>
            <Question
              questionCount={0}
              question={questions[0].question}
              choices={questions[0].answers}
              selected={answers[0]}
              onSelection={onSelection}
            />
            <Question
              questionCount={1}
              question={questions[1].question}
              choices={questions[1].answers}
              selected={answers[1]}
              onSelection={onSelection}
            />
            <Question
              questionCount={2}
              question={questions[2].question}
              choices={questions[2].answers}
              selected={answers[2]}
              onSelection={onSelection}
            />
          </>
        )}
        {questions?.length > 0 && currentStep !== 0 && (
          <Question
            questionCount={currentStep + 2}
            question={questions[currentStep + 2].question}
            choices={questions[currentStep + 2].answers}
            selected={answers[currentStep + 2]}
            onSelection={onSelection}
          />
        )}
        <SectionContainer row="true" gap="true" left="true" wrap="true">
          <Button varient="secondary" onClick={onPrev}>
            Back
          </Button>
          <Button varient="primary" onClick={onNext}>
            Next
          </Button>
        </SectionContainer>
      </SectionContainer>
    </PageContainer>
  );
}

export default Questionaire;
