import React from 'react';
import { Nav } from 'react-bootstrap';

const Navbar = ({ getOrders, filter }) => {
  return(
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link active={filter === 'Pendiente'} onClick={() => {getOrders('Pendiente')}}>Pendientes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link active={filter === 'En progreso'} onClick={() => {getOrders('En progreso')}}> En progreso</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link active={filter === 'Completada'} onClick={() => {getOrders('Completada')}}>Completada</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link active={filter === 'Entregada'} onClick={() => {getOrders('Entregada')}}>Entregada</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link active={filter === 'Cancelada'} onClick={() => {getOrders('Cancelada')}}>Cancelada</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Navbar;