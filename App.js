//React enforces functional programming and wants every function to be a pure function....
import React from 'react';
import {View,Text,ScrollView,StyleSheet} from'react-native';
import Input from './Input';
import {Button} from './Button';
import {Todo,Todolist} from './Todo';
import {TabBar,TabBarItem} from './TabBar';

let todoIndex=0;

class App extends React.Component{
   constructor(){
	        super();
	        this.state={
		todos:[],
		inputValue:'',
		type:'All'
	}
        this.setType=this.setType.bind(this);
	this.toggleComplete=this.toggleComplete.bind(this);
	this.deleteTodo=this.deleteTodo.bind(this);
	this.submitTodo=this.submitTodo.bind(this);   //Kind of necessary,allows function to

	                                              //be passed as props to other components 
	                                              
	                                              //and importantly the 'this' referenced
	                                              //inside submitTodo always refers to the 
	                                              //class/function inside the constructor
	                                              //instead of "undefined"
   }

   setType(type){
	   this.setState({type});
   }

   toggleComplete(todoIndex){
	   let{todos}=this.state;
	   todos.forEach((todo)=>{
		   if(todo.todoIndex===todoIndex){
			   todo.complete=!todo.complete;   //Toggles complete value to true
			                                   //for the specified Todo
		   }
	   });
	   this.setState({todos});
   }

   deleteTodo(todoIndex){
	   let {todos}=this.state;
	   todos=todos.filter((todo)=>todo.todoIndex !== todoIndex); 
	                                              //returns the Todo whose specified todo
	                                              //doesnt match the given todoIndex,
	                                              //thereby deleting the specified todo 
	   this.setState({todos})
	   }
	
  inputChange(new_text){
		this.setState({inputValue:new_text},()=>{
		console.log(this.state.inputValue);
		console.log("new_text: "+new_text);	
		});
  }

  submitTodo(){
	       console.log("Inside submitTodo");
               if(this.state.inputValue.match(/^\s*$/)){     //Checks for blank space,
		                                          //^ indicates at beginning, $ at end
		                                          //it matches such that the character 
		                                          // \s remains from first to last 0 or
		                                          //more times... \s is whitespace 
		       return;
	       }
	       const todo={
		       title:this.state.inputValue,
		       todoIndex,                     //Takes the value of todoIndex defined at 
		                                     //beginning
		       complete:false
	       }
	      todoIndex++; 
	       const todos=[...this.state.todos,todo];
	       this.setState({todos,inputValue:''},()=>{
		       console.log('State is '+ todo.todoIndex +' '+JSON.stringify(this.state.todos));
	       });
  }
  
	render(){
		let {inputValue,todos}=this.state;
	   return(
		  <View>
		  <ScrollView>
	           <Heading/>
	           <Input
		    inputVal={inputValue}
		    inputChange={(text)=>this.inputChange(text)}/><Text>{/*Another way to pass
		                                                      function as props
		                                                     instead of using 'bind'*/}</Text>  
		   <Todolist 
                   toggleComplete={this.toggleComplete}
		   deleteTodo={this.deleteTodo}
		   todos={todos}/>
		  
		   <Button
		   submitTodo={this.submitTodo}/>
		 </ScrollView>
		 </View>
	   );
	}
}

const Heading=()=>(
	<Text style={styles.text_}>{"Todo"}</Text>
)

const styles=StyleSheet.create({
      text_:{
	      color:'#aab096',
	      shadowColor:'orange',
	      fontSize:87,
	      textAlign:'center',
	      opacity:.54
      }
})
	      
export default App;

//Program creating Todo font and accepting i/p by importing input from file Input
/*
const Heading=()=>(
	<View style={style.heading}>
	<Text style={style.headingtext}>{"Todo"}</Text>
	<Input/>
	</View>
);

const style=StyleSheet.create({
	headingtext:{
		color:'rgba(20,145,10,0.15)',
		fontWeight:100,
		fontSize:90
	},
	heading:{
		textAlign:"center"
	}
})

export default Heading;
*/

//Imparting ScrollView to the App,
//The text must be arger than the screen size....
/*
 class todo_App extends React.Component{
	 render(){
		 return(
			 <View style={styles.container}>
			 <ScrollView>
			 <Text>
			 {"\n"}{ "\n"}
			 Hello
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
			   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
			   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
			   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
			   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
			   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
			   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
			 </Text>
			 </ScrollView>
			 </View>
		 );
	 }
 }
 const styles=StyleSheet.create({
	 container:{
		 flex:3,
		 backgroundColor:'grey'
	 },
	 aligner:{
		 textAlign:'center',backgroundColor:'white'},
	 content:{
		 flex:1,
		 paddingTop:60
	 }
 })

export default todo_App;
*/

//Using React Lifecycle methods

/*
 class Life extends React.Component{
	 state={
		 userLoggedIn:false
	 }

	 static getDerivedStateFromProps(nextProps,nextState){
		 alert(nextState.userLoggedIn);
	 }
	 render(){
		 return(
			 <View>
			 {
				 
					 this.state.userLoggedIn && <AuthenticatedComponent/>
				 
			 }
			 </View>
		 );
	 }
 }

export default Life;     */

