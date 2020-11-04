import React, { useEffect, useState } from "react";
import {Button, Modal, Form} from "react-bootstrap";

const SliderPopup = props => {

    const [form, setForm] = useState({
        header:"",
        footer:"",
        popup:false
    });

    
    useEffect(() => {
      console.log("mounted");
      setForm({header:props.item.header, footer:props.item.footer});
    },[]);
  
  
  
  
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
         {props.name}  Slider
        </Button>
  
        <Modal show={form.popup} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Slider {form.header}</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <Form onSubmit={handlerFun}>
            
              <Form.Group controlId="sliderHeader">
                <Form.Label>Hader</Form.Label>
                <Form.Control value={form.header} name="header" onChange={handleInputChange} as="textarea" rows={3} placeholder="Add Header" />
              </Form.Group>

              <Form.Group controlId="sliderFooter">
                <Form.Label>Footer</Form.Label>
                <Form.Control value={form.footer} name="footer" onChange={handleInputChange} as="textarea" rows={3} placeholder="Add Slider" />
              </Form.Group>

              <Button variant="primary" type="submit">
              Slider Save
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
};

export default SliderPopup;