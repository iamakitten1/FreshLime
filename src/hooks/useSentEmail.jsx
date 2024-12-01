const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_hear: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateForm({ ...formData, [name]: value });
  };

  const validateForm = (data) => {
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
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    emailjs
      .sendForm(
        "service_7s2hlon",
        "template_hfgq3up",
        form.current,
        "wFzPi2R76_p2XCZ28"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email sent successfully!");
          e.target.reset();
          setFormData({ user_name: "", user_email: "", user_hear: "" });
          setIsFormValid(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send email. Please try again later.");
        }
      );
  };