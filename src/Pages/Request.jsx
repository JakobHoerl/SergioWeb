import React, { useState } from "react";
import "./Request.css";

const Request = () => {
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    email: "",
    telefonNummer: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you can handle form submission (e.g., sending it to a server)
  };

  return (
    <div className="preisanfrageContainer">
      <h1 className="preisanfrageHeading">Preisanfrage</h1>
      <form onSubmit={handleSubmit} className="preisanfrageForm">
        <div className="inputGroup">
          <input
            type="text"
            name="vorname"
            required
            value={formData.vorname}
            onChange={handleChange}
            className="formInput"
            placeholder=" " // Ensures label floats above the field
          />
          <label htmlFor="vorname" className="floatingLabel">
            Vorname
          </label>
        </div>
        <div className="inputGroup">
          <input
            type="text"
            name="nachname"
            required
            value={formData.nachname}
            onChange={handleChange}
            className="formInput"
            placeholder=" " // Ensures label floats above the field
          />
          <label htmlFor="nachname" className="floatingLabel">
            Nachname
          </label>
        </div>
        <div className="inputGroup">
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="formInput"
            placeholder=" " // Ensures label floats above the field
          />
          <label htmlFor="email" className="floatingLabel">
            Email
          </label>
        </div>
        <div className="inputGroup">
          <input
            type="tel"
            name="telefonNummer"
            required
            value={formData.telefonNummer}
            onChange={handleChange}
            className="formInput"
            placeholder=" " // Ensures label floats above the field
          />
          <label htmlFor="telefonNummer" className="floatingLabel">
            Telefon Nummer
          </label>
        </div>
        <div className="inputGroup">
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            className="formTextarea"
            placeholder=" " // Ensures label floats above the field
          ></textarea>
          <label htmlFor="message" className="floatingLabel">
            Nachricht
          </label>
        </div>
        <button type="submit" className="submitButton">
          Absenden
        </button>
      </form>
    </div>
  );
};

export default Request;
