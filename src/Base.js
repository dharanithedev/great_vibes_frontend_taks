import React, { useState } from "react";
import Form from "./components/form/Form";
import Button from "./components/formElements/Button";
import Card from "./components/card/Card";
import { css_configuration } from "./model/css_configuration";

const Base = () => {
  const [step, setStep] = useState(1);
  const [fields, setFields] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields((prevFields) => ({ ...prevFields, [name]: value }));
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  return (
    <>
      <div className={css_configuration.base_body}>
        <div className={css_configuration.base_container}>
          <form onSubmit={handleSubmit}>
            <div className={css_configuration.form_container}>
              <div className={css_configuration.form_header}>Create a job</div>
              <div className={css_configuration.form_step}>Step {step}</div>
              <Form handleChange={handleChange} step={step} fields={fields} />
            </div>
            <div className={css_configuration.buttons_group}>
              {step === 1 && (
                <Button onClick={handleNextStep} className={css_configuration.button} value="Next" />
              )}
              {step === 2 && (
                <Button type="submit" className={css_configuration.button} value="Save" />
              )}
            </div>
          </form>
        </div>
      </div>
      <Card css={css_configuration}/>
      <br></br>
    </>
    
  );
};

export default Base;
