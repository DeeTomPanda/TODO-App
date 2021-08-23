import React from 'react';
import {Text,StyleSheet,View,TouchableHighlight} from 'react-native';

const Button=({submitTodo})=>(                /* This is for that submit button*/
	<View style={styles.container}>
	<TouchableHighlight
	underlayColor="#21aabb"
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
		padding:2,
		borderColor:'#cba987',
		borderWidth:1,
		borderRadius:1,
		marginRight:6
	},
	text:{
		color:'#666666'
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
		height:25,
		paddingLeft:10,
		paddingRight:10,
		borderWidth:2,
	        borderColor:'white',
		justifyContent:'center',
		alignItems:'center',
		width:90,
		backgroundColor:'#aabbbc',
		marginTop:15,
		marginRight:20
	},
	submit:{
		fontStyle:'italic',
		color:'white',
		fontWeight:'600',
	}
});

export {Button,TodoButton};
