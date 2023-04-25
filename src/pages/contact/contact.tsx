import { FC, useState, ChangeEvent } from "react";

import Heading from "../../component/ui/heading/heading";
import FormFiled from "../../component/ui/form-field/form-filed";
import FormTextArea from "../../component/ui/form-text-area/form-text-area";
import Button from "../../component/ui/button/button";

import classes from "./contact.module.css";

const Contact: FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userMsg, setUserMsg] = useState<string>("");

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userName, userEmail, userMsg);
  };

  return (
    <section id="contact" className={classes["contact"]}>
      <div className={classes["contact__container"]}>
        <div className="contact__heading">
          <Heading type="h4">Contact</Heading>
          <p className={classes["contact__heading--desc"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio, saepe! Rerum voluptatum ipsum natus cupiditate!
          </p>
        </div>
        <div className={classes["contact__form--container"]}>
          <form onSubmit={onSubmitHandler} className={classes["contact__form"]}>
            <FormFiled
              label="Name"
              placeholder="Enter your Name"
              type="text"
              name="name"
              value={userName}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setUserName(event.target.value)
              }
            />
            <FormFiled
              label="Email"
              placeholder="Enter your Email"
              type="email"
              name="email"
              value={userEmail}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setUserEmail(event.target.value)
              }
            />
            <FormTextArea
              label="Email"
              value={userMsg}
              placeholder="Enter your Message"
              name="message"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setUserMsg(event.target.value)
              }
            />
            <Button size="big" color="white">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
