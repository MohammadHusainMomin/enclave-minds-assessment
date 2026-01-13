import { useContext, useState } from "react";
import { RegisterContext } from "../context/RegisterContext";

const StepRegister = () => {
  const { formPayload, setFormPayload } = useContext(RegisterContext);
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      {currentStep === 1 && (
        <>
          <h3>Profile Info</h3>
          <input
            placeholder="Full Name"
            onChange={(e) =>
              setFormPayload({
                ...formPayload,
                profile: { name: e.target.value }
              })
            }
          />
          <br /><br />
          <button onClick={() => setCurrentStep(2)}>Next</button>
        </>
      )}

      {currentStep === 2 && (
        <>
          <h3>Experience</h3>
          <input
            placeholder="Years of Experience"
            onChange={(e) =>
              setFormPayload({
                ...formPayload,
                experience: { years: e.target.value }
              })
            }
          />
          <br /><br />
          <button onClick={() => setCurrentStep(1)}>Back</button>
          <button onClick={() => console.log(formPayload)}>
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default StepRegister;
