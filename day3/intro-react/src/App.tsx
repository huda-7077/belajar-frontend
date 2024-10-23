import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Portofolio from "./pages/Portofolio";
function App() {
  // const name = "Siti";
  // const name2 = "Joko";

  return (
    <>
      {/* <h1>Hello World!</h1> */}
      {/* <ComponentA name={name} />
      <ComponentB name={name2} />
      <ComponentC name={name} /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Portofolio />} path="/portofolio" />

          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
