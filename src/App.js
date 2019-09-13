import React from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  DiscreteColorLegend,
  FlexibleXYPlot,
  FlexibleWidthXYPlot,
  FlexibleHeightXYPlot,
  LabelSeries
} from 'react-vis';
import Autocomplete from "./Autocomplete";
import weapons from "./Weaponlist";

//TODO: get img to src
//Optimize
//difference betwen canvas and no canvas for react vis
//use inbuilt HTML parser: parseFromString(html, "text/html");

class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	stats:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	    	itemName: "",	
	    	itemList: weapons,
	    	itemDescr: ""
	    };
	}

	render(){
		console.log(this.state);
		var physical = [
				{x: 'P', 	y: this.state.stats[0],	color: "#A9A9A9"},
				{x: 'M', 	y: this.state.stats[1],	color: "#40bfbf"},
				{x: 'F', 	y: this.state.stats[2],	color: "#bf7340"},
				{x: 'L', 	y: this.state.stats[3],	color: "#adad1f"},
				{x: 'D', 	y: this.state.stats[4],	color: "#1C1C1C"}
				];
		var auxiliary = [
				{x: 'C', 	y: this.state.stats[5],	color: "#A9A9A9"},
				{x: 'Ps',	y: this.state.stats[6],	color: "#A9A9A9"},
				{x: 'Po', 	y: this.state.stats[7],	color: "#7fcc66"},
				{x: 'Bl',	y: this.state.stats[8],	color: "#bf4040"}
				];

		var defense = [
				{x: 'P', 	y: this.state.stats[9],	color: "#A9A9A9"},
				{x: 'M', 	y: this.state.stats[10],color: "#40bfbf"},
				{x: 'F', 	y: this.state.stats[11],color: "#bf7340"},
				{x: 'L', 	y: this.state.stats[12],color: "#adad1f"},
				{x: 'D', 	y: this.state.stats[13],color: "#1C1C1C"}
				];
		
		return (
			<div className="App" class="container">
				
				<MyHeader/>
				<div class="panel panel-default" className="App-panel">
	    			<div class="panel-body">  			
						<label className="Input_label">Weapon Name:</label>
						<div className="item_input">				
								<Autocomplete
						        suggestions={this.state.itemList}
						        //onChange={this.onItemNameChange}
						        onClick={(itemName) => this.handleClick(itemName)}
						      />						      	
						</div>
						<div class="row">
						  <div class="col-sm-6">
						  	<DsChart 
							useCanvas= {false} 
							data={physical}
							barWidth = {0.2}
							title = {"Attack Stats"}
							/>
						  </div>
						  <div class="col-sm-6">
					  		<DsChart 
							useCanvas= {false} 
							data={auxiliary}
							barWidth = {0.18}
							title = {"Auxiliary Stats"}
							/>
						  </div>
						</div>
						<div class="row">
						  <div class="col-sm-6">
						  	<DsChart 
							useCanvas= {false} 
							data={defense}
							barWidth = {0.2}
							title = {"Defense Stats"}
							/>
						  </div>
						  <div class="col-sm-6">
						  	<div className="WeaponDescription">
						  		<h1>{this.state.itemName}</h1>
							  	<h2>{this.state.itemDescr}</h2>
						  	</div>						  	
						  </div>
						</div>
						<div className="NotesDiv">
							<p className="Notes">All the game data was gathered from https://darksouls2.wiki.fextralife.com</p>
						</div>
					</div>	
				</div>
			</div>
		);
	}	

	handleClick(itemName){
		fetch("https://darksouls2.wiki.fextralife.com/"+itemName)
	      	.then( (response) => response.text())
	      	.then( 
	      		(html) => {
	      			// Initialize the DOM parser
			        //var parser = new DOMParser();
			        // Parse the text
			        //var doc = parser.parseFromString(html, "text/html");
			        // You can now even select part of that html as you would in the regular DOM 
			        // Example:
			        // var docArticle = doc.querySelector('article').innerHTML;
	      			var statsFromDoc = ParseHTMLforStats(html,itemName);
	      			var descrFromDoc = ParseHTMLforDescr(html);

	      			// Initialize the DOM parser
			        var parser = new DOMParser();
			        // Parse the text
			        var doc = parser.parseFromString(descrFromDoc, "text/html");
			        // You can now even select part of that html as you would in the regular DOM 
			        // Example:
			         var docArticle = doc.querySelector('p').innerHTML;

					this.setState({
						itemName: itemName,
						stats: statsFromDoc,
						itemDescr: docArticle
					});
		        },
		        (error) => {
		          this.setState({
		            error
		          });
		        }
		      )
	}
}

