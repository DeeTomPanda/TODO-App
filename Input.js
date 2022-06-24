import React from 'react';
import {TextInput,StyleSheet,View,Text} from 'react-native';

const inputstuff=({inputVal,inputChange})=>(           //destructuring as props at args
	<View>
		<TextInput
	         //style={{width:300,flex:1}}
	         selectionColor='#666666'
		 style={styles.textip}
		 placeholder={"Placeholder for i/p here"}
	         onChangeText={inputChange}
	         value={inputVal}/>
	</View>
)

const styles=StyleSheet.create({
	textip:{
		backgroundColor:'#acd216',
		elevation:10,
		shadowRadius:15,
		shadowColor:'blue',
		fontSize:25,
		marginLeft:22,
		marginRight:22,
		height:30
	}

})

export default inputstuff;
