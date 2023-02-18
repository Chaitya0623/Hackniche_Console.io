import React from "react";


const Submit = (props) => {
  
  const handleSubmit = async (e) => {
    console.log(data);
    console.log(data.image, data.image.name);
    console.log("Handle Submit");
    e.preventDefault();
    let url = "http://localhost:3000/client/addClientProfile";
    const formdata = new FormData();
    formdata.append("file", data.image);
    formdata.append("name", data.name);
    formdata.append("contact", data.contact);
    formdata.append("email", data.email);
    formdata.append("address", data.address);
    console.log("After appending in formData");
    try {
      let response = await axios.post(url, formdata);
      if (response.status === 200) {
        console.log(
          "/client/addClientProfile API successfully called from frontend"
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  
  const { data } = props;
  const listItems = Object.entries(data).map(([key, value]) => (
    <li>
      <strong>{key}:</strong> {value}
    </li>
  ));
  return (
    <div>
      <ul>{listItems}</ul>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
};
export default Submit;

