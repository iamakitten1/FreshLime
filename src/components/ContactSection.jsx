import React, { useState } from "react";
import useSentEmail from "../hooks/useSentEmail";

export function ContactSection() {
  const { form, sendEmail, isSending } = useSentEmail();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_hear: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(function (prev) {
      return {
        ...prev,
        [name]: value,
      };
    });
    validateForm({ ...formData, [name]: value });
  }

  function validateForm(data) {
    const { user_name, user_email, user_hear } = data;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid =
      user_name.trim() !== "" &&
      emailPattern.test(user_email) &&
      user_hear.trim() !== "";
    setIsFormValid(isValid);

    if (!isValid) {
      setErrorMessage("Please fill out all fields.");
    } else {
      setErrorMessage("");
    }
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center bg-gradient-to-r from-[#52a58c] to-[#087f5b] mx-6 lg:mx-20 my-10 lg:my-20 rounded-xl overflow-hidden">
      <div className="flex-1 p-8 sm:p-12 w-full">
        <p className="font-bold text-3xl sm:text-4xl leading-tight text-[#333}">
          Get your first week for free
        </p>
        <p className="text-lg sm:text-xl text-[#333] mt-4">
          A lot and all kinds of hummers waiting for you. Start working out
          today, make your best shape as possible, stay healthy and active with
          us!
        </p>
        <form
          ref={form}
          onSubmit={(e) => sendEmail(e, formData, setFormData, setIsFormValid)}
          className="flex flex-col gap-4 mt-6"
        >
          <div className="flex flex-col sm:flex-row sm:gap-6 w-full">
            <div className="flex flex-col w-full">
              <label className="text-left">Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Mark Godwin"
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
                placeholder="me@example.com"
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
              disabled={!isFormValid || isSending}
              className="bg-[#02261b] px-6 py-3 text-white text-[1.2rem] flex-1 rounded-lg sm:w-auto mt-4 sm:mt-0"
            >
              {isSending ? "Sending..." : "Sign up now"}
            </button>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-center mt-4">{errorMessage}</p>
          )}
        </form>
      </div>

      <div className="flex-1 w-full">
        <img
          src="/images/cta-img.jpg"
          alt="gym"
          className="w-full h-full object-cover rounded-b-xl lg:rounded-r-xl"
        />
      </div>
    </div>
  );
}

export default ContactSection;
