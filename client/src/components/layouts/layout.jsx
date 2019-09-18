import React , {Component} from 'react'
import Footer from './footer';
import Header from './header';

export default class layout extends Component{
  constructor(props){
      super(props);
  }
    render(){
        return(
            <div> 
                <Header/>
                  {this.props.children}
                <Footer/>
            </div>
        )
    }
}