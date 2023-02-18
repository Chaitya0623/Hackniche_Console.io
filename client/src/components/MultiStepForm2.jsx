import React, { useState } from "react";
import Essentials from "./Essentials";
import { Navbar } from "./Navbar";
import OrgDetails from "./OrgDetails";
import Participant1 from "./Participant1";
import Participant2 from "./Participant2";
import Participant3 from "./Participant3";
import Participant4 from "./Participant4";
import Submissions from "./Submissions";
import Submit from "./SubmitMultiStep";
// import Step1 from "./MultiStep1";
// import Step2 from "./MultiStep2";
// import Step3 from "./MultiStep3";
// import Submit from "./MultiStepSubmit";

const MultiStepForm2 = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name1: "",
    name2: "",
    name3: "",
    name4: "",
    year1: "",
    year2: "",
    year3: "",
    year4: "",
    resume1: "",
    resume2: "",
    resume3: "",
    resume4: "",
    skills1: "",
    skills2: "",
    skills3: "",
    skills4: "",
    glink1: "",
    glink2: "",
    glink3: "",
    glink4: "",
  });

  //   const handleDomain = (val) => {
  //     console.log(val);
  //     setFormData({ ...data, domain:val});
  //   };

  const handleMulterShit = (e) => {
    console.log("Handle Image Upload");
    console.log(e.target.files[0]);
    console.log(e.target.files[0].name);
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const next = () => {
    setCurrentStep(currentStep + 1);
  };
  const back = () => {
    setCurrentStep(currentStep - 1);
  };
  const imgStyle = {
    backgroundImage:
      " linear-gradient(210deg, rgba(107, 107, 107, 0.04) 0%, rgba(107, 107, 107, 0.04) 8%,rgba(31, 31, 31, 0.04) 8%, rgba(31, 31, 31, 0.04) 100%),linear-gradient(178deg, rgba(228, 228, 228, 0.04) 0%, rgba(228, 228, 228, 0.04) 62%,rgba(54, 54, 54, 0.04) 62%, rgba(54, 54, 54, 0.04) 100%),linear-gradient(293deg, rgba(18, 18, 18, 0.04) 0%, rgba(18, 18, 18, 0.04) 37%,rgba(233, 233, 233, 0.04) 37%, rgba(233, 233, 233, 0.04) 100%),linear-gradient(422deg, rgba(201, 201, 201, 0.04) 0%, rgba(201, 201, 201, 0.04) 55%,rgba(47, 47, 47, 0.04) 55%, rgba(47, 47, 47, 0.04) 100%),linear-gradient(439deg, rgba(172, 172, 172, 0.04) 0%, rgba(172, 172, 172, 0.04) 33%,rgba(26, 26, 26, 0.04) 33%, rgba(26, 26, 26, 0.04) 100%),linear-gradient(233deg, rgba(11, 11, 11, 0.04) 0%, rgba(11, 11, 11, 0.04) 38%,rgba(87, 87, 87, 0.04) 38%, rgba(87, 87, 87, 0.04) 100%),linear-gradient(516deg, rgba(199, 199, 199, 0.04) 0%, rgba(199, 199, 199, 0.04) 69%,rgba(4, 4, 4, 0.04) 69%, rgba(4, 4, 4, 0.04) 100%),linear-gradient(482deg, rgba(36, 36, 36, 0.04) 0%, rgba(36, 36, 36, 0.04) 20%,rgba(91, 91, 91, 0.04) 20%, rgba(91, 91, 91, 0.04) 100%),linear-gradient(259deg, rgb(3,7,39),rgb(18,140,212))",
    // backgroundImage:"url('https://cdn.pixabay.com/photo/2018/01/29/13/03/internet-3116062__340.jpg')",  
    height: "110vh",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: "0.9",
  };
  switch (currentStep) {
    case 1:
      return (
        <>
        <div style={imgStyle}>
        <Navbar />
          <Participant1
            data={formData}
            handleMulterShit={handleMulterShit}
            handleChange={handleChange}
            next={next}
          />
        </div>
        </>
      );
    case 2:
      return (
        <><div style={imgStyle}>
          <Navbar />
          <Participant2
            data={formData}
            handleMulterShit={handleMulterShit}
            handleChange={handleChange}
            next={next}
            back={back}
          />
          </div>
        </>
      );
    case 3:
      return (
        <><div style={imgStyle}>
          <Navbar />
          <Participant3
            data={formData}
            handleMulterShit={handleMulterShit}
            handleChange={handleChange}
            next={next}
            back={back}
          />
          </div>
        </>
      );
    case 4:
      return (
        <><div style={imgStyle}>
          <Navbar />
          <Participant4
            data={formData}
            handleMulterShit={handleMulterShit}
            handleChange={handleChange}
            back={back}
          />
          </div>
        </>
      );
    default:
      return (
        <>
          <Submit data={formData} back={back} />;
          <button onClick={back}>Back</button>
        </>
      );
  }
};
export default MultiStepForm2;