class MyHeader extends React.Component {

render(){
	return(
		<header className="App-header">			
			<img src="https://i.pinimg.com/originals/25/13/4c/25134c8fb258843e0f01336a12b4b520.png"
			alt="https://vignette.wikia.nocookie.net/deathbattlefanon/images/e/ef/The_Pursuer.png/revision/latest?cb=20170105041601"
			 className="Head-img"></img>

			<div className="Title-header">
				Dark Souls Weapon Stats Viewer
			</div>
		</header>
	);
}

}

class DsChart extends React.Component {

	render() {
		const useCanvas = this.props.useCanvas;
		const data = this.props.data;
		const barwidth = this.props.barWidth;
		const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;

		return (
			<div>	
				<div className="chartTitle">
					<h3>{this.props.title}</h3>
				</div>
				<FlexibleWidthXYPlot
				  className="clustered-stacked-bar-chart"
				  xType="ordinal"
				  //stackBy="y"
				  height={300}
				  //width={500}
				  //yDomain={[0, 50]}
				  margin={{top: 20}} 
				>	
				  	<HorizontalGridLines />
				  	<XAxis />
				  	<YAxis />

					<BarSeries
					//cluster="ATK"
					barWidth= {barwidth}
					colorType="literal"
					opacity = '0.8'
					data={data}
					animation = "noWobble"
					style={{stroke: '#FFFFFF'}}					
					/>

					<LabelSeries
					className="mylabels"
                    data={data.map(obj => {
                        return { ...obj, label: obj.y.toString() }
                    })}
                    labelAnchorX="middle"
                    labelAnchorY="text-after-edge"
                    animation = "noWobble"
                	/>
				</FlexibleWidthXYPlot>
			</div>
		);
  	}
}

function generatePhyData() {

	var data = [
				{x: 'P', 	y: Math.floor(Math.random()*100),	color: "#A9A9A9"},
				{x: 'M', 	y: Math.floor(Math.random()*100),	color: "#40bfbf"},
				{x: 'F', 	y: Math.floor(Math.random()*100),	color: "#bf7340"},
				{x: 'L', 	y: Math.floor(Math.random()*100),	color: "#adad1f"},
				{x: 'D', 	y: Math.floor(Math.random()*100),	color: "#1C1C1C"}
				];

  	return data;
}

function generateAuxData() {

	var data = [
			  	{x: 'C', 	y: Math.floor(Math.random()*100),	color: "#A9A9A9"},
				{x: 'Ps',	y: Math.floor(Math.random()*100),	color: "#A9A9A9"},
				{x: 'Po', 	y: Math.floor(Math.random()*100),	color: "#7fcc66"},
				{x: 'Bl',	y: Math.floor(Math.random()*100),	color: "#bf4040"}
				];

  	return data;
}

function generatestats(){
	var data = [1,1,1,1,1,1,1,1,1,1,1,1,1,1];

  	return data;
}

function ItemInput(){
	return (
		<div className="item_input">				
			<div class="input-group">
				<span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span>
		      	<input id="item" type="text" class="form-control" placeholder="Mastodon Halberd" onChange={this.onItemNameChange}></input>	
		      	<span class="input-group-btn">
        			<button className="mybuton" class="btn">Search</button>
   				</span>	      	   
		    </div>
		</div>
  );
}

function DsImages(){
	return (
		<div class="container">	
			<img src="https://i.pinimg.com/originals/25/13/4c/25134c8fb258843e0f01336a12b4b520.png" height="200"></img>
			<img src="https://www.pngkey.com/png/full/63-634566_dark-souls-remastered-png-hd-dark-souls-2.png" height="200"></img>
			<img src="http://pluspng.com/img-png/dark-souls-png-png-file-name-dark-souls-1465.png" height="200"></img>
			<img src="https://vignette.wikia.nocookie.net/deathbattlefanon/images/e/ef/The_Pursuer.png/revision/latest?cb=20170105041601" height="200"></img>		
		</div>
  );
}

