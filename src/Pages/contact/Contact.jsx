import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import contactImg from "../../assets/Images/contactImage/1.jpg";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="text-center pt-24">
        <p className="text-primary font-semibold">CONTACT US</p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2">Get In Touch</h1>

        <p className="text-gray-500 mt-4">We'd love to hear from you.</p>

        <div className="max-w-6xl mx-auto px-6 mt-16  ">
          <div className="rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2">
            {/* Left sight */}

            <div
              className="bg-cover bg-center p-10 relative text-white "
              style={{ backgroundImage: `URL(${contactImg})` }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold ">Contact Information</h2>
                <p className=" mt-3 leading-relaxed">
                  Have a question or want to work with us? Feel free to get in
                  touch with us.
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <FaMapMarkerAlt className="text-yellow-300 text-xl mt-1" />

                    <div>
                      <h3 className="font-semibold ">Address</h3>
                      <p className="text-gray-200 mt-1">Herat, Afghanistan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaPhone className="text-yellow-300 text-xl mt-1" />

                    <div>
                      <h3 className="font-semibold ">Phone</h3>
                      <p className="text-gray-200 mt-1">+93 700 000 000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <FaEnvelope className="text-yellow-300 text-xl mt-1" />

                    <div>
                      <h3 className="font-semibold ">Email</h3>
                      <p className="text-gray-200 mt-1">example@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right sight */}
            <div className="bg-white p-10  ">
              <h2 className="text-2xl font-bold text-gray-900">
                Send Us a Message
              </h2>

              <p className="text-gray-500 mt-3">
                Fill out the form below and we will get back to you soon.
              </p>

              {/* Form part */}
              <form
                className="mt-8 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!email.includes("@")) {
                    setEmailError("Please enter a valid email");
                    return;
                  }
                  if (name.trim() === "") {
                    setNameError("Please enter your name");
                    return;
                  }
                  if (email.trim() === "") {
                    setEmailError("Please enter your email");
                    return;
                  }
                  if (subject.trim() === "") {
                    setSubjectError("Please enter a subject");
                    return;
                  }
                  if (message.trim() === "") {
                    setMessageError("Please enter your message");
                    return;
                  }
                  setSuccessMessage("Your message has been sent successfully!");
                  console.log("Form submitted");
                  console.log(name);
                  console.log(email);
                  console.log(subject);
                  console.log(message);
                  setName("");
                  setEmail("");
                  setSubject("");
                  setMessage("");
                }}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>

                  <input
                    value={name}
                    onChange={(e) => {
                      setNameError("");
                      setSuccessMessage("");
                      setName(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                  />
                  {nameError && (
                    <p className="text-red-500 text-sm mt-1">{nameError}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Your Email
                  </label>

                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                      setSuccessMessage("");
                    }}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                  />
                  {emailError && (
                    <p className="text-red-500 text-sm mt-1">{emailError}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Subject
                  </label>

                  <input
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                      setSubjectError("");
                      setSuccessMessage("");
                    }}
                    type="text"
                    placeholder="Enter subject"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                  />
                  {subjectError && (
                    <p className="text-red-500 text-sm mt-1">{subjectError}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Your Message
                  </label>

                  <textarea
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setMessageError("");
                      setSuccessMessage("");
                    }}
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                  {messageError && (
                    <p className="text-red-500 text-sm mt-1">{messageError}</p>
                  )}
                </div>
                {successMessage && (
                  <p className="text-green-500 text-sm mt-4">
                    {successMessage}
                  </p>
                )}
                <button
                  type="submit"
                  className="mt-6 bg-primary text-dark font-semibold px-6 py-3 rounded-lg hover:bg-primary-hover transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-5 rounded-r-2xl hover:bg-primary-hover bg-primary  inline">
        <button
          onClick={() => navigate(-1)}
          className="  text-2xl text-black font-bold p-10"
        >
          ←back
        </button>
      </div>
    </div>
  );
}

export default Contact;
