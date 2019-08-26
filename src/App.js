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


//TODO: get img to src
//Optimize
//difference betwen canvas and no canvas for react vis
//use inbuilt HTML parser: parseFromString(html, "text/html");

class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	stats:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],	
	    	itemList:[
				"Bandit Axe",
				"Battle Axe",
				"Bound Hand Axe",
				"Butcher's Knife",
				"Dragonslayer's Crescent Axe",
				"Gyrm Axe",
				"Hand Axe",
				"Infantry Axe",
				"Bell Keeper Bow",
				"Bow of Want",
				"Composite Bow",
				//"Dragonrider Bow",
				"Hunter's Blackbow",
				"Long Bow",
				"Sea Bow",
				"Short Bow",
				"Claws",
				"Malformed Claws",
				"Manikin Claws",
				"Work Hook",
				"Avelyn",
				"Heavy Crossbow",
				"Light Crossbow",
				"Sanctum Crossbow",
				"Sanctum Repeating Crossbow",
				"Shield Crossbow",
				"Arced Sword",
				"Curved Dragon Greatsword",
				"Curved Nil Greatsword",
				"Murakumo",
				"Eleum Loyce",
				"Falchion",
				"Manikin Sabre",
				"Melu Scimitar",
				"Monastery Scimitar",
				"Red Rust Scimitar",
				"Scimitar",
				"Shotel",
				"Spider Fang",
				"Warped Sword",
				"Bandit's Knife",
				"Black Flamestone Dagger",
				"Blue Dagger",
				"Broken Thief Sword",
				"Dagger",
				"Manikin Knife",
				"Mytha's Bent Blade",
				"Parrying Dagger",
				"Retainer's Short Sword",
				"Royal Dirk",
				"Shadow Dagger",
				"Thief Dagger",
				"Umbral Dagger",
				"Bone Fist",
				"Caestus",
				"Bandit Greataxe",
				"Black Dragon Greataxe",
				"Black Knight Greataxe",
				"Crescent Axe",
				"Drakekeeper's Greataxe",
				"Greataxe",
				"Giant Stone Axe",
				"Gyrm Greataxe",
				"Lion Greataxe",
				"Alonne Greatbow",
				"Dragonslayer Greatbow",
				"Possessed Armor Greatbow",
				"Twin-headed Greatbow",
				"Archdrake Staff",
				"Azal's Staff",
				"Bat Staff",
				"Black Witch's Staff",
				"Bone Staff",
				"Lizard Staff",
				"Olenford's Staff",
				"Sorcerer's Staff",
				"Retainer Staff",
				"Staff of Amana",
				"Staff of Wisdom",
				"Sunset Staff",
				"Transgressor's Staff",
				"Witchtree Branch",
				"Archdrake Mace",
				"Demon's Great Hammer",
				"Dragon Tooth",
				"Drakekeeper's Great Hammer",
				"Drakekeeper's Warpick",
				"Giant Warrior Club",
				"Great Club",
				"Gyrm Great Hammer",
				"Iron King Hammer",
				"Large Club",
				"Malformed Shell",
				"Malformed Skull",
				"Old Knight Hammer",
				"Pickaxe",
				"Sacred Chime Hammer",
				"Sanctum Mace",
				"Smelter Hammer",
				"Bastard Sword",
				"Black Dragon Greatsword",
				"Black Knight Greatsword",
				"Bluemoon Greatsword",
				"Charred Loyce Greatsword",
				"Claymore",
				"Defender Greatsword",
				"Drakeblood Greatsword",
				"Drangleic Sword",
				"Flamberge",
				"Key to the Embedded",
				"Loyce Greatsword",
				"Majestic Greatsword",
				"Mastodon Greatsword",
				"Mirrah Greatsword",
				"Moonlight Greatsword",
				"Old Knight Greatsword",
				"Old Mirrah Greatsword",
				"Royal Greatsword",
				"Ruler's Sword",
				"Thorned Greatsword",
				"Watcher Greatsword",
				"Black Knight Halberd",
				"Blue Knight's Halberd",
				"Dragonrider's Halberd",
				"Halberd",
				"Helix Halberd",
				"Lucerne",
				"Mastodon Halberd",
				"Old Knight Halberd",
				"Old Knight Pike",
				"Roaring Halberd",
				"Santier's Spear",
				"Scythe",
				"Syan's Halberd",
				"Wrathful Axe",
				"Aldia Hammer",
				"Barbed Club",
				"Blacksmith's Hammer",
				"Black Dragon Warpick",
				"Club",
				"Craftsman's Hammer",
				"Handmaid's Ladle",
				"Homunculus Mace",
				"Mace",
				"Mace of the Insolent",
				"Morning Star",
				"Reinforced Club",
				"Berserker Blade",
				"Bewitched Alonne Sword",
				"Blacksteel Katana",
				"Chaos Blade",
				"Darkdrift",
				"Manslayer",
				"Uchigatana",
				"Washing Pole",
				"Chariot Lance",
				"Heide Greatlance",
				"Heide Lance",
				"Grand Lance",
				"Rampart Golem Lance",
				"Archdrake Chime",
				"Caitha's Chime",
				"Chime of Screams",
				"Chime of Want",
				"Cleric's Sacred Chime",
				"Disc Chime",
				"Dragon Chime",
				"Idol's Chime",
				"Priest's Chime",
				"Protective Chime",
				"Witchtree Bellvine",
				"Bone Scythe",
				"Crescent Sickle",
				"Full Moon Sickle",
				"Great Machete",
				"Great Scythe",
				"Scythe of Nahr Alma",
				"Scythe of Want",
				"Silverblack Sickle",
				"Channeler's Trident",
				"Dragonslayer Spear",
				"Gargoyle Bident",
				"Heide Spear",
				"Partizan",
				"Pate's Spear",
				"Pike",
				"Pilgrim's Spontoon",
				"Silverblack Spear",
				"Spear",
				"Spitfire Spear",
				"Stone Soldier Spear",
				"Winged Spear",
				"Yorgh's Spear",
				"Ashen Warrior Sword",
				"Black Dragon Sword",
				"Blue Flame",
				"Broadsword",
				"Broken Straight Sword",
				"Drakekeeper's Sword",
				"Foot Soldier Sword",
				"Fume Sword",
				"Heide Knight Sword",
				"Ivory Straight Sword",
				"Longsword",
				"Possessed Armor Sword",
				"Puzzling Stone Sword",
				"Red Rust Sword",
				"Shortsword",
				"Sun Sword",
				"Varangian Sword",
				"Yellow Quartz Longsword",
				"Black Scorpion Stinger",
				"Chaos Rapier",
				"Espada Ropera",
				"Estoc",
				"Mail Breaker",
				"Rapier",
				"Ricard's Rapier",
				"Spider's Silk",
				"Ice Rapier",
				"Curved Twinblade",
				"Dragonrider Twinblade",
				"Red Iron Twinblade",
				"Sorcerer's Twinblade",
				"Stone Twinblade",
				"Twinblade",
				"Black Knight Ultra Greatsword",
				"Crypt Blacksword",
				"Drakekeeper's Ultra Greatsword",
				"Drakewing Ultra Greatsword",
				"Fume Ultra Greatsword",
				"Greatsword",
				"Ivory King Ultra Greatsword",
				"King's Ultra Greatsword",
				"Lost Sinner's Sword",
				"Old Knight Ultra Greatsword",
				"Pursuer's Ultra Greatsword",
				"Smelter Sword",
				"Zweihander",
				"Bloodied Whip",
				"Notched Whip",
				"Old Whip",
				"Spotted Whip",
				"Whip",
				"Pyromancy Flame",
				"Dark Pyromancy Flame"
	    	]
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
	      			var statsfromdoc = ParseHTML(html,itemName);
					this.setState({
						stats: statsfromdoc
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

export default App;

function ParseHTML(HTML_resp, itemName){
	var searchReg = "Regular"; 
	var searchReg10 = "<th>Regular +"; 
	var searchMag = "Magic";

	var IndexReg = HTML_resp.indexOf(searchReg);
	var IndexReg10 = HTML_resp.indexOf(searchReg10);
	var substr;

	IndexReg10 = HTML_resp.indexOf(searchReg10);

	if(IndexReg10 == -1){
		searchReg = itemName; 
		searchReg10 = itemName+" +"; 
	}

	IndexReg10 = HTML_resp.indexOf(searchReg10);
	substr = HTML_resp.substring(IndexReg10-1000,IndexReg10);	
	IndexReg = substr.indexOf(searchReg);
	substr = substr.substring(IndexReg);

	console.log(searchReg);
	console.log(searchReg10);
	console.log(IndexReg);
	console.log(IndexReg10);
	console.log(substr);

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