function ParseHTMLforStats(HTML_resp, itemName){
	var searchReg = "Regular"; 
	var searchReg10 = "<th>Regular +"; 

	var IndexReg = HTML_resp.indexOf(searchReg);
	var IndexReg10 = HTML_resp.indexOf(searchReg10);
	var substr;

	if(IndexReg10 == -1){
		searchReg = itemName; 
		searchReg10 = itemName+" +"; 
	}

	IndexReg10 = HTML_resp.indexOf(searchReg10);
	substr = HTML_resp.substring(IndexReg10-1000,IndexReg10);	
	IndexReg = substr.indexOf(searchReg);
	substr = substr.substring(IndexReg);

	//console.log(searchReg);
	//console.log(searchReg10);
	//console.log(IndexReg);
	//console.log(IndexReg10);
	//console.log(substr);

	var stat = [];
	var scaling = [];
	var FirstIndex,LastIndex;
	var Aux;

	var i;

	substr = substr.replace("</th>", "XXXXX"); 

	for (i = 0; i < 5; i++) { 
		FirstIndex = substr.indexOf('>') + 1;
		LastIndex = substr.indexOf('</td>');

		while(LastIndex - FirstIndex > 18)
		{
			substr = substr.substring(FirstIndex);			
			FirstIndex = substr.indexOf('>') + 1;
			LastIndex = substr.indexOf('</');
		}

		Aux = substr.substring(FirstIndex,LastIndex);
		if(Aux == "-")
			stat.push(0);
		else
			stat.push(parseInt(Aux));
		LastIndex = substr.indexOf('</td>');
		substr = substr.substring(LastIndex+5);
	}

	FirstIndex = substr.indexOf('>') + 1;
	LastIndex = substr.indexOf('<br>');
	i = 4;
	if(LastIndex == -1)
	{		
		LastIndex = substr.indexOf('/');
		i = 1;
	}

	Aux = substr.substring(FirstIndex,LastIndex);
	if(Aux == "-")
			stat.push(0);
	else
		stat.push(parseInt(Aux));

	FirstIndex = LastIndex + i;
	LastIndex = substr.indexOf('</td>');

	Aux = substr.substring(FirstIndex,LastIndex);
	if(Aux == "-")
			stat.push(0);
	else
		stat.push(parseInt(Aux));
	substr = substr.substring(LastIndex+5);

	for (i = 0; i < 6; i++) { 
		FirstIndex = substr.indexOf('>') + 1;
		LastIndex = substr.indexOf('</td>');

		while(LastIndex - FirstIndex > 18)
		{
			substr = substr.substring(FirstIndex);			
			FirstIndex = substr.indexOf('>') + 1;
			LastIndex = substr.indexOf('</');
		}

		Aux = substr.substring(FirstIndex,LastIndex);
		scaling.push(Aux);
		LastIndex = substr.indexOf('</td>');
		substr = substr.substring(LastIndex+5);
	}

	for (i = 0; i < 7; i++) { 
		FirstIndex = substr.indexOf('>') + 1;
		LastIndex = substr.indexOf('</td>');

		while(LastIndex - FirstIndex > 18)
		{
			substr = substr.substring(FirstIndex);			
			FirstIndex = substr.indexOf('>') + 1;
			LastIndex = substr.indexOf('</');
		}

		Aux = substr.substring(FirstIndex,LastIndex);
		if(Aux == "-")
			stat.push(0);
		else
			stat.push(parseInt(Aux));
		LastIndex = substr.indexOf('</td>');
		substr = substr.substring(LastIndex+5);
	}

	return stat;
}

function ParseHTMLforDescr(HTML_resp){
	var searchStartQuote = "<blockquote>";
	var searchEndQuote = "</blockquote>";

	var IndexStartQuote = HTML_resp.indexOf(searchStartQuote);
	var IndexEndQuote = HTML_resp.indexOf(searchEndQuote);

	var substr = HTML_resp.substring(IndexStartQuote,IndexEndQuote);	

	IndexStartQuote = substr.indexOf("<p>");

	var description = substr.substring(IndexStartQuote);	

	console.log(description);
	return description;
}


export default App;