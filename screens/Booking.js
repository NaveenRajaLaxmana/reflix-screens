import React from 'react'
import { View,Text,ScrollView,SafeAreaView,FlatList } from 'react-native'
import SL from 'react-native-vector-icons/SimpleLineIcons'

const data = [
    {
        id:1,
        month:'Jan',
        date:'27',
        year:'2021',
        service:'AC Service',
        status:'Pending',
        bg:'yellow',
        expertname:'Anil',
        isCustomerside:false
    },
    {
        id:2,
        month:'Jan',
        date:'27',
        year:'2021',
        service:'AC Service',
        status:'Accepted',
        bg:'green',
        expertname:'Anil',
        isCustomerside:false
    },
    {
        id:3,
        month:'Jan',
        date:'27',
        year:'2021',
        service:'AC Service',
        status:'On the way',
        bg:'black',
        expertname:'Anil',
        isCustomerside:false
    },
    {
        id:4,
        month:'Jan',
        date:'27',
        year:'2021',
        service:'AC Service',
        status:'Arrived',
        bg:'violet',
        expertname:'Anil',
        isCustomerside:false
    },
    {
        id:5,
        month:'Jan',
        date:'27',
        year:'2021',
        service:'AC Service',
        status:'in progress',
        bg:'pink',
        expertname:'Anil',
        isCustomerside:false
    },
    {
        id:6,
        month:'Jan',
        date:'27',
        year:'2021',
        service:'AC Service',
        status:'Pending for work done',
        bg:'#97bfb4',
        expertname:'Anil',
        isCustomerside:true
    },
    {
        id:7,
        month:'Jan',
        date:'27',
        year:'2021',
        service:'AC Service',
        status:'Review Pending',
        bg:'orange',
        expertname:'Anil',
        isCustomerside:false
    },
    {
        id:8,
        month:'Jan',
        date:'27',
        year:'2021',
        service:'AC Service',
        status:'Cancelled',
        bg:'red',
        expertname:'Anil',
        isCustomerside:true
    },
    {
        id:9,
        month:'Jan',
        date:'27',
        year:'2021',
        service:'AC Service',
        status:'Completed',
        bg:'brown',
        expertname:'Anil',
        isCustomerside:true
    }
]
const fn = ({item}) =>{
   return (
       <Text>{item.status}</Text>
   )
}
const renderFn = ({item,index}) =>{
    return (
        <View style={{ flexDirection:'row',borderBottomWidth:1,borderBottomColor:'grey',marginHorizontal:10,alignSelf:'center',flex:1 }}>
            <View style={{ flexBasis:'30%',backgroundColor:'#edfffa',alignSelf:'center',justifyContent:'center',paddingVertical:15}}>
                <Text style={{ color:'black',textAlign:'center' }}>{item.month}</Text>
                <Text style={{ color:'gray',fontSize:23,fontWeight:'600',textAlign:'center' }}>{item.date}</Text>
                <Text style={{ color:'black',textAlign:'center' }}>{item.year}</Text>
            </View>
            <View style={{ flexBasis:'70%',paddingHorizontal:15,paddingVertical:10,backgroundColor:'white' }}>
                <View style={{ flexDirection:'row',justifyContent:'space-between' }}>
                    <Text style={{ color:'black' }}>Job ID:102021</Text>
                    <View style={{ paddingVertical:5,paddingHorizontal:8,borderRadius:5,backgroundColor:item.bg ? item.bg : 'blue' }}>
                        <Text style={{ color:'white',textTransform:'capitalize',flexWrap:'wrap',maxWidth:100 }}>{item.status}</Text>
                    </View>
                </View>
                <Text style={{ fontSize:21,fontWeight:'400',color:'black' }}>{item.service}</Text>
                <View style={{ flexDirection:'row',justifyContent:'space-between' }}>
                    {item.expertname &&  (<Text style={{ color:'black' }}>
                        Expert: {item.expertname}
                    </Text>)}
                    {!item.expertname && (
                        <Text>
                            Waiting for the Expert
                        </Text>
                    )}
                    {item.isCustomerside && (
                        <Text>
                            (Customer Side)
                        </Text>
                    )}
                    <SL name='arrow-right' size={18} color={'grey'}/>
                </View>
            </View>
        </View>
    )
}

const Booking = () => {
  return (
    <SafeAreaView style={{ flex:1 }}>
        <ScrollView style={{ flex:1 }}>
            <FlatList 
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderFn}
            />
        </ScrollView>
    </SafeAreaView>
  )
}

export default Booking