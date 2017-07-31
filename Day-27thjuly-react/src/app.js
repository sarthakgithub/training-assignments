import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
class MyButton extends React.Component{

   constructor(props){
   
      super(props);
      this.mytext = this.props.myText;
      this.clickbutton = this.clickbutton.bind(this);
   }
   clickbutton(){
      this.mytext = "change";
      console.log('btn clicked');
   
   }



   componentWillMount(){
       console.log('will mount');
   }
   componentDidMount(){
       console.log('did mount');
   }
   componentWillReceiveProps(newProps){
       console.log('component will receive prop');
   }
   // used for read-only
   shouldComponentUpdate(newProps,newState){
       return true;
   }

   componentWillUpdate(newProps, nextState){
       console.log('will update called');
   }
   componentDidUpdate(prevProps,prevState){
       console.log('Did update called');
   }

   render(){

       return (
           <div>
               <input type="button" value={this.props.mybtnvalue} />
               <input type="button" value={this.props.mybtnvalue} onClick={this.props.clicking}/>
           </div>
       )
   }
}

class Base extends React.Component{
   constructor(props){

       super(props);
       this.mytext = this.props.myText;
       this.state = {
           mytext : "calling from state"
       }
       this.clickbutton = this.clickbutton.bind(this);
       this.handlechange = this.handlechange.bind(this);
   }
   clickbutton(){
       this.mytext = "change";
       console.log('btn clicked from base');

   }


   handlechange(e){
       this.setState({
           mytext : e.target.value
       })

   }
   render(){

       return (
               <div>
           <MyButton mybtnvalue={this.props.btnvalue} clicking={this.clickbutton} />
           <input type="text" value={this.state.mytext} onChange={this.handlechange}/>
           </div>
       )
   }
}

Base.defaultProps = {
   btnvalue : "this is button"
}


Base.PropTypes  ={

}
export default Base;

class Data extends React.Component {
   render() {

       return (
           <div>
               <h3> Array : {this.props.propArray}</h3>
               <h3>Bool : {this.props.propBool ? "true.." : "false..."}</h3>
               <h3>Func : {this.props.propFunc(3)}</h3>
               <h3>Number : {this.props.propNumber}</h3>
               <h3>String : {this.props.propString}</h3>
               <h3>Object : {this.props.propObject.objectName1}</h3>
               <h3>Object : {this.props.propObject.objectName2}</h3>
               <h3>Object : {this.props.propObject.objectName3}</h3>
           </div>
       )
   }



}
Data.propTypes={

   propArray: PropTypes.array.isRequired,
   propBool: PropTypes.bool.isRequired,
   propFunc:PropTypes.func,
   propNumber:PropTypes.number,
   propString:PropTypes.string,
   probObject:PropTypes.object
}

Data.defaultProps={
   propArray : "",
   propBool : true,
   propFunc : function(a){return a;},
   propObject : ""
}

export {Data};

const ListItem = (props) => <li className="list-item">{props.item}</li>;

const List = ({items}) =>{

   return (<ul className="list">
       {items.map(item => <ListItem key={item.toString()} item={item} />)}
   </ul>)
};

const Body = (props) => {
   let items = props.rawItems;
   return(
       <div>
           <h1>{props.header}</h1>
           <List items={items} />
       </div>
   );
};

function Page(props,context){
   return(
       <div>
           <Body header="My List" rawItems={props.rawItems} />
       </div>
   )
}

Page.propTypes = {
   rawItems : React.PropTypes.array.isRequired
}

Page.defaultProps = {
   rawItems : [1,2,3,4,5]
}

export default Page;

const Topics = ({match}) => (
       <div>
           <h2>Topics</h2>
           <ul>
               <li>
                   <Link to={`${match.url}/rendering`}>Rendering wit react</Link>
               </li>
               <li>
                   <Link to={`${match.url}/components`}>components</Link>
               </li>
           </ul>

           <Route exact path={`${match.url}/:query`} component={Topic}></Route>
           <Route exact path={match.url} render={() => (
           <h3>please select</h3>
       )}/>
       </div>
)

const Topic = ({match}) => (
   <div>
       <h3>{match.params.query}</h3>
   </div>
)

export {Topics};

class Myref extends React.Component{
    constructor(props){
        super(props);
        this.updateState1 = this.updateState1.bind(this);
        this.updateState2 = this.updateState2.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.state = {
            data1: '',
            data2 : ''
        }
    }

    updateState1(e){
        this.setState({data1 : e.target.value})
    }
    updateState2(e){
        this.setState({data2 : e.target.value})
    }
    clearInput(){
        this.setState({data1 : '',data2 : ''})
        ReactDOM.findDOMNode(this.refs.name1).focus();
        //ReactDOM.findDOMNode(this.refs.name2).focus();
    }

    render(){
        return(
            <div>
                <input value={this.state.data1} onChange={this.updateState1} ref="name1"></input>
                <button onClick={this.clearInput}> CLEAR 1 </button>
                <input value={this.state.data2} onChange={this.updateState2} ref="name2"></input>
                <button onClick={this.clearInput}> CLEAR 2 </button>
                <h4>{this.state.data1}</h4>
                <h4>{this.state.data2}</h4>
            </div>
        )
    }
}

export default Myref;