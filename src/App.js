import { Container, Row, Col} from 'react-bootstrap';
import Order from './components/Order';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Navbar />
        </Col>
      </Row>
      <Row>
        <Col>
          <Order />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
