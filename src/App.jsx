import Navbar from "./Components/Navbar/Navbar";
import "./Components/Styles/App.css";
// import Home from "./Components/Home";
import Footer from "./Components/Footer/Footer";
import AdmissionForm from "./Components/AdimissionForm/AdimissionForm";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Home></Home> */}
      <AdmissionForm></AdmissionForm>
      <Footer></Footer>
    </>
  );
}

export default App;
