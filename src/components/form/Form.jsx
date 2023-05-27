import React from "react";
import Input from "../formElements/Input";
import RadioButton from "../formElements/RadioButton";
import { form_configuration } from "../../model/form_configuration.js";
import { css_configuration } from "../../model/css_configuration";

const Form = ({ step, fields, handleChange }) => {
  if (step === 1) {
    return (
      <>
        {form_configuration.step_one.map((field, index) => (
          <div key={index} className={field?.field_group_classes}>
            <label className={field?.label_classes}>{field?.label}{field?.required && <span className={field?.asterisk_style}>*</span>}</label>
            <Input
              name={field?.name}
              value={fields[field?.name] || ""}
              onChange={handleChange}
              placeholder={field?.placeholder}
              className={css_configuration.field_classes}
            />
          </div>
        ))}
      </>
    );
  } else if (step === 2) {
    return (
      <>
        {form_configuration.step_two.map((field, index) => (
          <div key={index} className={field?.field_group_classes}>
            <label className={field?.label_classes}>{field?.label}{field?.required && <span className={field?.asterisk_style}>*</span>}</label>
            {field?.type !== "radio" ? (
              <Input
                name={field?.name}
                value={fields[field?.name] || ""}
                onChange={handleChange}
                placeholder={field?.placeholder}
                className={css_configuration.field_classes}
              />
            ) : (
              <>
                {field?.options.map((option, index) => (
                  <RadioButton
                    key={index}
                    name={field?.name}
                    value={option.value}
                    label={option.label}
                    checked={fields.applyType === option.value}
                    onChange={handleChange}
                    className={css_configuration.radio_button_group}
                  />
                ))}
              </>
            )}
          </div>
        ))}
      </>
    );
  }
};
export default Form;
