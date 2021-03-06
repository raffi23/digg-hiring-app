import React, { useState, useEffect } from "react";
import { windowSizes } from "../../Shared/SharedStyles";
import Intro from "./Intro";
import axios from "axios";
import validator from "validator";
import { useHistory } from "react-router";

function IntroContainer() {
  const history = useHistory();
  // state to determine if we are on mobile or not
  const [isMobile, setIsMobile] = useState(false);
  // user input data will be stored in userInput state
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    gender: "male",
    email: "",
    number: "",
    country: "",
    nationality: "",
    date: new Date().toISOString().substring(0, 10),
  });
  // user input data errors will be stored in userInputError state after validation
  const [userInputError, setUserInputError] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    number: "",
    country: "",
    nationality: "",
    date: "",
  });
  const [countries, setCountries] = useState([]);

  // updates user input
  const onUserInputChange = (e) => {
    const { name, value } = e.target;

    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // updates user input error messages
  const onUserInputErrorChange = ({ name, value }) => {
    setUserInputError((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // validates user input and exits if validation was not saccessful
  // if validation saccessful saves info to local storage JSON string
  const onNextStep = () => {
    let isValid = true;

    if (!validator.isLength(userInput.firstName, { min: 3, max: 20 })) {
      onUserInputErrorChange({ name: "firstName", value: "invalid name" });
      isValid = false;
    } else {
      onUserInputErrorChange({ name: "firstName", value: "" });
    }
    if (!validator.isLength(userInput.lastName, { min: 3, max: 20 })) {
      onUserInputErrorChange({ name: "lastName", value: "invalid last name" });
      isValid = false;
    } else {
      onUserInputErrorChange({ name: "lastName", value: "" });
    }
    if (!validator.isLength(userInput.nationality, { min: 1 })) {
      onUserInputErrorChange({
        name: "nationality",
        value: "invalid nationality",
      });
      isValid = false;
    } else {
      onUserInputErrorChange({ name: "nationality", value: "" });
    }
    if (!validator.isLength(userInput.country, { min: 1 })) {
      onUserInputErrorChange({ name: "country", value: "invalid country" });
      isValid = false;
    } else {
      onUserInputErrorChange({ name: "country", value: "" });
    }
    if (!validator.isMobilePhone(userInput.number)) {
      onUserInputErrorChange({ name: "number", value: "invalid number" });
      isValid = false;
    } else {
      onUserInputErrorChange({ name: "number", value: "" });
    }
    if (!validator.isEmail(userInput.email)) {
      onUserInputErrorChange({ name: "email", value: "invalid email" });
      isValid = false;
    } else {
      onUserInputErrorChange({ name: "email", value: "" });
    }
    if (!validator.isDate(userInput.date)) {
      onUserInputErrorChange({ name: "date", value: "invalid date" });
      isValid = false;
    } else {
      onUserInputErrorChange({ name: "date", value: "" });
    }

    if (!isValid) return;
    // save to local storage
    localStorage.setItem("step-one", JSON.stringify(userInput));
    history.push("/step/2");
  };

  // figures out if screen size is mobile size and returns boolean
  const updateWidth = () => {
    setIsMobile(window.innerWidth < parseInt(windowSizes.large));
  };

  // on start adds event listner for window resize
  // fetches countries and nationalities from a 3rd-party api
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
    fetchCountries();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  /* requests */

  /* countries and nationalities fetch request */
  const fetchCountries = async () => {
    try {
      const { data } = await axios.get(
        "https://raw.githubusercontent.com/Dinuks/country-nationality-list/master/countries.json"
      );
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Intro
      isMobile={isMobile}
      userInput={userInput}
      userInputError={userInputError}
      countries={countries}
      onUserInputChange={(e) => onUserInputChange(e)}
      onNextStep={(e) => onNextStep(e)}
    />
  );
}

export default IntroContainer;
