import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dark Souls Item Stats Viewer</h1>
        <button className="mybuton" onClick={function() { loadItem(); }}>
        	Hola
      	</button>
      </header>
    </div>
  );
}

export default App;

function loadItem() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
     console.log(this.responseText);
    }
  };
  xhttp.open("GET", "https://darksouls2.wiki.fextralife.com/Mastodon+Halberd", true);
  xhttp.send();
}
