import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function useSentEmail() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  function sendEmail(e, formData, setFormData, setIsFormValid) {
    e.preventDefault();
    console.log(form.current);

    setIsSending(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        function () {
          console.log("Email sent successfully!");
          alert("Email sent successfully!");
          e.target.reset();
          setFormData({ user_name: "", user_email: "", user_hear: "" });
          setIsFormValid(false);
        },
        function (error) {
          console.error("Failed to send email. Please try again", error.text);
          alert("Failed to send email. Please try again later.");
        }
      )
      .finally(function () {
        setIsSending(false);
      });
  }

  return { form, sendEmail, isSending };
}

export default useSentEmail;


