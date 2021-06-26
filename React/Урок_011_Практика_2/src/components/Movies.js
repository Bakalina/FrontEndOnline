import React from 'react'
import { Card, CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export const Movies = ({ data }) => {
    const moviesList = data.map(movie => (
        <Card key={movie.id}>
            <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} />
            <Card.Body>
                <Card.Title><Link to={`/films/${movie.id}`}>{movie.title}</Link></Card.Title>
                <Card.Text>{movie.release_date}<br /><Rating rate={movie.vote_average * 10} /></Card.Text>
            </Card.Body>
        </Card>
    ));

    return (
        <CardColumns>{moviesList}</CardColumns>
    )
}