/*
 //Passing functions in props,using destructuring assignment as well

 class func_prop_genr extends React.Component{
	 constructor(){
		 super();
		 this.state={
			 msg:"This is a text msg inside a fn passed as a prop",
			 txt:"Yooooo"
		 }
	 }

	 update_(){
		 this.setState({
			 msg: "Im now modified,",
			 txt: "Yoo,Ima modified now"
		 })
	 }

         render(){
		 let {txt}=this.state;
		 
		 return(
			 <>
			 
			 <Derived_class 
			 update_={this.update_}
			 msg={this.state.msg}
			 txt={txt}/>

			 <Derived_func
			  msg={this.state.msg+"In a func"}
			  update_={()=>this.update_()}/>
			 
			 </>
		 );
	 }
 }

 class Derived_class extends React.Component{
	 render(){
		 let {txt,msg}=this.props;
		 
		 return(
			 <View>
			 <Text 
			  onPress={this.props.update_}>
			 {msg} {txt}
			 </Text>
			 </View>
		 );
	 }
 }
 
 const Derived_func=(props)=>{
	let {update_,msg}=props;
	
	return(
		<View>
		<Text onPress={update_}>
		{msg}
		</Text>
		</View>
	);
}

 export default func_prop_genr;         */     


/*
 //Props-Dynamic

 class dynamic_props extends React.Component{
	render(){
		let dynamic_var="Ima dynamic var assigned to a prop in a child component";
		return(<>
			<Child_Component property={dynamic_var}/>
			<Child_Component2 property={dynamic_var}/>
			</>
		);
	}
}

 class Child_Component extends React.Component{
      render(){
	      return(<View>
	             <Text>{this.props.property}</Text>
	             </View>);
      }
}

 class Child_Component2 extends React.Component{
   render(){
	   return(<View>
		   <Text>Inside Component2</Text>
		   <Text>{this.props.property}</Text>
		   </View>
	   );
   }
}

 export default dynamic_props;  */

/*
 
 //Props-Static

 class props_genr extends React.Component{
       render(){
	       return(
		      <>                      //Fragment 
		       <Rand property="lol"/>
		       <Random property={"lalalal"}/>
		      </>
	       );
       }
}

 class Rand extends React.Component{
    render(){
	    return(
		    <View>
		    <Text>{this.props.property}</Text>
		    <Text>Inside Rand</Text>
		    </View>
	    );
    }
}

 class Random extends React.Component{
	render(){
		return(
			<View>
			<Text>{this.props.property}</Text>
			<Text>Inside RandomTag</Text>
			</View>
		);
	}
}

export default props_genr;            */

/*
 
 //Program demonstrating stateful(Since inside class) 'class' component and manipulating it
 //Use of setState for native state and forceUpdate for non-native states

 class test extends React.Component{

	constructor(){
		super();
		this.Human={                                 //Non-Native state
			species:"Homo Sapiens"
		}
		this.state={                                 //Native state
			species:"None"
		}
	}

	 updateSpec(){                                     //function,not compn...
		 alert();
		this.setState({
			species:" "
		})

		this.Human.species="Homo gays";          
		this.forceUpdate();
	 }

	render(){
	        let variable=<Text>Hey im a variable</Text>;
		return(
			<View>
			<Text>Dont mind me</Text>
			<Text>Again...</Text>
			<Text onPress={()=>this.updateSpec()}>Click me</Text>
			<Text>The Species of state {this.state.species}</Text>
			<Text>The Species of the humans are {this.Human.species}</Text>
			{variable}
			</View>
		);
	}
}
export default test;                                                                   */

/*
 
 Program :Set state of a "class" component class using constructor

class class_ extends React.Component{
	constructor(){
		super();
		this.state_obj={
			year:'2021'
		}
	}
	render(){
		return(
			<View>
			<Text>The year is {this.state_obj.year}</Text>
			</View>
		);
	}
}

export default class_;
*/

//Its JSX stuff... dont confuse it with components starting with '{'
//Program showin stateless components and initialising state with property inside class

//Header and Footer are stateless "components",note the word "components" 
//which are ENTIRELY DIFFERENT FROM FUNCTIONS...
/*

const Header= () => (
	<View>
          <Text>header here</Text>
	</View>
)

const Main = () => (
<View>
<Text> Main </Text>
</View>
);

const Footer=()=>(
		<View>
		<Text style={{color:'blue'}}>footer here</Text>
		</View>
	
);
const Zoom=()=>(
	<View>
	<Text>{"This is a component,since it begins with a upeercase letter"}</Text>
	</View>
);
   
   class beginner extends React.Component{
	
	state_obj={
		name:"DeeTee",
		color:["blue"]           //Just an array assigned to object var
	}
	
	render(){
		return(
			<View>
			 <Text> Hello World! Shubham here again!</Text>
			 <Text>My name is {this.state_obj.color}</Text>
			<Header />
			<Main />
			<Footer />
			<Zoom/>
			</View>
		);
	}
} 

export default beginner;  */

