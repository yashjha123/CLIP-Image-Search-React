import React, { useEffect, useState } from "react";
import "./Search.css";
import { Form, Button, InputGroup, Navbar, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Search = ({ setngrokShow, NgrokLink, offset, imgs, setImgs }) => {
  const [Txt, setTxt] = useState("Balloon!");
  const [Searching, setSearching] = useState(true);
  const callAPI = (txt) => {
    setSearching(true);
    // fetch("${http://d939-34-125-248-214.ngrok.io}/encode", {
    fetch(`${NgrokLink}/encode`, {
      body: JSON.stringify({ text: txt }),
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "just why?",
      },
      method: "post",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        setngrokShow(false);
        setImgs(res.vals);
        setSearching(false);
      })
      .catch(() => {
        setngrokShow(true);
      });
  };
  const APISearch = (e) => {
    e.preventDefault();
    callAPI(Txt);
    return false;
  };
  useEffect(() => {
    if (NgrokLink == "") {
    } else {
      callAPI(Txt);
    }
  }, [NgrokLink]);
  const [PrevOffset, setPrevOffset] = useState(0);
  const [Hidden, setHidden] = useState(false);
  useEffect(() => {
    if (PrevOffset - offset < 100) {
      setHidden(false);
    } else {
      setHidden(false);
    }
    setPrevOffset(offset);
  }, [offset]);
  return (
    <>
      <Navbar
        fixed="top"
        className={`my-nav ${Hidden ? "hidden" : ""}`}
        collapseOnSelect
        bg="dark"
        expand="lg"
      >
        <Navbar.Brand className="text-light" href="#">
          CLIP Image Search
        </Navbar.Brand>

        <Form onSubmit={APISearch} className="d-flex" style={{ flex: "1" }}>
          <InputGroup className="">
            <InputGroup.Text>
              {Searching ? (
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                <FontAwesomeIcon icon={faSearch} />
              )}
            </InputGroup.Text>
            <Form.Control
              disabled={Searching}
              type="text"
              onChange={(e) => setTxt(e.target.value)}
              val={Txt}
            />
            {Searching ? (
              <Button
                disabled
                variant="warning"
                type="submit"
                onSubmit={APISearch}
              >
                <Spinner as="span" animation="border" size="sm" />
              </Button>
            ) : (
              ""
            )}
            <Button
              disabled={Searching}
              variant="warning"
              type="submit"
              onSubmit={APISearch}
            >
              Search
            </Button>
          </InputGroup>
        </Form>
      </Navbar>
    </>
  );
};
export default Search;
