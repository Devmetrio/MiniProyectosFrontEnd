import React from 'react';
import { Typography, Card, CardActions, Button, CardContent, IconButton } from '@mui/material'; // Unificar importaciones a @mui/material
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const QuoteMachine = (props) => {
    return (
        <Card sx={{
            boxShadow: 20, // Puedes ajustar el nivel de sombra entre 0 y 24
            borderRadius: 5, // Puedes ajustar el radio de bordes si lo deseas
            width: '100%',
        }}>
            <CardContent>
                <blockquote id="text">
                    <Typography variant="h6" component="p">
                        {props.quote.quote}
                    </Typography>
                    <Typography variant="subtitle1" component="footer" id="author">
                        — {props.quote.author}
                    </Typography>
                </blockquote>
            </CardContent>
            <CardActions sx={{justifyContent: 'center',}} >
                <Button size="small" id="new-quote" onClick={props.generateNewQuoteIndex}>
                    Next Quote
                </Button>
                <IconButton id="tweet-quote"
                    target="_blank"
                    href={encodeURI(`https://twitter.com/intent/tweet?text=${props.quote.quote}&hashtags=thewebdevcoach`)}>
                    <FontAwesomeIcon icon={faTwitter} size='md'></FontAwesomeIcon>
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default QuoteMachine;
