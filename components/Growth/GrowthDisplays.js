import {Image, Text, TouchableOpacity, View} from "react-native";
import {themeColors} from "../../theme";
import {ArrowUpIcon} from "react-native-heroicons/solid";
import React from "react";

export default function GrowthDisplays() {
    return(
        <View className={"flex-row my-2 justify-center items-center"}>

            {/* Display 1 */}
            <TouchableOpacity className={"flex rounded-2xl shadow-xl mx-1 border px-2"} style={{backgroundColor:"white",borderColor: themeColors.littleGray}}>
                {/*Image and title*/}
                <View className={"flex-row mx-2 space-x-2 pt-1 h-14 "}>
                    {/*Weight Image*/}
                    <View className={" pt-5  rounded-full flex justify-start"} >
                        <Text>
                        <Text className={"text-3xl font-bold"}>3</Text> <Text style={{color:"gray"}}>h</Text> <Text className={"text-3xl font-bold"}>28</Text>  <Text style={{color:"gray"}}>m</Text>
                        </Text>
                    </View>

                    <View className={"flex pt-1  justify-start items-center"}>
                        <Text className={"flex-row font-semibold text-xs underline"} style={{color:themeColors.colorDark}}>more ></Text>
                    </View>

                </View>

                <View className={"flex-row items-center p-2"}>
                    <Text className={"text-white "} style={{color:"gray",fontSize:12}}>App Usage Static</Text>
                </View>
            </TouchableOpacity>

            {/*Display 2*/}
            <TouchableOpacity className={"flex rounded-2xl shadow-xl mx-1 border px-2"} style={{backgroundColor:"white",borderColor: themeColors.littleGray}}>
                {/*Image and title*/}
                <View className={"flex-row mx-2 space-x-2 pt-1 h-14 "}>
                    {/*Weight Image*/}
                    <View className={" pt-5  rounded-full flex justify-start"} >
                        <Text>
                            <Text className={"text-3xl font-bold"}>35</Text>  <Text style={{color:"gray"}}>times</Text>
                        </Text>
                    </View>

                    <View className={"flex pt-1  justify-start items-center"}>
                        <Text className={"flex-row font-semibold text-xs underline"} style={{color:themeColors.colorDark}}>more ></Text>
                    </View>

                </View>

                <View className={"flex-row items-center p-2"}>
                    <Text className={"text-white "} style={{color:"gray",fontSize:12}}>Daily Unlock Count</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}