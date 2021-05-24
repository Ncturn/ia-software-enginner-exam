import { Container, Row, Col} from 'react-bootstrap';
import Order from './components/Order';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Order />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
