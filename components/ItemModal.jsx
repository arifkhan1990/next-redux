import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from 'reactstrap';
import { useDispatch } from 'react-redux';

const ItemModal = () => {
  const isAuthenticated = true;
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');

  const handleToggle = () => setModal(!modal);

  const handleChangeName = (e) => setName(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name,
    };

    // Add item via addItem action
    addItem(newItem);
    // Close modal
    handleToggle();
  };

  return (
    <div>
      {isAuthenticated ? (
        <Button
          color='dark'
          style={{ marginBottom: '2rem' }}
          onClick={handleToggle}
        >
          Add Item
        </Button>
      ) : (
        <h4 className='mb-3 ml-4'>Please log in to manage items</h4>
      )}

      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Add To Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleOnSubmit}>
            <Row>
              <Col md={6}>
                <Label for='item_name'>Item Name</Label>
                <Input
                  type='text'
                  name='name'
                  id='item'
                  placeholder='Add shopping item'
                  onChange={handleChangeName}
                />
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for='category'>Category</Label>
                  <Input
                    type='text'
                    name='category'
                    id='category'
                    placeholder='Add shopping item category'
                    onChange={handleChangeName}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Label for='price'>Price</Label>
                <Input
                  type='number'
                  name='price'
                  id='price'
                  defaultValue={0}
                  onChange={handleChangeName}
                />
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for='item_image'>Image</Label>
                  <Input
                    type='file'
                    name='item_image'
                    id='item_image'
                    placeholder='Add shopping item Image'
                    onChange={handleChangeName}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Button color='dark' style={{ marginTop: '2rem' }} block>
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ItemModal;
