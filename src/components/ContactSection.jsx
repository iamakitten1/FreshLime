import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


export default function ContactSection() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_hear: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function isFormValid() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const { user_name, user_email, user_hear } = formData;

    if (
      user_name.trim() &&
      emailPattern.test(user_email) &&
      user_hear.trim()
    ) {
      setErrorMessage("");
      return true;
    }

    setErrorMessage("Please fill out all fields correctly.");
    return false;
  }

  function sendEmail(event) {
    event.preventDefault();

    if (!isFormValid()) {
      return;
    }

    emailjs
      .sendForm(
        "service_7s2hlon",
        "template_hfgq3up",
        formRef.current,
        "wFzPi2R76_p2XCZ28"
      )
      .then(
        function () {
          alert("Email sent successfully!");
          setFormData({ user_name: "", user_email: "", user_hear: "" });
        },
        function (error) {
          console.error("Failed to send email:", error.text);
          alert("Failed to send email. Please try again later.");
        }
      );
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center bg-gradient-to-r from-[#52a58c] to-[#087f5b] mx-6 lg:mx-20 my-10 lg:my-20 rounded-xl overflow-hidden">
      <div className="flex-1 p-8 sm:p-12 w-full">
        <p className="font-bold text-3xl sm:text-4xl leading-tight text-white">
          Get your first week for free
        </p>
        <p className="text-lg sm:text-xl text-white mt-4">
          A lot and all kinds of hummers waiting for you. Start working out
          today, make your best shape as possible, stay healthy and active with
          us!
        </p>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 mt-6"
        >
          <div className="flex flex-col sm:flex-row sm:gap-6 w-full">
            <div className="flex flex-col w-full">
              <label className="text-left">Name</label>
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                className="bg-[#b5d9ce] rounded-lg p-2"
                required
              />
            </div>
            <div className="flex flex-col w-full mt-4 sm:mt-0">
              <label className="text-left">Email</label>
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                className="bg-[#b5d9ce] rounded-lg p-2"
                required
              />
            </div>
          </div>
          <div className="flex flex-col  sm:flex-row items-center sm:gap-6 w-full mt-4">
            <div className="flex flex-col text-left w-1/2">
              <label className="">Where did you hear from us?</label>
              <select
                name="user_hear"
                value={formData.user_hear}
                onChange={handleChange}
                className="bg-[#b5d9ce] mt-2 p-1"
                required
              >
                <option value="">Please choose one option:</option>
                <option value="family">Friends and Family</option>
                <option value="youtube">Youtube video</option>
                <option value="podcast">Podcast</option>
                <option value="facebook">Facebook ad</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={!isFormValid()}
              className="bg-[#02261b] px-6 py-3 text-white text-[1.2rem] flex-1  rounded-lg sm:w-auto mt-4 sm:mt-0"
            >
              Sign up now
            </button>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-center mt-4">{errorMessage}</p>
          )}
        </form>
      </div>

      <div className="flex-1 w-full">
        <img
          src="/public/images/gym.jpg"
          alt="gym"
          className="w-full h-full object-cover rounded-b-xl lg:rounded-r-xl"
        />
      </div>
    </div>
  );
}

