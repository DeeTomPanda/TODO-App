import React from 'react';
import {Text,StyleSheet,View,TouchableHighlight} from 'react-native';

const Button=({submitTodo})=>(                /* This is for that submit button*/
	<View style={styles.container}>
	<TouchableHighlight
	underlayColor="black"
	style={styles.button}
	onPress={submitTodo}>
	<Text style={styles.submit}>Submit</Text>
	</TouchableHighlight>
	</View>
)

const TodoButton=({onPress,complete,name})=>( /*This is for delete/done button */ 
	<TouchableHighlight
	onPress={onPress}
	underlayColor='#aa21c3'
	style={styles.button_}>
	<Text style={[
	styles.text,
	complete ? styles.complete:null,
	name==='Delete' ? styles.deleteButton:null
	]}>{name}</Text>
	</TouchableHighlight>
)

const styles=StyleSheet.create({
	button_:{
		alignItems:'flex-end',
		flexDirection:'row',
		width:50,
		justifyContent:'center'
	},
	text:{
		color:'white'
	},
	complete:{
		color:'green',
		fontWeight:'bold'
	},
	deleteButton:{
		color:'rgba(165,45,67,3)'
	},
	container:{
		alignItems:'flex-end',
	},
	button:{
		color:'orange',
		height:30,
		paddingLeft:10,
		paddingRight:10,
		borderWidth:2,
	        borderColor:'white',
		justifyContent:'center',
		alignItems:'center',
		width:100,
		backgroundColor:'black',
		marginTop:15,
		marginRight:20,
		borderRadius:15
	},
	submit:{
		fontStyle:'italic',
		color:'white',
		fontWeight:'600',
		borderRadius:10
	}
});

export {Button,TodoButton};
