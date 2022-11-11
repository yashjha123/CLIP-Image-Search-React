import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./components/Gallery";
import Popup from "./components/Popup";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [imgs, setImgs] = useState([]);
  const [offset, setOffset] = useState(0);
  const [showImg, setshowImg] = useState("");
  
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    setTimeout(()=>{
      setOffset(0)
    },1000)
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
   
  }, []);
  return (
    <div className="App">
      <Search offset={offset} setImgs={setImgs} imgs={imgs} />
      <Gallery setshowImg={setshowImg} imgs={imgs} />
      <Popup setshowImg={setshowImg} showImg={showImg} />
      <Button className="md-3 right-side" variant="primary"><FontAwesomeIcon icon={faSearch} /></Button>
    </div>
  );
}
export default App;
