import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Navbar from './Navbar';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const nextStatus = (status) => {
    let nextStatus = '';
    switch (status) {
      case 'Pendiente':
        nextStatus =  'En progreso';
        break;
      case 'En progreso':
        nextStatus =  'Completada';
        break;
      case 'Completada':
        nextStatus =  'Entregada';
        break;

      default:
        nextStatus = 'Cancelada'
        break;
    }
    return nextStatus;
  }
  const getOrders = async (status) => {
    console.log(status)
    let filter = ''
    if (status) {
      filter= `?status=${status}`
    }
    const response = await fetch(`http://localhost:5000/order${filter}`);
    const data = await response.json();
    setOrders(data.body);
  }
  useEffect(() => {
    getOrders();
  }, [])
  return (
    <div>
      <Navbar getOrders={getOrders}/>
      {
        orders.map((order) => {
          return (
            <Card  border="primary" style={{ width: '18rem' }} key={order.id}>
              <Card.Body>
                <Card.Title>Orden numero {order.id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Estado {order.status}</Card.Subtitle>
                  {
                    order.products.map((product) => <Card.Text key={product.sku}>{product.name} - {product.number}</Card.Text>)
                  }
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