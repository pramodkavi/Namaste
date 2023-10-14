import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { destinationData } from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient'
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function Destinations() {
    const navigation = useNavigation();
  return (
    <View className="mx-4 flex-row justify-between flex-wrap mt-5">
      {
        destinationData.map((item, index)=>{
            return (
                <DestinationCard navigation={navigation} item={item} key={index} />
            )
        })
      }
    </View>
  )
}


const DestinationCard = ({item, navigation})=>{
    const [isFavourite, toggleFavourite] = useState(false);
    return (
        <TouchableOpacity
            onPress={()=> navigation.navigate(item.location)}
            style={{width: wp(44), height: wp(65)}}
            className="flex justify-start relative p-4 py-6 space-y-2 mb-3">
                <Image
                    source={item.image}
                    style={{width: wp(44), height: wp(65), borderRadius: 35}}
                    className="absolute"
                />


            <TouchableOpacity onPress={()=> toggleFavourite(!isFavourite)} style={{backgroundColor: 'rgba(255,255,255,0.4)'}} className="absolute top-1 right-3 rounded-full p-3">
                <HeartIcon size={wp(5)} color={isFavourite? "red": "white"} />
            </TouchableOpacity>

            <Text style={{fontSize: wp(4.4)}} className="text-white font-semibold">{item.title}</Text>
            <Text style={{fontSize: wp(2.2)}} className="text-white">{item.shortDescription}</Text>

        </TouchableOpacity>
    )
}