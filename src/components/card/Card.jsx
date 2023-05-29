import React from "react";
import Button from "../formElements/Button";
import { card_configuration } from "../../model/card_configuration";

const Card = ({css}) => {
  return (
    <>
      {card_configuration.map((card) => (
        <div className={css.card_container} key={card.job_title}>
          <div className={css.card_sub_container}>
            <div className={css.card_box}>
              <div className={css.card_details_container}>
                <img src={card.logo} alt={card.description} className={css.card_logo} />
                <div>
                  <h2 className={css.card_job_title}>{card.job_title}</h2>
                  <p className={css.card_company}>{card.company}</p>
                  <p className={css.card_location}>{card.location}</p>
                  <p className={css.card_other_details}>{card.remote_type}</p>
                  <p className={css.card_other_details}>{card.experience}</p>
                  <p className={css.card_other_details}>{card.salary}</p>
                  <p className={css.card_other_details}>{card.employee}</p>
                  <div className={css.button_container}>
                    <Button className={`${card.button_type==="fill" ? css.button_fill : css.button_border}`} value={card.button} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
