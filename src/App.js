
import React, {Component} from 'react'
import Feature from './Feature' 
import Menu from './Menu'
import List from './List'

class App extends Component {

  render(){

    return (
          <div>
            <Menu />
            <Feature name="Curse of the Current Reviews" />
            < Feature description="When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews."/>
            

            <List  Article="Hello WatchKit" />

            <List  Detail="Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch."/>
           <List  comments="12 comment" likes="45 likes"/>

            
            <List  Article="Introduction to Swift" />
            <List  Detail="Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started."/>
            <List  comments="124 comment" likes="15 likes"/>



            </div>)
  }

}


export default App