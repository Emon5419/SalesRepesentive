import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PhoneSignUp from "./Pages/PhoneSignUp";
import ProtectedRoute from "./Pages/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import background from '../src/Pages/images/Bg-Image.jpg';

function App() {
  return (
    <body style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: '1366px 768px' }}>
      <Container className='App' style={{ width: "400px" }}>
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>
                <Route
                  path="/home"
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  }
                />
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/phonesignup" element={<PhoneSignUp />} />
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </body>
  );
}

export default App;