import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import StepOne from "../Components/StepOne";
import StepTwo from "../Components/StepTwo";
import Final from "../Components/Final";
import Total from "../Components/Total";
import Breadcrumbs from "../Components/Breadcrumbs";

function Booking() {
    //state for steps
    const [step, setstep] = useState(1);
  
    //state for form data
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      subtotal: 123.45,
      total: 234.56
    })
  
    // function for going to next step by increasing step state by 1
    const nextStep = () => {
      setstep(step + 1);
    };
  
    // function for going to previous step by decreasing step state by 1
    const prevStep = () => {
      setstep(step - 1);
    };
  
    // handling form input data by taking onchange value and updating our previous form data state
    const handleInputData = input => e => {
      // input value from the form
      const { value } = e.target;
  
      //updating for data state taking previous state and then adding new value to create new object
      setFormData(prevState => ({
        ...prevState,
        [input]: value
      }));
    }
  
  
    // javascript switch case to show different form in each step
    switch (step) {
      // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
      case 1:
        return (
          <div className="App">
            <Container>
              <Row>
                <Col>
                  <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />
                </Col>
              </Row>
            </Container>
          </div>
        );
      // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
      case 2:
        return (
          <div className="App">
            <Container>
              <Row>
                <Col>
                  <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                </Col>
              </Row>
            </Container>
          </div>
        );
      // Only formData is passed as prop to show the final value at form submit
      case 3:
        return (
          <div className="App">
            <Container>
              <Row>
                <Col>
                  <Breadcrumbs values={step}/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Final values={formData} />
                </Col>
                <Col>
                  <Total values={formData} />
                </Col>
              </Row>
            </Container>
          </div>
        );
      // default case to show nothing
      default:
        return (
          <div className="App">
          </div>
        );
    }
  }

  export default Booking;
