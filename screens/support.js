import React,{ useState } from 'react'
import {View,Text,SafeAreaView,TextInput,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import SA from 'react-native-vector-icons/SimpleLineIcons'

const Support = () => {
    const [newcomplaint,setnewcomplaint] =useState(false)

  return (
      <SafeAreaView style={{ flex:1 }}>
    <View style={{ flex:1 }}>
        <View style={{ flexDirection:'row',padding:15 }}>
            <TouchableOpacity style={{ flexBasis:'50%',backgroundColor:'orange',padding:3,elevation:3 }} onPress={() => setnewcomplaint(true)}>
                <Text style={{ color:'#fff',fontSize:19,textAlign:'center',textTransform:'capitalize' }} >new Complaint</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexBasis:'50%',backgroundColor:'#c7c344',padding:3 }} onPress={() => setnewcomplaint(false)}>
                <Text style={{ color:'#fff',fontSize:19,textAlign:'center',textTransform:'capitalize' }}>my Complaint</Text>
            </TouchableOpacity>
        </View>

       {newcomplaint && (
           <>
           <View style={{ padding:15 }}>
           <TextInput 
           style={{ height:50,width:'100%',borderRadius:5,paddingLeft:5,marginBottom:10,backgroundColor:'#fff' }}
           placeholder="Enter Job Id"
           />
            <TextInput 
           style={{ height:100,width:'100%',borderRadius:5,paddingLeft:5,marginBottom:10,backgroundColor:'#fff' }}
           placeholder="Write your complaint here"
           
           />
           <TouchableOpacity style={{ height:55,width:'100%',borderRadius:5,backgroundColor:'orange',alignItems:'center',justifyContent:'center' }}>
               <Text style={{ color:'#fff',textTransform:'uppercase',textAlign:'center' }}>Submit</Text>
           </TouchableOpacity>
       </View>

       <TouchableOpacity style={{ marginTop:60,marginHorizontal:8 }}>
           <View style={{ paddingVertical:10,paddingHorizontal:10,flexDirection:'row',justifyContent:'space-between',backgroundColor:'#fff',borderRadius:3 }}>
               <Icon name='mail' size={23} color={'orange'}/>
               <Text style={{ textAlign:'center',fontSize:18,color:'#000' }}>info@apnappindia.com</Text>
               <SA name='arrow-right' size={23} color={'grey'}/>
           </View>
       </TouchableOpacity>
       <TouchableOpacity style={{ marginTop:20,marginHorizontal:8 }}>
           <View style={{ paddingVertical:10,paddingHorizontal:10,flexDirection:'row',justifyContent:'space-between',backgroundColor:'#fff',borderRadius:3 }}>
               <Icon name='phone' size={23} color={'orange'}/>
               <Text style={{ textAlign:'center',fontSize:18,color:'#000' }}>+91 1234567890</Text>
               <SA name='arrow-right' size={23} color={'grey'}/>
           </View>
       </TouchableOpacity>
       </>
       ) } 
       {!newcomplaint && (
           <>
           <View style={{ marginTop:10,marginHorizontal:10,padding:15,backgroundColor:'#fff',borderRadius:5 }}>
               <View style={{ flexDirection:'row',justifyContent:'space-between' }}>
                <Text style={{ fontSize:20,fontWeight:'700',color:'#000' }}>RE24222</Text>
                <View style={{ padding:5,borderRadius:5,backgroundColor:'brown' }}>
                    <Text style={{ textAlign:'center',color:'#fff' }}>Resolved</Text>
                </View>
               </View>

               <Text style={{ flexWrap:'wrap',textTransform:'capitalize',fontSize:15,color:'#000',marginTop:10 }}>
               For React Native > 0.60, when pods are installed/updated auto linking will automatically add all fonts.
               </Text>

               <View style={{ flexDirection:'row',justifyContent:'space-between',marginVertical:10 }}>
                <Text style={{ color:'#000' }}>10:03 AM 10 Oct,2021</Text>
                <TouchableOpacity><Text style={{ color:'orange',textTransform:'capitalize' }}>View Details</Text></TouchableOpacity>
               </View>
           </View>

           <View style={{ marginTop:10,marginHorizontal:10,padding:15,backgroundColor:'#fff',borderRadius:5 }}>
               <View style={{ flexDirection:'row',justifyContent:'space-between' }}>
                <Text style={{ fontSize:20,fontWeight:'700',color:'#000' }}>RE24222</Text>
                <View style={{ padding:5,borderRadius:5,backgroundColor:'red' }}>
                    <Text style={{ textAlign:'center',color:'#fff' }}>Pending</Text>
                </View>
               </View>

               <Text style={{ flexWrap:'wrap',textTransform:'capitalize',fontSize:15,color:'#000',marginTop:10 }}>
               For React Native > 0.60, when pods are installed/updated auto linking will automatically add all fonts.
               </Text>

               <View style={{ flexDirection:'row',justifyContent:'space-between',marginVertical:10 }}>
                <Text style={{ color:'#000' }}>10:03 AM 10 Oct,2021</Text>
                <TouchableOpacity><Text style={{ color:'orange',textTransform:'capitalize' }}>View Details</Text></TouchableOpacity>
               </View>
           </View>

           <View style={{ marginTop:10,marginHorizontal:10,padding:15,backgroundColor:'#fff',borderRadius:5 }}>
               <View style={{ flexDirection:'row',justifyContent:'space-between' }}>
                <Text style={{ fontSize:20,fontWeight:'700',color:'#000' }}>RE24222</Text>
                <View style={{ padding:5,borderRadius:5,backgroundColor:'orange' }}>
                    <Text style={{ textAlign:'center',color:'#fff' }}>In Progress</Text>
                </View>
               </View>

               <Text style={{ flexWrap:'wrap',textTransform:'capitalize',fontSize:15,color:'#000',marginTop:10 }}>
               For React Native > 0.60, when pods are installed/updated auto linking will automatically add all fonts.
               </Text>

               <View style={{ flexDirection:'row',justifyContent:'space-between',marginVertical:10 }}>
                <Text style={{ color:'#000' }}>10:03 AM 10 Oct,2021</Text>
                <TouchableOpacity><Text style={{ color:'orange',textTransform:'capitalize' }}>View Details</Text></TouchableOpacity>
               </View>
           </View>
           </>
       )}
    </View>
    </SafeAreaView>
  )
}

export default Support;