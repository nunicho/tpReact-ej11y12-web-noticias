import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

const Formulario = () => {
return (
    <div className="container border my-3">
    <Form>
       <Form.Group className="mb-3 d-flex py-3">
        <Form.Label>Buscar por categoría</Form.Label>
        <Form.Select>
           <option value="">Options</option>
            <option value="business<">business</option>
            <option value="entertainment">entertainment</option>
            <option value="environment">environment</option>
            <option value="food">food</option>
            <option value="health">health</option>
            <option value="politics">politics</option>
            <option value="science">science</option>
            <option value="sports">sports</option>
            <option value="technology">technology</option>
            <option value="top">top</option>
            <option value="world">world</option>
        </Form.Select>
      </Form.Group>
    </Form>
    </div>
  );
}