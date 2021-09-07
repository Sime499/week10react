import React, {Component} from 'react';
import './List.css'
import './Feature.css'


class Feature extends Component{
    render(){
        return (<div className="Card">
        
            <h2>{this.props.name}</h2>
            <p> {this.props.description}</p>
            </div>)
    }
}

export default Feature