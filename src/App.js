
import './App.css';
import Button from '@mui/material/Button';
import TwitterIcon from '@mui/icons-material/Twitter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box" style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px', width: 650, borderRadius: 8, padding: 20}}>
          <h2 style={{color: '#444', padding: 20, fontWeight: 300}}>Random Quote Generator</h2>
          <p id="text" style={{color: '#777', paddingRight: 20, paddingLeft: 20}}><img src={require('./quotes.png')} alt='tumblr' style={{height: 35, padding: 8, opacity: 0.4}}/>
          You may be disappointed if you fail, but you are doomed if you don't try.</p>
          <p id="author" style={{textAlign: 'right', color: '#777', paddingRight: 25, paddingBottom: 15}}>- Beverly Sills</p>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingRight: 20, paddingLeft: 20}}>
          <div style={{display: 'flex',justifyContent: 'flex-start'}}>
          <a id="tweet-quote" target="_blank" rel="noreferrer" href='https://twitter.com/intent/tweet'><TwitterIcon sx={{ fontSize: 40, color: '#000', opacity: 0.4 }}  /></a>
          <img src={require('./tumblr.png')} alt='tumblr' style={{height: 40, opacity: 0.4}}/>
          </div>
          <Button id="new-quote" variant="contained" size="large" style={{ marginBottom: 25}}>
            New Quote
          </Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
