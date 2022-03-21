import React from 'react'
import { View,Text,ScrollView,SafeAreaView,ImageBackground,Image,FlatList } from 'react-native'
import MI from 'react-native-vector-icons/MaterialIcons'
import SA from 'react-native-vector-icons/SimpleLineIcons'

const data =[
  {
    id:1,
  },
  {
    id:2,
  },
  {
    id:3,
  },
  {
    id:4,
  },
  {
    id:5,
  }
]

const renderFnS = ({item,index})=> {
  return (
    <View style={{ flexDirection:'column',margin:5 ,borderRadius:15,backgroundColor:'white'}}>
    <View style={{ flexDirection:'row',flex:1,padding:15 }}>
      <View style={{ flexBasis:'30%' }}>
        <Image source={require('../assets/img7.jpg')} style={{ height:100,width:'100%',borderRadius:10 }}/>
      </View>
      <View style={{ marginLeft:15,paddingRight:10 }}>
        <Text style={{ color:'black',fontWeight:'600' }}>AC UNINSTALLATION</Text>
        <Text style={{ color:'black',flexWrap:'wrap',maxWidth:250 }}>You can easily generate cohesive, harmonious color schemes by using the complementary</Text>
        <Text>Takes 30 mins - 2 hrs 30 mins</Text>
      </View>
    </View>
    <View style={{ flexDirection:'row',justifyContent:'space-between',paddingHorizontal:15 }}>
    <Text style={{ color:'#8cada4', textDecorationLine:'line-through',textDecorationStyle:'solid' }}>$300</Text>
    <View style={{ flexDirection:'row',justifyContent:'space-between' }}>
      <Text>Free visit & inspection</Text>
      <SA name='arrow-right' size={20} color={'green'}/>
    </View>
    </View>
    </View>
  )
}

const RepairAndServices = () => {
  return (
    <SafeAreaView style={{ flex:1 }}>
        <ScrollView style={{ flex:1,backgroundColor:'grey' }}>
            <ImageBackground source={require('../assets/pexels-gradienta-7130540.jpg')} style={{ width:'100%',paddingVertical:40,justifyContent:'center',alignItems:'center'}}>
            <View style={{ position:'absolute',top:0,backgroundColor:'transparent',flexDirection:'row',justifyContent:'space-between',padding:15,flex:1,zIndex:2 }}>
                <MI name='arrow-back' size={20} color={'#000'}/>
                <MI name='close' size={20} color={'#000'}/>
            </View>
                <Text style={{ textTransform:'capitalize',color:'black',fontSize:18 }}>AC <Text style={{ fontSize:19,fontWeight:'700' }}>repair & services</Text></Text>
                <Text style={{ textTransform:'capitalize',color:'black',fontSize:18 }}><Text style={{ fontSize:19,fontWeight:'700' }}>4.8/5</Text> Ratings</Text>
                <Text style={{ textTransform:'capitalize',color:'black',fontSize:18 }}><Text style={{ fontSize:19,fontWeight:'700' }}>50</Text> Reflix Experts</Text>
            </ImageBackground>
           
           
            <FlatList 
              data={data}
              keyExtractor={item => item.id}
              renderItem={renderFnS}
            />
           
        </ScrollView>
    </SafeAreaView>
  )
}

export default RepairAndServices