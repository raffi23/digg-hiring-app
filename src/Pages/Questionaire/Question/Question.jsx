import React from "react";
import { Heading } from "../../../Shared/Heading";
import { SectionContainer } from "../../../Shared/SectionContainer";
import Choice from "../Choice/Choice";

function Question({ questionCount, question, choices, selected, onSelection }) {
  return (
    <SectionContainer gap="true">
      <Heading>{question}</Heading>
      <SectionContainer row="true" sgap="true" wrap="true">
        {choices?.length &&
          choices.map((choice, index) => {
            return (
              <Choice
                key={choice.answer}
                varient={choice.answer === selected ? "secondary" : "primary"}
                image={
                  choice.icon &&
                  "https://github.com/raffi23/digg-api-dummy/raw/main/images/" +
                    choice.icon +
                    ".svg"
                }
                text={choice.answer}
                onClick={() =>
                  onSelection({ index: questionCount, answer: choice.answer })
                }
              />
            );
          })}
      </SectionContainer>
    </SectionContainer>
  );
}

export default Question;
