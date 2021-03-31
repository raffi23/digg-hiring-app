import React, { useState, useEffect } from "react";
import { windowSizes } from "../../Shared/SharedStyles";
import Intro from "./Intro";
import axios from "axios";
import validator from "validator";

function IntroContainer() {
  const [isMobile, setIsMobile] = useState(false);
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

  const onUserInputChange = (e) => {
    const { name, value } = e.target;

    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onUserInputErrorChange = ({ name, value }) => {
    setUserInputError((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onNextStep = () => {
    let isValid = true;

    if (!validator.isLength(userInput.firstName, { min: 3, max: 20 })) {
      onUserInputErrorChange({ name: "firstName", value: "invalid name" });
    } else {
      onUserInputErrorChange({ name: "firstName", value: "" });
    }
    if (!validator.isLength(userInput.lastName, { min: 3, max: 20 })) {
      onUserInputErrorChange({ name: "lastName", value: "invalid last name" });
    } else {
      onUserInputErrorChange({ name: "lastName", value: "" });
    }
    if (!validator.isLength(userInput.nationality, { min: 1 })) {
      onUserInputErrorChange({
        name: "nationality",
        value: "invalid nationality",
      });
    } else {
      onUserInputErrorChange({ name: "nationality", value: "" });
    }
    if (!validator.isLength(userInput.country, { min: 1 })) {
      onUserInputErrorChange({ name: "country", value: "invalid country" });
    } else {
      onUserInputErrorChange({ name: "country", value: "" });
    }
    if (!validator.isMobilePhone(userInput.number)) {
      onUserInputErrorChange({ name: "number", value: "invalid number" });
    } else {
      onUserInputErrorChange({ name: "number", value: "" });
    }
    if (!validator.isEmail(userInput.email)) {
      onUserInputErrorChange({ name: "email", value: "invalid email" });
    } else {
      onUserInputErrorChange({ name: "email", value: "" });
    }
    if (!validator.isDate(userInput.date)) {
      onUserInputErrorChange({ name: "date", value: "invalid date" });
    } else {
      onUserInputErrorChange({ name: "date", value: "" });
    }

    if (!isValid) return;
  };

  const updateWidth = () => {
    setIsMobile(window.innerWidth < parseInt(windowSizes.large));
  };

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
