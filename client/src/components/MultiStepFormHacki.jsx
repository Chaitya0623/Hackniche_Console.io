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

const MultiStepFormHacki = () => {
    const imgStyle = {
        backgroundImage:
            " linear-gradient(210deg, rgba(107, 107, 107, 0.04) 0%, rgba(107, 107, 107, 0.04) 8%,rgba(31, 31, 31, 0.04) 8%, rgba(31, 31, 31, 0.04) 100%),linear-gradient(178deg, rgba(228, 228, 228, 0.04) 0%, rgba(228, 228, 228, 0.04) 62%,rgba(54, 54, 54, 0.04) 62%, rgba(54, 54, 54, 0.04) 100%),linear-gradient(293deg, rgba(18, 18, 18, 0.04) 0%, rgba(18, 18, 18, 0.04) 37%,rgba(233, 233, 233, 0.04) 37%, rgba(233, 233, 233, 0.04) 100%),linear-gradient(422deg, rgba(201, 201, 201, 0.04) 0%, rgba(201, 201, 201, 0.04) 55%,rgba(47, 47, 47, 0.04) 55%, rgba(47, 47, 47, 0.04) 100%),linear-gradient(439deg, rgba(172, 172, 172, 0.04) 0%, rgba(172, 172, 172, 0.04) 33%,rgba(26, 26, 26, 0.04) 33%, rgba(26, 26, 26, 0.04) 100%),linear-gradient(233deg, rgba(11, 11, 11, 0.04) 0%, rgba(11, 11, 11, 0.04) 38%,rgba(87, 87, 87, 0.04) 38%, rgba(87, 87, 87, 0.04) 100%),linear-gradient(516deg, rgba(199, 199, 199, 0.04) 0%, rgba(199, 199, 199, 0.04) 69%,rgba(4, 4, 4, 0.04) 69%, rgba(4, 4, 4, 0.04) 100%),linear-gradient(482deg, rgba(36, 36, 36, 0.04) 0%, rgba(36, 36, 36, 0.04) 20%,rgba(91, 91, 91, 0.04) 20%, rgba(91, 91, 91, 0.04) 100%),linear-gradient(259deg, rgb(3,7,39),rgb(18,140,212))",
        // backgroundImage:"url('https://cdn.pixabay.com/photo/2018/01/29/13/03/internet-3116062__340.jpg')",  
        height: "130vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        opacity: "0.9",
    };
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
        setFormData({ ...formData, [e.target.name]: e.target.files[0] })
    }
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        console.log(event.target.name,event.target.value)   
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
                <div style={imgStyle}>
                    <Navbar />
                    <Essentials
                        data={formData}
                        // handleImageUpload={handleImageUpload}
                        handleChange={handleChange}
                        next={next}
                    />
                </div>
            </>
            );
        case 2:
            return (
                <>
                    <div style={imgStyle}>
                        <Navbar />
                        <Submissions
                            data={formData}
                            handleChange={handleChange}
                            // handleImageUpload={handleImageUpload}
                            next={next}
                            back={back}
                        />
                    </div>
                </>
            );
        case 3:
            return (
                <>
                    <div style={imgStyle}>
                        <Navbar />
                        <OrgDetails
                            data={formData}
                            handleChange={handleChange}
                            // handleImageUpload={handleImageUpload}
                            next={next}
                            back={back}
                        />
                    </div>
                </>
            );
        default:
            return <Submit data={formData} back={back} />;
    }
};
export default MultiStepFormHacki;