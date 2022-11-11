import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
const Popup = ({ setshowImg, showImg }) => {
  const [Show, setShow] = useState(false);
  useEffect(() => {
    console.log("triggered");
    setShow(showImg ? true : false);
  }, [showImg]);
  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      setshowImg();
    }, 0.15 * 1000);
  };
  return (
    <>
      <Modal
        backdrop={true}
        onHide={handleClose}
        toggle={handleClose}
        centered
        show={Show}
        close={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Image Viewer</Modal.Title>
        </Modal.Header>
        <Modal.Body  onClick={handleClose}>
          <img src={showImg} />
        </Modal.Body>
        <Modal.Footer>
          <a href={showImg} target="_blank" rel="noopener noreferrer" download>
            <Button variant="primary">Download</Button>
          </a>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Popup;
