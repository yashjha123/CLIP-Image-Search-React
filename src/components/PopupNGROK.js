import { Modal, Form, InputGroup, Button, ListGroup } from "react-bootstrap";
import React from "react";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PopupNGROK = ({ setngrokShow, ngrokShow, NgrokLink, setNgrokLink }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setngrokShow(false);
    return false;
  };
  return (
    <div>
      <Modal show={ngrokShow}>
        <Modal.Header closebutton>
          <Modal.Title>Create your own server on Colab!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, ready to try out our application?! Just a few more
          steps <br /><br />
          <ListGroup as="ol" numbered>
            <ListGroup.Item href="" as="li">
              <a
                href="https://dashboard.ngrok.com/get-started/your-authtoken"
                target="_blank"
                rel="noopener noreferrer"
              >
                Copy your NGROK token by logging in here
              </a>
            </ListGroup.Item>
            <ListGroup.Item action as="li">
              <a
                href="https://colab.research.google.com/drive/1x33PxBhxBjlMNImyXm9fmqW3o7FIvoeT?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to open the colab notebook
              </a>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              Replace the {"<placeholder>"} with your token
            </ListGroup.Item>
            <ListGroup.Item as="li">
              Run all the cells by clicking this button in Colab
            </ListGroup.Item>
            <ListGroup.Item as="li">
              The back-end url will prompt, copy it here
            </ListGroup.Item>
          </ListGroup>
          <br />
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Enter Ngrok URL"
                onChange={(e) => {
                  setNgrokLink(e.target.value);
                }}
                val={NgrokLink}
              />
              <Button onSubmit={handleSubmit}>
                <FontAwesomeIcon icon={faLink} />
              </Button>
            </InputGroup>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PopupNGROK;
