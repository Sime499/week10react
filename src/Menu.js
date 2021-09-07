import React,{Component} from 'react';
import './Header.css'
import './Feature.css'

class Menu extends Component {

    render(){

        return(
            <header className="card">
        <h1>HighOnCodig </h1>
               <button className="Btn"> Home</button> 
               <button className="Btn">Categories
               </button> 
               </header>)
    }
}

export default Menu