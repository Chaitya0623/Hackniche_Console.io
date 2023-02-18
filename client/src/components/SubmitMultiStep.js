import axios from "axios";
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
  return (
    <div
      style={{
        backgroundImage:
          " linear-gradient(210deg, rgba(107, 107, 107, 0.04) 0%, rgba(107, 107, 107, 0.04) 8%,rgba(31, 31, 31, 0.04) 8%, rgba(31, 31, 31, 0.04) 100%),linear-gradient(178deg, rgba(228, 228, 228, 0.04) 0%, rgba(228, 228, 228, 0.04) 62%,rgba(54, 54, 54, 0.04) 62%, rgba(54, 54, 54, 0.04) 100%),linear-gradient(293deg, rgba(18, 18, 18, 0.04) 0%, rgba(18, 18, 18, 0.04) 37%,rgba(233, 233, 233, 0.04) 37%, rgba(233, 233, 233, 0.04) 100%),linear-gradient(422deg, rgba(201, 201, 201, 0.04) 0%, rgba(201, 201, 201, 0.04) 55%,rgba(47, 47, 47, 0.04) 55%, rgba(47, 47, 47, 0.04) 100%),linear-gradient(439deg, rgba(172, 172, 172, 0.04) 0%, rgba(172, 172, 172, 0.04) 33%,rgba(26, 26, 26, 0.04) 33%, rgba(26, 26, 26, 0.04) 100%),linear-gradient(233deg, rgba(11, 11, 11, 0.04) 0%, rgba(11, 11, 11, 0.04) 38%,rgba(87, 87, 87, 0.04) 38%, rgba(87, 87, 87, 0.04) 100%),linear-gradient(516deg, rgba(199, 199, 199, 0.04) 0%, rgba(199, 199, 199, 0.04) 69%,rgba(4, 4, 4, 0.04) 69%, rgba(4, 4, 4, 0.04) 100%),linear-gradient(482deg, rgba(36, 36, 36, 0.04) 0%, rgba(36, 36, 36, 0.04) 20%,rgba(91, 91, 91, 0.04) 20%, rgba(91, 91, 91, 0.04) 100%),linear-gradient(259deg, rgb(3,7,39),rgb(18,140,212))",
        fontFamily: "Ubuntu",
      }}
    >
      <button type="submit">Submit</button>
      <button >Back</button>
    </div>
  );
};
export default Submit;
