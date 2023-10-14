import {Image, Text, TouchableWithoutFeedback, View} from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import {useNavigation} from "@react-navigation/native";

export default function RestaurantCard ({item}) {
    const navigation = useNavigation();
    // console.log({item});
    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Reataurant", {item})}
        >
            <View className={"mr-6 rounded-3xl shadow-lg bg-white"}>
                {/*main image*/}
                <Image source={item.image} className={"h-36 w-64 rounded-t-3xl"}/>

                {/*name review address section*/}
                <View className={"px-3 pb-4 space-y-2"}>
                    {/*name*/}
                    <Text className={"font-semibold pt-2"} style={{color:"gray",fontSize:16}}>
                        {item.name}
                    </Text>
                    {/*address*/}
                    <View className={"flex-row items-center space-x-1"}>
                        <Icon.MapPin width="15" height="15" stroke="gray"/>
                        <Text className={"text-gray-500"} style={{color:"gray",fontSize:14}}>
                            By  {item.address}
                        </Text>
                    </View>

                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
