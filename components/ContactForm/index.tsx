import React, { useState, useRef, useEffect } from "react";
import { RenderMsg } from "./renderMsg";
import { isEmailValid, isMessageValid, isNameValid } from "./validations";
import styles from "./Styles.module.css";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const [nameErr, setNameErr] = useState<string | null>(null);
  const [emailErr, setEmailErr] = useState<string | null>(null);
  const [messageErr, setMessageErr] = useState<string | null>(null);
  const [formState, setstate] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const messageInput = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (nameInput.current != null) {
      nameInput.current.focus();
    }
  }, []);

  const setFocus = ([nameValid, emailValid, messageValid]: Array<
    string | null
  >) => {
    //it looks ugly to me but i couldn't come up with anything working other than this :(
    nameValid !== null
      ? nameInput.current?.focus()
      : emailValid !== null
      ? emailInput.current?.focus()
      : messageValid !== null
      ? messageInput.current?.focus()
      : null;
  };

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setstate({ ...formState, [event.target.name]: event.target.value });
  };

  const formIsValid = () => {
    const nameValid = isNameValid(formState.name);
    const messageValid = isMessageValid(formState.message);
    const emailValid = isEmailValid(formState.email);

    setNameErr(nameValid);
    setMessageErr(messageValid);
    setEmailErr(emailValid);

    const errArray = [nameValid, emailValid, messageValid];
    const isValid = errArray.every((error) => error === null);
    setFocus(errArray);

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formIsValid()) {
      const target = e.target as typeof e.target & {
        name: { value: string };
        email: { value: string };
        message: { value: string };
      };

      const data = {
        name: target.name.value,
        email: target.email.value,
        message: target.message.value,
      };

      const JSONdata = JSON.stringify(data);
      const endpoint = "/api/contact-us";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      };

      const response = await fetch(endpoint, options);
      const result = await response.json();
      alert(result.message);
    } else {
      console.log("Form is invalid!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <label htmlFor="input-name" className="block">
        <span className="text-gray-700">
          Full name<span className="text-red-500">*</span>
        </span>
        <input
          id="input-name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          type="text"
          className={`mt-1 block w-full ${nameErr ? styles.error : null}`}
          ref={nameInput}
        />
        <RenderMsg message={nameErr} />
      </label>

      <label htmlFor="input-email" className="block">
        <span className="text-gray-700">
          Email<span className="text-red-500">*</span>
        </span>
        <input
          id="input-email"
          value={formState.email}
          onChange={handleChange}
          type="text"
          name="email"
          className={`mt-1 block w-full ${emailErr ? styles.error : null}`}
          placeholder="john@example.com"
          ref={emailInput}
        />
        <RenderMsg message={emailErr} />
      </label>

      <label htmlFor="input-message" className="block">
        <span className="text-gray-700">
          Your message<span className="text-red-500">*</span>
        </span>
        <textarea
          id="input-messagae"
          name="message"
          value={formState.message}
          onChange={handleChange}
          className={`mt-1 block w-full ${messageErr ? styles.error : null}`}
          ref={messageInput}
        ></textarea>
        <RenderMsg message={messageErr} />
      </label>

      <button className="bg-[#1da1f2] text-white text-xl font-medium p-2 rounded">
        Send
      </button>
    </form>
  );
};
