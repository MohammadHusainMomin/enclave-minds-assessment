import SmartUserLookup from "./components/SmartUserLookup";
import StepRegister from "./components/StepRegister";
import { RegisterProvider } from "./context/RegisterContext";

function App() {
  return (
    <RegisterProvider>
      <SmartUserLookup />
      <StepRegister />
    </RegisterProvider>
  );
}

export default App;
