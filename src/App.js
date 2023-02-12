
import './App.css';
import Button from '@mui/material/Button';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box" style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px', width: 650, borderRadius: 8, padding: 20}}>
          <h2 style={{color: '#555', padding: 20}}>Random Quote Generator</h2>
          <p style={{color: '#777', paddingRight: 20, paddingLeft: 20}}><FormatQuoteIcon sx={{ fontSize: 40, color: '#999' }}  />
          You may be disappointed if you fail, but you are doomed if you don't try.</p>
          <p style={{textAlign: 'right', color: '#777', paddingRight: 25}}>- Beverly Sills</p>
          <Button variant="contained" size="large" style={{ marginBottom: 25}}>
            New Quote
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
