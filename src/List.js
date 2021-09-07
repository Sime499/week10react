import React,{Component} from 'react';
import './Feature.css'


class List extends Component{
 
  render(){

      return(
        <div className="ArticleBox">
        
            <h2>{this.props.Article}</h2>
            <p> {this.props.Detail}</p>
            <span className class="CommentBox"> {this.props.comments} {this.props.likes} </span>

            </div>)
 }

}

export default List