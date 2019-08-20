import React from 'react';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Dark Souls Item Stats Viewer</h1>				
			</header>
			<label className="input_label">Item Name:</label>
			<ItemInput></ItemInput>
		</div>
	);
}

function ItemInput(){
	return (
		<div className="item_input" class="container">				
			<div class="input-group">
				<span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span>
		      	<input id="item" type="text" class="form-control" placeholder="Mastodon Halberd"></input>	
		      	<span class="input-group-btn">
        			<button className="mybuton" onClick={function() { loadItem(); }} class="btn">Search</button>
   				</span>	      	   
		    </div>
		</div>
  );
}

export default App;

function loadItem() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			ParseHTML(this.responseText);
		}
	};
	var item = document.getElementById("item").value.replace(/ /g,"+");
	xhttp.open("GET", "https://darksouls2.wiki.fextralife.com/"+item, true);
	xhttp.send();
}

function ParseHTML(HTML_resp){

	var searchReg = /Regular/; 
	var searchMag = /Magic/;

	var IndexReg = HTML_resp.search(searchReg);
	var substr = HTML_resp.substring(IndexReg);
	

	var IndexMag = substr.search(searchMag);
	var substr = substr.substring(0,IndexMag);
	console.log(substr);
	//var subStr = HTML_resp.substring(IndexReg, IndexMag);
	console.log(IndexReg+" "+IndexMag);
}
