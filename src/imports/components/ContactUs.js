import React from "react";
import Pic from "./../../assets/images/CONSULTINGT.png";
import { Form, Icon } from "semantic-ui-react";

const ContactUs = () => {
  return (
    <div>
      <img src={Pic} className="contact-image" />
      <div className="formStyle">
        <i className="phone icon" />
        <p>09028028675</p>

        <i className="mail icon" />
        <p>n.mosh4yedi@gmail.com</p>

        <Form className="">
          <Form.Group widths="equal">
            <Form.Field label="firstname" control="input" />
            <Form.Field label="lastname" control="input" />
          </Form.Group>

          <Form.Field label="Massage" control="textarea" rows="3" />
          <Form.Field label="" control="button">
            Submit
          </Form.Field>
        </Form>
      </div>
      {/* form */}
    </div>
  );
};

export default ContactUs;
