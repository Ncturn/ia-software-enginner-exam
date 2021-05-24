import React from 'react';
import { Nav } from 'react-bootstrap';

const Navbar = ({ getOrders }) => {
  return(
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link onClick={() => {getOrders('Pendiente')}}>Pendientes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => {getOrders('En progreso')}}> En progreso</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => {getOrders('Completada')}}>Completada</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => {getOrders('Entregada')}}>Entregada</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => {getOrders('Cancelada')}}>Cancelada</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Navbar;