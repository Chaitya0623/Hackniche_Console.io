import React, { useState } from "react";
import Essentials from "./Essentials";
import { Navbar } from "./Navbar";
import OrgDetails from "./OrgDetails";
import Submissions from "./Submissions";
import Submit from "./SubmitMultiStep";
// import Step1 from "./MultiStep1";
// import Step2 from "./MultiStep2";
// import Step3 from "./MultiStep3";
// import Submit from "./MultiStepSubmit";

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        logo: "",
        title: "",
        modeOfHacki: "",
        organisation: "",
        domian: "",
        regiStart: "",
        regiEnd: "",
        hackiStart: "",
        hackiEnd: "",
        preferredSkills: "",
        min: "",
        max: "",
        contactEmail: "",
        discordLink: "",
        instaLink: "",
        linkedInLink: "",
        rules: "",
        price1: "",
        price2: "",
        price3: "",
    });
    
//   const handleDomain = (val) => {
//     console.log(val);
//     setFormData({ ...data, domain:val});
//   };

  const handleImageUpload = (e) => {
    console.log("Handle Image Upload");
    console.log(e.target.files[0]);
    console.log(e.target.files[0].name);
    setFormData({...formData , [e.target.name]:e.target.files[0]})
  }
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
    switch (currentStep) {
        case 1:
            return (<>
                <Navbar/>
                <Essentials
                    data={formData}
                    handleImageUpload={handleImageUpload}
                    handleChange={handleChange}
                    next={next}
                />
                </>
            );
        case 2:
            return (
                <>
                <Navbar/>
                <Submissions
                    data={formData}
                    handleChange={handleChange}
                    handleImageUpload={handleImageUpload}
                    next={next}
                    back={back}
                /></>
            );
        case 3:
            return (
                <>
                <Navbar/>
                <OrgDetails
                    data={formData}
                    handleChange={handleChange}
                    handleImageUpload={handleImageUpload}
                    next={next}
                    back={back}
                /></>
            );
        default:
            return <Submit data={formData} back={back} />;
    }
};
export default MultiStepForm;