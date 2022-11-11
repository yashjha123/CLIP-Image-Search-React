import React, { useEffect, useState } from "react";
import "./Search.css";
import { Form, Button, InputGroup, Navbar, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Search = ({ offset, imgs, setImgs }) => {
  const [Txt, setTxt] = useState("Balloon!");
  const [Searching, setSearching] = useState(true);
  const callAPI = (txt) => {
    setSearching(true);
    fetch("http://127.0.0.1:5000/encode", {
      body: JSON.stringify({ text: txt }),
      headers: { "Content-Type": "application/json" },
      method: "post",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setImgs(res.vals);
        setSearching(false);
      });
  };
  const APISearch = (e) => {
    e.preventDefault();
    callAPI(Txt);
    return false;
  };
  useEffect(() => {
    callAPI(Txt);
  }, []);
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
              <Button disabled variant="warning" type="submit" onSubmit={APISearch}>
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
