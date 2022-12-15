import React, { useState, useRef, useEffect } from "react";
import { RenderMsg } from "./renderMsg";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export const ContactFrom = () => {
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [messageErr, setMessageErr] = useState("");
  const [state, setstate] = useState<FormState>({
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

  const setFocus = (
    ref:
      | React.RefObject<HTMLInputElement>
      | React.RefObject<HTMLTextAreaElement>
  ) => {
    if (ref.current != null) {
      ref.current.focus();
    }
  };

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setstate({ ...state, [event.target.name]: event.target.value });
  };

  const formIsValid = () => {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (state.name.length === 0) {
      setNameErr("This field is required");
      setFocus(nameInput);
      return 0;
    } else {
      setNameErr("");
    }

    if (state.email.match(validRegex) === null) {
      setEmailErr("Input valid email");
      setFocus(emailInput);
      return 0;
    } else {
      setEmailErr("");
    }

    if (state.message.length === 0) {
      setMessageErr("This field is required");
      setFocus(messageInput);
      return 0;
    } else {
      setMessageErr("");
    }

    return 1;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formIsValid() ? console.log(state) : console.log("Form is invalid");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8" action="">
      <label htmlFor="input-name" className="block">
        <span className="text-gray-700">
          Full name<span className="text-red-500">*</span>
        </span>
        <input
          id="input-name"
          name="name"
          value={state.name}
          onChange={handleChange}
          type="text"
          className="mt-1 block w-full"
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
          value={state.email}
          onChange={handleChange}
          type="text"
          name="email"
          className="mt-1 block w-full"
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
          value={state.message}
          onChange={handleChange}
          className="mt-1 block w-full"
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
