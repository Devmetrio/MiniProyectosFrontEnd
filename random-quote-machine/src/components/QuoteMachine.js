import React from 'react';
import { Typography, Card, CardActions, Button, CardContent } from '@material-ui/core'; // Importa correctamente los componentes de Material-UI

const QuoteMachine = (props) => {
    return (
        <Card>
            <CardContent>
                {props.quote ? (
                    <blockquote id="text">
                        <Typography variant="h6" component="p">
                            {props.quote.quote}
                        </Typography>
                        <Typography variant="subtitle1" component="footer" id="author">
                            — {props.quote.author}
                        </Typography>
                    </blockquote>
                ) : (
                    <p>Loading...</p>
                )}
            </CardContent>
            <CardActions>
                <Button size="small" id="new-quote" onClick={props.generateNewQuoteIndex}>
                    Next Quote
                </Button>
            </CardActions>
        </Card>
    );
};

export default QuoteMachine;
