import Navbar from "./Components/Navbar/Navbar";
import "./Components/Styles/App.css";
import Home from "./Components/Home";
import Footer from "./Components/Footer/Footer";
import AdmissionForm from "./Components/AdimissionForm/AdimissionForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "Al-Jannat-Educational-Foundation/",
      element: <Home></Home>,
    },
    {
      path: "Al-Jannat-Educational-Foundation/admission",
      element: <AdmissionForm></AdmissionForm>,
    },
  ]);

  return (
    <>
      <Navbar></Navbar>
      <RouterProvider router={router} />
      <Footer></Footer>
    </>
  );
}

export default App;
