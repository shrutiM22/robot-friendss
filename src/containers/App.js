import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { robots } from './robots';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''   
        }
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        .then(users => this.setState({ robots: users}));
    }
    
    onsearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        
    }
    
    render(){
        const {robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        }) 
        //console.log(filteredRobots);
    //if(!robots.length)
        return !robots.length ?
             <h1>Loading</h1> :
        //else {
             //return
        (
        <div className='tc'>
        <h1 className='f2' >Robot Friends</h1>
        <SearchBox searchChange={this.onsearchChange} />
        <Scroll>
        <ErrorBoundary>
        <CardList robots={filteredRobots}/>
        </ErrorBoundary>
        </Scroll>
        </div>
       
    );
        
   
 }
}


export default App;