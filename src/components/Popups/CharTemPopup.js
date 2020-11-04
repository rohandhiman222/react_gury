import React, { useEffect, useState } from "react";

import {Button, Modal, Form} from "react-bootstrap";
function CharTemPopup(props) {
    const [form, setForm] = useState({
        name:"",
        description:"",
        location:"",
        popup:false
    });
  
    const handleClose = () => setForm({popup:false});
    const handleShow = () => setForm({popup:true});

     function handlerFun(e) {
        e.preventDefault();
        props.sumitForm(form);
        setForm({popup:false});
    }

    function handleInputChange(e){
      const { name, value } = e.target;
      setForm({...form, [name]:value })
    }

  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
         Add  {props.name}
        </Button>
  
        <Modal show={form.popup} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add {props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <Form onSubmit={handlerFun}>
              <Form.Group controlId="templeName">
                <Form.Label> {props.name} Name</Form.Label>
                <Form.Control  name="name" onChange={handleInputChange} type="text" placeholder="Name" />
                <Form.Text className="text-muted">
                  We'll never share your charity name with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="templeDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control name="description" onChange={handleInputChange} as="textarea" rows={3} placeholder="Description" />
              </Form.Group>

              <Form.Group controlId="templeLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control name="location" onChange={handleInputChange} type="text" placeholder="Location" />
                <Form.Text className="text-muted">
                  We'll never share your location with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group>
              <Form.File id="exampleFormControlFile1" label="Image" />
            </Form.Group>
              <Button variant="primary" type="submit">
              {props.name} Save
              </Button>
        </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
           
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default CharTemPopup;