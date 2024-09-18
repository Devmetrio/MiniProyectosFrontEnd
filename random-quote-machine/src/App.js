import './App.css';
import QuoteMachine from './components/QuoteMachine';
import React, { useState, useEffect } from 'react';
import random from 'lodash/random';
import { Grid } from '@mui/material';



const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
  }
}


function App() {
   // Estado inicial con useState
   const [quotes, setQuotes] = useState([]);
   const [selectedQuoteIndex, setSelectedQuoteIndex] = useState(null);
 
   // useEffect para hacer la petición al cargar el componente (similar a componentDidMount)
   useEffect(() => {
     fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
       .then(response => response.json())
       .then(data => {
         setQuotes(data); // Guardamos las citas en el estado
         setSelectedQuoteIndex(0); // Inicializamos con la primera cita
         console.log(data);
       });


   }, []); 

   function selectQuote(){
    if (!quotes.length || !Number.isInteger(selectedQuoteIndex)){
      return undefined;
    }
    return quotes[selectedQuoteIndex];
   }

   function generateNewQuoteIndex() {
    if (!quotes.length) {
      return undefined;
    }
    const nextIndex = random(0, quotes.length - 1);
    return setSelectedQuoteIndex(nextIndex);
  }

  const quote = selectQuote();

  return (
    <Grid id="quote-box" container sx={styles.container}>
      <Grid xs={11} lg={5} item>
        {
          quote ? 
          <QuoteMachine quote={quote} generateNewQuoteIndex={generateNewQuoteIndex} />
          : null
        }
      </Grid>
    </Grid>
  );
}

export default App;
