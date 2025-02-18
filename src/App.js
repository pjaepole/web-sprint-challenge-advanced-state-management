import React, { Component } from "react";
import {connect} from 'react-redux'
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { smurfsFetchStart,fetchSmurfs } from "./actions";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  componentDidMount(){
    // console.log('consolelog',this.props)
    
    this.props.fetchSmurfs();
    
  }
  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}
const mapStateToProps=state=>{
  return{
    smurfs:state.smurfs
  }
}
export default connect(mapStateToProps,{fetchSmurfs,smurfsFetchStart})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.