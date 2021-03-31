import React from "react";
import { PageContainer } from "../../Shared/PageContainer";
import { SectionContainer } from "../../Shared/SectionContainer";
import Input from "../../Components/Input/Input";
import Select from "../../Components/Select/Select";
import { Heading } from "../../Shared/Heading";
import CheckBoxInput from "../../Components/CheckBoxInput/CheckBoxInput";
import { ForwardButton } from "../../Shared/ForwardButton";
import {
  IntroLeftContainer,
  Image,
  Description,
  SubDescription,
} from "./Intro.styles";
import ManImage from "../../Images/man.svg";

function Intro({
  isMobile,
  userInput,
  userInputError,
  countries,
  onUserInputChange,
  onNextStep,
}) {
  return (
    <PageContainer fullWidth="true" center="true">
      <IntroLeftContainer>
        <SectionContainer gap="true" contain="true">
          <Heading large="true" style={{ color: "white", fontSize: 52 }}>
            digg
          </Heading>
          <Image src={ManImage} alt="man" />
          <Description>
            "Coming to Dubai with One Step Dubai has been the best decision of
            my life. I am now living in Dubai with a good job and I will be
            getting married next year!"
          </Description>
          <SubDescription>
            Mohammed, One Step Dubai student <br /> Pakistan
          </SubDescription>
        </SectionContainer>
      </IntroLeftContainer>
      <SectionContainer gap="true" contain="true">
        <SectionContainer center="true">
          <Heading large="true">Apply now to work in Dubai</Heading>
        </SectionContainer>
        <SectionContainer center="true" row={!isMobile} sgap="true">
          <Input
            fullWidth="true"
            label="First Name"
            name="firstName"
            value={userInput.firstName}
            onChange={(e) => onUserInputChange(e)}
            error={userInputError.firstName}
          />
          <Input
            fullWidth="true"
            label="Last Name"
            name="lastName"
            value={userInput.lastName}
            onChange={(e) => onUserInputChange(e)}
            error={userInputError.lastName}
          />
        </SectionContainer>
        <SectionContainer center="true" row={!isMobile} sgap="true">
          <Input
            fullWidth="true"
            type="date"
            label="Date of Birth"
            name="date"
            value={userInput.date}
            onChange={(e) => onUserInputChange(e)}
            error={userInputError.date}
          />
          <SectionContainer sgap="true" style={{ padding: "5px 10px" }}>
            <Heading>Gender:</Heading>
            <SectionContainer row="true" gap="true">
              <CheckBoxInput
                label="Male"
                name="gender"
                value="male"
                checked={userInput.gender === "male"}
                onChange={(e) => onUserInputChange(e)}
              />
              <CheckBoxInput
                label="Female"
                name="gender"
                value="female"
                checked={userInput.gender === "female"}
                onChange={(e) => onUserInputChange(e)}
              />
            </SectionContainer>
          </SectionContainer>
        </SectionContainer>
        <SectionContainer center="true" row={!isMobile} sgap="true">
          <Select
            fullWidth="true"
            label="Nationality"
            name="nationality"
            value={userInput.nationality}
            onChange={(e) => onUserInputChange(e)}
            error={userInputError.nationality}
          >
            <option value=""></option>
            {countries.length &&
              countries.map((entry, index) => {
                return (
                  <option
                    key={entry.nationality + index}
                    value={entry.nationality}
                  >
                    {entry.nationality}
                  </option>
                );
              })}
          </Select>
          <Select
            fullWidth="true"
            label="Country of Residancy"
            name="country"
            value={userInput.country}
            onChange={(e) => onUserInputChange(e)}
            error={userInputError.country}
          >
            <option value=""></option>
            {countries.length &&
              countries.map((entry, index) => {
                return (
                  <option
                    key={entry.en_short_name + index}
                    value={entry.en_short_name}
                  >
                    {entry.en_short_name}
                  </option>
                );
              })}
          </Select>
        </SectionContainer>
        <Heading>How we can contact you?</Heading>
        <SectionContainer center="true" row={!isMobile} sgap="true">
          <Input
            fullWidth="true"
            label="Contact Number"
            name="number"
            value={userInput.number}
            onChange={(e) => onUserInputChange(e)}
            error={userInputError.number}
          />
          <Input
            fullWidth="true"
            label="Email Address"
            name="email"
            value={userInput.email}
            onChange={(e) => onUserInputChange(e)}
            error={userInputError.email}
          />
        </SectionContainer>
        <SectionContainer row="true" right="true">
          <ForwardButton onClick={(e) => onNextStep(e)}>
            Apply now
          </ForwardButton>
        </SectionContainer>
      </SectionContainer>
    </PageContainer>
  );
}

export default Intro;
