import { useState } from "react";
import "../Css-Code/ProfileDetailsCSS.css";
import HomePageNavbar from "../Navbar-Sections/HomePageNavbar";

function ProfileDetails() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    address: "",
    landmark: "",
    pin: "",
    number: "",
    houseNum: "",
    state: "",
    country: "",
    type: "Home"
  });

  function changeFormHandler(event) {
    const { name, value } = event.target;
    setFormData((prevValue) => ({
      ...prevValue,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", formData);
  }

  return (
    <div className="profile-page">
      <HomePageNavbar />
      <div className="form-container">
        <form className="profile-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Profile Details</h2>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Type here..."
                required
                value={formData.name}
                onChange={changeFormHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                name="surname"
                id="surname"
                placeholder="Type here..."
                required
                value={formData.surname}
                onChange={changeFormHandler}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Type here..."
                required
                value={formData.email}
                onChange={changeFormHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="number">Phone No.</label>
              <input
                type="text"
                name="number"
                id="number"
                placeholder="Type here..."
                required
                value={formData.number}
                onChange={changeFormHandler}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Type here..."
                required
                value={formData.address}
                onChange={changeFormHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pin">Pin Code</label>
              <input
                type="text"
                name="pin"
                id="pin"
                placeholder="Type here..."
                required
                value={formData.pin}
                onChange={changeFormHandler}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="landmark">Landmark</label>
              <input
                type="text"
                name="landmark"
                id="landmark"
                placeholder="Type here..."
                required
                value={formData.landmark}
                onChange={changeFormHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="houseNum">House No.</label>
              <input
                type="text"
                name="houseNum"
                id="houseNum"
                placeholder="Type here..."
                required
                value={formData.houseNum}
                onChange={changeFormHandler}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                name="state"
                id="state"
                placeholder="Type here..."
                required
                value={formData.state}
                onChange={changeFormHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                id="country"
                placeholder="Type here..."
                required
                value={formData.country}
                onChange={changeFormHandler}
              />
            </div>
          </div>

          <div className="radio-row">
            <label>
              <input
                type="radio"
                name="type"
                value="Home"
                checked={formData.type === "Home"}
                onChange={changeFormHandler}
              />
              Home
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="Office"
                checked={formData.type === "Office"}
                onChange={changeFormHandler}
              />
              Office
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Save Details
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileDetails;
