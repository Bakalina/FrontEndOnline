import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default class FilmDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        };
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=b3eddc3e1c353736590c8f4251c8afca`)
            .then(res => res.json())
            .then(response => this.setState({
                movie: response
            }));
    }

    render() {
        const { poster_path, title, overview, runtime, vote_average } = this.state.movie;
        return (
            <Container>
                <Row>
                    <Col sm={4}>
                        <img style={{maxWidth: '100%'}} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`} />
                    </Col>
                    <Col sm={8}>
                        <h2>{title}</h2>
                        <p>{overview}</p>
                        <b>Runtime: </b> {runtime}min <br />
                        <b>Vote average: </b> {vote_average}
                    </Col>
                </Row>
            </Container>
        )
    }
}
