import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { PageContainer } from "../../Shared/PageContainer";
import { SectionContainer } from "../../Shared/SectionContainer";
import { colors } from "../../Shared/SharedStyles";
import Choice from "../Questionaire/Choice/Choice";
import { EditButton, HeadingLabel, InformLabel } from "./Outro.styles";

function Outro({ questions, answers, onEdit }) {
  const history = useHistory();
  const [form, setForm] = useState(null);

  useEffect(() => {
    setForm(JSON.parse(localStorage.getItem("step-one")));
  }, []);

  return (
    <PageContainer fullWidth="true" contain="true" column="true">
      <SectionContainer gap="true">
        <SectionContainer
          contain="true"
          sgap="true"
          style={{ background: colors.lightGray }}
        >
          {form && (
            <SectionContainer sgap="true">
              <SectionContainer row="true" sgap="true">
                <HeadingLabel>Basic information</HeadingLabel>
                <EditButton
                  onClick={() => {
                    history.push("/");
                  }}
                />
              </SectionContainer>
              <SectionContainer row="true" gap="true" wrap="true">
                <h4>
                  Name:{" "}
                  <InformLabel>
                    {" "}
                    {form.firstName} {form.lastName}
                  </InformLabel>
                </h4>
                <h4>
                  Date of birth: <InformLabel>{form.date}</InformLabel>{" "}
                </h4>
                <h4>
                  Gender: <InformLabel>{form.gender}</InformLabel>
                </h4>
                <h4>
                  Nationality: <InformLabel>{form.nationality}</InformLabel>
                </h4>
                <h4>
                  Contact Number: <InformLabel>{form.number}</InformLabel>
                </h4>
                <h4>
                  Email: <InformLabel>{form.email}</InformLabel>
                </h4>
              </SectionContainer>
            </SectionContainer>
          )}
        </SectionContainer>
        <SectionContainer
          gap="true"
          contain="true"
          style={{ background: colors.lightGray }}
        >
          {questions?.length > 0 &&
            questions.map((question, index) => {
              return (
                <SectionContainer sgap="true" key={index}>
                  <label>{question.question}</label>
                  <SectionContainer row="true" sgap="true">
                    <Choice varient="secondary" text={answers[index]} />
                    <EditButton
                      onClick={() => onEdit(index <= 2 ? 0 : index - 2)}
                    />
                  </SectionContainer>
                </SectionContainer>
              );
            })}
        </SectionContainer>
      </SectionContainer>
    </PageContainer>
  );
}

export default Outro;
