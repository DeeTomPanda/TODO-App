import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {TodoButton} from './Button';

const Todo=({todo,deleteTodo,toggleComplete})=>(
	<View style={styles.list}>
	<Text style={styles.font}> {todo.title} </Text>
	<View style={styles.buttons}>
	<TodoButton
	name='Done'
	complete={todo.complete}                       // basically True/False value here
	onPress={()=>toggleComplete(todo.todoIndex)}/> {/* todo is an individual element passed
		                                        from Todolist component,so 
		                                        todo.todoIndex is a number denoting the
		                                        index of object 'todo'*/}
	                                                {/*Individual element here as Todolist 
	                                                  component makes sure of it */}
	<TodoButton
	name='Delete'
	onPress={()=>deleteTodo(todo.todoIndex)}/>
	</View>
	</View>
);

const Todolist=({todos,deleteTodo,toggleComplete})=>{
	todos=todos.map((todo,i)=>{
		return(
			<Todo
			deleteTodo={deleteTodo}
			toggleComplete={toggleComplete}
			key={todo.todoIndex}
			todo={todo}/>
		);                             {/*Todo component is called where the object*/}
					     {/*todo is passed...the object is stored inside*/}
		                               {/*array todos*/} 
	});
	console.log("TODOS IS "+todos);
    return(
	     <View>
	    {todos}
	    </View> 
    ); 
}

const styles=StyleSheet.create({
	buttons:{
		flex:1,
		flexDirection:'row',
		justifyContent:'flex-end',
		alignItems:'flex-end'
	},
	list:{
		height:35,
		marginLeft:10,
		marginRight:10,
                paddingLeft:10,
		backgroundColor:'#cba987',
		color:'white',
                shadowOpacity:0.7,
		borderColor:'#aaeded',
		borderWidth:1,
		shadowColor:'blue',
		shadowRadius:5,
		
	},
	font:{
		fontSize:23,
		color:'black'
	}
});

export {Todo,Todolist};
