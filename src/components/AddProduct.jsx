import React from 'react'
import {
  Button,
  Modal,
  ModalBody,
  Input,
  Select,
  RadioGroup,
  Radio,
} from '@chakra-ui/react'
const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;

  return (
    <>
      <Button my={4} data-cy="add-product-button">
        Add new Product
      </Button>
      <Modal>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" type="text" />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">pant</option>
            <option data-cy="add-product-category-pant">jeans</option>
            <option data-cy="add-product-category-jeans">Tshirt</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" type="number" />
          <Button data-cy="add-product-submit-button">Create</Button>
        </ModalBody>
      </Modal>
    </>
  )
}

export default AddProduct
