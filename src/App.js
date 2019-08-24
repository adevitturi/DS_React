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


//TODO: get img to src
//Optimize
//difference betwen canvas and no canvas for react vis


class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
		    physical: [
				{x: 'P', 	y: 0,	color: "#A9A9A9"},
				{x: 'M', 	y: 0,	color: "#26d9d9"},
				{x: 'F', 	y: 0,	color: "#d96e26"},
				{x: 'L', 	y: 0,	color: "#adad1f"},
				{x: 'D', 	y: 0,	color: "#1C1C1C"}
				],
			auxiliary: [
				{x: 'C', 	y: 0,	color: "#A9A9A9"},
				{x: 'Ps',	y: 0,	color: "#A9A9A9"},
				{x: 'Po', 	y: 0,	color: "#5e8217"},
				{x: 'Bl',	y: 0,	color: "#5e8217"}
				],	
			defense: [
				{x: 'P', 	y: 0,	color: "#A9A9A9"},
				{x: 'M', 	y: 0,	color: "#26d9d9"},
				{x: 'F', 	y: 0,	color: "#d96e26"},
				{x: 'L', 	y: 0,	color: "#adad1f"},
				{x: 'D', 	y: 0,	color: "#1C1C1C"}
				],		
	    };
	  }

	render(){
		
		return (
			<div className="App" class="container">
				
				<header className="App-header">			
					<img src="https://i.pinimg.com/originals/25/13/4c/25134c8fb258843e0f01336a12b4b520.png"
					alt="https://vignette.wikia.nocookie.net/deathbattlefanon/images/e/ef/The_Pursuer.png/revision/latest?cb=20170105041601"
					 className="Head-img"></img>

					<div className="Title-header">
						Dark Souls Weapon Stats Viewer
					</div>
				</header>
				<div class="panel panel-default" className="App-panel">
	    			<div class="panel-body">  			
						<label className="Input_label">Weapon Name:</label>
						<div className="item_input">				
							<div class="input-group">
								<span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span>
						      	<input id="item" type="text" class="form-control" placeholder="Mastodon Halberd"></input>	
						      	<span class="input-group-btn">
				        			<button className="mybuton" 
				        			onClick={() => this.setState({physical: generatePhyData(),
				        											auxiliary: generateAuxData(),
				        											defense: generatePhyData()
				        											})}
				        			class="btn">
				        			Search
				        			</button>
				   				</span>	      	   
						    </div>
						</div>
						<br/>	
						<div class="row">
						  <div class="col-sm-6">
						  	<DsChart 
							useCanvas= {false} 
							data={this.state.physical}
							barWidth = {0.2}
							title = {"Attack Stats"}
							/>
						  </div>
						  <div class="col-sm-6">
					  		<DsChart 
							useCanvas= {false} 
							data={this.state.auxiliary}
							barWidth = {0.18}
							title = {"Auxiliary Stats"}
							/>
						  </div>
						</div>
						<div class="row">
						  <div class="col-sm-6">
						  	<DsChart 
							useCanvas= {false} 
							data={this.state.defense}
							barWidth = {0.2}
							title = {"Defense Stats"}
							/>
						  </div>
						</div>

					</div>
					
				</div>
			</div>
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
				  //yDomain={[0, 200]}
				  margin={{top: 20}} 
				>	
				  	<HorizontalGridLines />
				  	<XAxis />
				  	<YAxis />

					<BarSeries
					//cluster="ATK"
					barWidth= {barwidth}
					colorType="literal"
					opacity = '0.9'
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
				{x: 'M', 	y: Math.floor(Math.random()*100),	color: "#26d9d9"},
				{x: 'F', 	y: Math.floor(Math.random()*100),	color: "#d96e26"},
				{x: 'L', 	y: Math.floor(Math.random()*100),	color: "#adad1f"},
				{x: 'D', 	y: Math.floor(Math.random()*100),	color: "#1C1C1C"}
				];

  	return data;
}

function generateAuxData() {

	var data = [
			  	{x: 'C', 	y: Math.floor(Math.random()*100),	color: "#A9A9A9"},
				{x: 'Ps',	y: Math.floor(Math.random()*100),	color: "#A9A9A9"},
				{x: 'Po', 	y: Math.floor(Math.random()*100),	color: "#5e8217"},
				{x: 'Bl',	y: Math.floor(Math.random()*100),	color: "#ad1f1f"}
				];

  	return data;
}

function ItemInput(){
	return (
		<div className="item_input">				
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
	var searchReg = "Regular"; 
	var searchReg10 = "Regular +10"; 
	var searchMag = "Magic";

	var IndexReg = HTML_resp.indexOf("Regular");
	var IndexReg10 = HTML_resp.indexOf("Regular +10")
	var substr = HTML_resp.substring(IndexReg,IndexReg10);	

	var stat = [];
	var scaling = [];
	var FirstIndex,LastIndex;
	var Aux;

	var i;

	var substr = substr.replace("</th>", "XXXXX"); 
	var pepe = substr;

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

	console.log(pepe);
	console.log(stat);
	console.log(scaling);
	//var subStr = HTML_resp.substring(IndexReg, IndexMag);
	console.log(IndexReg+" "+IndexReg10);
}


