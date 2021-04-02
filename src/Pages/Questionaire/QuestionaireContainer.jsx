import React, { useState, useEffect, useReducer } from "react";
import Questionaire from "./Questionaire";
import axios from "axios";
import Outro from "../Outro/Outro";
import Navigation from "../../Components/Navigation/Navigation";

function QuestionaireContainer() {
  const [progress, setProgress] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  });
  const [validated, setValidated] = useState(false);

  const reducer = (state, action) => {
    switch (action.type) {
      case "EXACT":
        return action.value;
      case "NEXT":
        if (!(state + 1 > questions?.length - 3)) return state + 1;
        else {
          if (!validated) {
            let valid = true;
            questions.forEach((_, index) => {
              if (answers[index] === "") valid = false;
            });
            if (!valid) return state;
            localStorage.setItem("step-two", JSON.stringify(answers));
            setValidated(true);
            return state;
          }
        }
      case "PREV":
        if (!(state - 1 < 0)) return state - 1;
        else return state;
      case "RESET":
        return 0;
      default:
        return 0;
    }
  };

  const [step, setStep] = useReducer(reducer, 0);

  const fetchQuestions = async () => {
    try {
      const { data } = await axios.get(
        "https://raw.githubusercontent.com/raffi23/digg-api-dummy/main/questions.json"
      );
      setQuestions(data.questions);
    } catch (error) {
      console.log(error?.response);
    }
  };

  const onSetAnswer = ({ index, answer }) => {
    setAnswers((prev) => {
      return {
        ...prev,
        [index]: answer,
      };
    });
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    setProgress((step / (questions?.length - 3)) * 100);
    window.scroll(0, 0);
  }, [step]);

  return (
    <>
      <Navigation progress={`${progress}%`} />
      {!validated ? (
        <Questionaire
          progress={progress}
          questions={questions}
          answers={answers}
          currentStep={step}
          onNext={() => setStep({ type: "NEXT" })}
          onPrev={() => setStep({ type: "PREV" })}
          onSelection={(object) => onSetAnswer(object)}
        />
      ) : (
        <Outro
          questions={questions}
          answers={answers}
          onEdit={(value) => {
            setValidated(false);
            setStep({ type: "EXACT", value: value });
          }}
        />
      )}
    </>
  );
}

export default QuestionaireContainer;
