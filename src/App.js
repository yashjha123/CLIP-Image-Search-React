import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./components/Gallery";
import Popup from "./components/Popup";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PopupNGROK from "./components/PopupNGROK";

function App() {
  const [imgs, setImgs] = useState([]);
  const [offset, setOffset] = useState(0);
  const [showImg, setshowImg] = useState("");
  const [NgrokLink, setNgrokLink] = useState("")
  const [ngrokShow, setngrokShow] =  useState(true)
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
      <PopupNGROK setngrokShow={setngrokShow} ngrokShow={ngrokShow} NgrokLink={NgrokLink} setNgrokLink={setNgrokLink}/>
      <Search setngrokShow={setngrokShow} NgrokLink={NgrokLink} offset={offset} setImgs={setImgs} imgs={imgs} />
      <Gallery setshowImg={setshowImg} imgs={imgs} />
      <Popup setshowImg={setshowImg} showImg={showImg} />
    </div>
  );
}
export default App;
