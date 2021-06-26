import HomePage from "./pages/HomePage";
import PopularPage from "./pages/PopularPage";
import FilmDetailsPage from "./pages/FilmDetailsPage";
import { Route, Switch } from "react-router";
import Navigation from "./components/Navigation";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (<div>
    <Container>
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
    </Container>
    <Switch>
      <Route path="/films/:id" component={FilmDetailsPage} />
      <Route path="/popular">
        <PopularPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </div>);
}

export default App;
