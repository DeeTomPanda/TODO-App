import React from 'react';
import {View,StyleSheet,Text,TouchableHighlight} from 'react-native';

const TabBarItem=({border,title,selected,setType,type})=>{
	<TouchableHighlight
	underlayColor='#efefef'
	onPress={setType}
	style={[
		/*styles.item,*/
		selected? styles.selected : null,
		border ? styles.border : null,
		type === title ? styles.selected :null ]}>
	<Text style={[styles.itemText,type===title ? styles.bold : null]}>
		{title}
	</Text>
	</TouchableHighlight>
}

const TabBar=({setType,type})=>{
	<View style={styles.container}>
        <TabBarItem type={type} title='All'
             setType={() => setType('All')} />
        <TabBarItem type={type} border title='Active'
             setType={() => setType('Active')} />
        <TabBarItem type={type} border title='Complete'
             setType={() => setType('Complete')} />
	</View>
}

const styles=StyleSheet.create({
item: {
flex: 1,
justifyContent: 'center',
alignItems: 'center'
},
border: {
borderLeftWidth: 1,
borderLeftColor: '#dddddd'
},
itemText: {
color: '#777777',
fontSize: 16
},
selected: {
backgroundColor: '#ffffff'
},
bold: {
fontWeight: 'bold'
},
container: {
height: 70,
flexDirection: 'row',
borderTopWidth: 1,
borderTopColor: '#dddddd'
}
});

export {TabBarItem,TabBar};
