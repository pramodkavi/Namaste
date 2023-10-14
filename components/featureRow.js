import {View, Text, TouchableOpacity, ScrollView} from "react-native";
import {themeColors} from "../theme";
import RestaurantCard from "./restaurantCard";
import React from "react";

export default function FeatureRow({title,description,restaurants}){
    return (
        <View>
            <View className={"flex-row justify-between items-center px-4"}>
                <View>
                    <Text className={"text-xl font-semibold ml-3"} style={{color:"gray"}}>{title}</Text>
                    <Text className={"font-semibold ml-3"} style={{color:"gray"}}>{description}</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{color:"gray"}} className={"font-semibold"}>
                        See all
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal:15,
                    }
                }
                className={"overflow-visible py-5"}
            >
                {/* restaurants is a array of objects . */}
                {restaurants.map((restaurant, index) => (
                        <RestaurantCard key={index} item={restaurant} />
                    ))
                }

            </ScrollView>
        </View>
    )

}