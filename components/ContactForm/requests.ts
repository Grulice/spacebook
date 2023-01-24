import { TFormData } from "./types";

export const sendContactDetails = async (data: TFormData) => {
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
  // do i need await here? it works either way.
  return await response.json();
};
