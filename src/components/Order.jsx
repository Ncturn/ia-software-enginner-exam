import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const Order = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const response = await fetch('http://localhost:5000/order');
      const data = await response.json();
      setOrders(data.body);
    }
    getOrders();
  })
  const nextStatus = (status) => {
    let nextStatus = '';
    switch (status) {
      case 'Pendiente':
        nextStatus =  'En progreso';
        break;
      case 'En progreso':
        nextStatus =  'Completo';
        break;
      case 'Completo':
        nextStatus =  'Entregado';
        break;

      default:
        nextStatus = 'Cancelada'
        break;
    }
    return nextStatus;
  }
  return (
    <div>
      {
        orders.map((order) => {
          return (
            <Card  border="primary" style={{ width: '18rem' }} key={order.id}>
              <Card.Body>
                <Card.Title>Orden numero {order.id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Estado {order.status}</Card.Subtitle>
                <Card.Text>
                  {
                    order.products.map((product) => <p>{product.name} - {product.number}</p>)
                  }
                </Card.Text>
                <Card.Link href="#">Mover a {nextStatus(order.status)}</Card.Link>
                <Card.Link href="#">Cancelar</Card.Link>
              </Card.Body>
            </Card>
          )
        })
      }
    </div>
  )
}

export default Order;