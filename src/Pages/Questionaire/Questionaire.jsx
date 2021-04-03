import React, { useEffect, useState } from "react";
import { Button } from "../../Shared/Button";
import { PageContainer } from "../../Shared/PageContainer";
import { SectionContainer } from "../../Shared/SectionContainer";
import { Shape } from "../../Shared/Shape";
import Question from "./Question/Question";
import BigYellowShape from "../../Images/Path 970.svg";
import BigRedShape from "../../Images/Path 971.svg";
import SmallYellowShape from "../../Images/Path 976.svg";
import SmallRedShape from "../../Images/Path 977.svg";

function Questionaire({
  questions,
  answers,
  onNext,
  onPrev,
  currentStep,
  onSelection,
}) {
  const [shapes, setShapes] = useState({
    bRed: {
      width: "",
      height: "",
      bottom: "",
      right: "",
      top: "",
      left: "",
      rotate: "",
    },
    bYellow: {
      width: "",
      height: "",
      bottom: "",
      right: "",
      top: "",
      left: "",
      rotate: "",
    },
    sRed1: {
      width: "",
      height: "",
      bottom: "",
      right: "",
      top: "",
      left: "",
      rotate: "",
    },
    sYellow1: {
      width: "",
      height: "",
      bottom: "",
      right: "",
      top: "",
      left: "",
      rotate: "",
    },
    sRed2: {
      width: "",
      height: "",
      bottom: "",
      right: "",
      top: "",
      left: "",
      rotate: "",
    },
    sYellow2: {
      width: "",
      height: "",
      bottom: "",
      right: "",
      top: "",
      left: "",
      rotate: "",
    },
  });

  useEffect(() => {
    switch (currentStep) {
      case 0:
        setShapes({
          bRed: {
            width: "382.76px",
            height: "303.08px",
            bottom: "",
            right: "-250px",
            top: "10%",
            left: "",
            rotate: "-53deg",
          },
          bYellow: {
            width: "382.76px",
            height: "303.08px",
            bottom: "-200px",
            right: "10%",
            top: "",
            left: "",
            rotate: "-62deg",
          },
          sRed1: {
            width: "48.77px",
            height: "38.62px",
            bottom: "",
            right: "",
            top: `${Math.random() * Math.random() * 700}px`,
            left: `${Math.random() * Math.random() * 700}px`,
            rotate: "-53deg",
          },
          sYellow1: {
            width: "48.77px",
            height: "38.62px",
            bottom: `${Math.random() * Math.random() * 700}px`,
            right: `${Math.random() * Math.random() * 700}px`,
            top: "",
            left: "",
            rotate: "-62deg",
          },
          sRed2: {
            width: "48.77px",
            height: "38.62px",
            bottom: `${Math.random() * Math.random() * 700}px`,
            right: "",
            top: `${Math.random() * Math.random() * 700}px`,
            left: "",
            rotate: "-53deg",
          },
          sYellow2: {
            width: "48.77px",
            height: "38.62px",
            bottom: `${Math.random() * Math.random() * 700}px`,
            right: "",
            top: "",
            left: `${Math.random() * Math.random() * 700}px`,
            rotate: "-62deg",
          },
        });
        break;
      case 1:
        setShapes({
          bRed: {
            width: "382.76px",
            height: "303.08px",
            bottom: "",
            right: `-${Math.random() * Math.random() * 700}px`,
            top: "80%",
            left: "",
            rotate: "-53deg",
          },
          bYellow: {
            width: "382.76px",
            height: "303.08px",
            bottom: `-${Math.random() * Math.random() * 700}px`,
            right: "80%",
            top: "",
            left: "",
            rotate: "-62deg",
          },
          sRed1: {
            width: "48.77px",
            height: "38.62px",
            bottom: "",
            right: "",
            top: `${Math.random() * Math.random() * 700}px`,
            left: `${Math.random() * Math.random() * 700}px`,
            rotate: "-53deg",
          },
          sYellow1: {
            width: "48.77px",
            height: "38.62px",
            bottom: `${Math.random() * Math.random() * 700}px`,
            right: `${Math.random() * Math.random() * 700}px`,
            top: "",
            left: "",
            rotate: "-62deg",
          },
          sRed2: {
            width: "48.77px",
            height: "38.62px",
            bottom: `${Math.random() * Math.random() * 700}px`,
            right: "",
            top: `${Math.random() * Math.random() * 700}px`,
            left: "",
            rotate: "-53deg",
          },
          sYellow2: {
            width: "48.77px",
            height: "38.62px",
            bottom: `${Math.random() * Math.random() * 700}px`,
            right: "",
            top: "",
            left: `${Math.random() * Math.random() * 700}px`,
            rotate: "-62deg",
          },
        });
        break;
      case 3:
        setShapes({
          bRed: {
            width: "382.76px",
            height: "303.08px",
            bottom: "",
            right: `-${Math.random() * Math.random() * 700}px`,
            top: "25%",
            left: "",
            rotate: "-53deg",
          },
          bYellow: {
            width: "382.76px",
            height: "303.08px",
            bottom: `-${Math.random() * Math.random() * 700}px`,
            right: "25%",
            top: "",
            left: "",
            rotate: "-62deg",
          },
          sRed1: {
            width: "48.77px",
            height: "38.62px",
            bottom: "",
            right: "",
            top: `${Math.random() * Math.random() * 700}px`,
            left: `${Math.random() * Math.random() * 700}px`,
            rotate: "-53deg",
          },
          sYellow1: {
            width: "48.77px",
            height: "38.62px",
            bottom: `${Math.random() * Math.random() * 700}px`,
            right: `${Math.random() * Math.random() * 700}px`,
            top: "",
            left: "",
            rotate: "-62deg",
          },
          sRed2: {
            width: "48.77px",
            height: "38.62px",
            bottom: `${Math.random() * Math.random() * 700}px`,
            right: "",
            top: `${Math.random() * Math.random() * 700}px`,
            left: "",
            rotate: "-53deg",
          },
          sYellow2: {
            width: "48.77px",
            height: "38.62px",
            bottom: `${Math.random() * Math.random() * 700}px`,
            right: "",
            top: "",
            left: `${Math.random() * Math.random() * 700}px`,
            rotate: "-62deg",
          },
        });
        break;
      case 5:
        setShapes({
          bRed: {
            width: "382.76px",
            height: "303.08px",
            bottom: "",
            right: `-${Math.random() * Math.random() * 700}px`,
            top: "90%",
            left: "",
            rotate: "-53deg",
          },
          bYellow: {
            width: "382.76px",
            height: "303.08px",
            bottom: `-${Math.random() * Math.random() * 700}px`,
            right: "90%",
            top: "",
            left: "",
            rotate: "-62deg",
          },
          sRed1: {
            width: "48.77px",
            height: "38.62px",
            bottom: "",
            right: "",
            top: `${Math.random() * Math.random() * 700}px`,
            left: `${Math.random() * Math.random() * 700}px`,
            rotate: "-53deg",
          },
          sYellow1: {
            width: "48.77px",
            height: "38.62px",
            bottom: `${Math.random() * Math.random() * 700}px`,
            right: `${Math.random() * Math.random() * 700}px`,
            top: "",
            left: "",
            rotate: "-62deg",
          },
          sRed2: {
            width: "48.77px",
            height: "38.62px",
            bottom: `${Math.random() * Math.random() * 700}px`,
            right: "",
            top: `${Math.random() * Math.random() * 700}px`,
            left: "",
            rotate: "-53deg",
          },
          sYellow2: {
            width: "48.77px",
            height: "38.62px",
            bottom: `${Math.random() * Math.random() * 700}px`,
            right: "",
            top: "",
            left: `${Math.random() * Math.random() * 700}px`,
            rotate: "-62deg",
          },
        });
        break;
      default:
        break;
    }
  }, [currentStep]);

  return (
    <PageContainer fullWidth="true" column="true">
      <Shape
        bg={BigYellowShape}
        width={shapes.bYellow.width}
        height={shapes.bYellow.height}
        rotate={shapes.bYellow.rotate}
        right={shapes.bYellow.right}
        left={shapes.bYellow.left}
        top={shapes.bYellow.top}
        bottom={shapes.bYellow.bottom}
      />
      <Shape
        bg={BigRedShape}
        width={shapes.bRed.width}
        height={shapes.bRed.height}
        rotate={shapes.bRed.rotate}
        right={shapes.bRed.right}
        left={shapes.bRed.left}
        top={shapes.bRed.top}
        bottom={shapes.bRed.bottom}
      />
      <Shape
        bg={SmallYellowShape}
        width={shapes.sYellow1.width}
        height={shapes.sYellow1.height}
        rotate={shapes.sYellow1.rotate}
        right={shapes.sYellow1.right}
        left={shapes.sYellow1.left}
        top={shapes.sYellow1.top}
        bottom={shapes.sYellow1.bottom}
      />
      <Shape
        bg={SmallYellowShape}
        width={shapes.sYellow2.width}
        height={shapes.sYellow2.height}
        rotate={shapes.sYellow2.rotate}
        right={shapes.sYellow2.right}
        left={shapes.sYellow2.left}
        top={shapes.sYellow2.top}
        bottom={shapes.sYellow2.bottom}
      />
      <Shape
        bg={SmallRedShape}
        width={shapes.sRed1.width}
        height={shapes.sRed1.height}
        rotate={shapes.sRed1.rotate}
        right={shapes.sRed1.right}
        left={shapes.sRed1.left}
        top={shapes.sRed1.top}
        bottom={shapes.sRed1.bottom}
      />
      <Shape
        bg={SmallRedShape}
        width={shapes.sRed2.width}
        height={shapes.sRed2.height}
        rotate={shapes.sRed2.rotate}
        right={shapes.sRed2.right}
        left={shapes.sRed2.left}
        top={shapes.sRed2.top}
        bottom={shapes.sRed2.bottom}
      />
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
