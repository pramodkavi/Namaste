import React, {useEffect} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View,} from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context";
import {
    ArrowRightIcon,
    ArrowUpIcon,
    ClockIcon,
    Cog6ToothIcon,
    EllipsisVerticalIcon,
} from "react-native-heroicons/solid";
import {useNavigation} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import {themeColors} from "../theme";
import {useDispatch, useSelector} from "react-redux";
import {selectGrowth, setGrowth} from "../slices/growthSlice";
import {BellIcon, CalendarDaysIcon, ChartBarSquareIcon} from "react-native-heroicons/outline";
import {GlobalStyles} from "../constants/styles";
import {babyDetails} from "../constants";
import {Bars3CenterLeftIcon} from "react-native-heroicons/mini";
import {DUMMY_GROWTH} from "../constants/GrowthChartZScoreData/DUMMY_GROWTH";
import GrowthDisplays from "../components/Growth/GrowthDisplays";
import ProgressCircular from "../components/ProgressCircular";
import MultipleProgressCircular from "../components/MultipleProgressCircular";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";

let baby = babyDetails[2];


export function RecommendActivityScreen() {
    let baby = babyDetails[2];
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(setGrowth(DUMMY_GROWTH));
    },[DUMMY_GROWTH]);

    let growthDetails = useSelector(selectGrowth);
    const latestGrowthDetail = growthDetails[0];

    const navigation = useNavigation();
    return (
        <View className={"flex-1 bg-white "} style={{backgroundColor:"white"}}>
            <SafeAreaView className={"flex-1 relative"}>
                <StatusBar barStyle={"light"}/>
                {/*Top bar*/}
                <View className="mx-4  mt-1 flex-row  items-center">
                    <TouchableOpacity className={"rounded-full p-1 border-2"} style={{borderColor:themeColors.btnColor}}
                                      onPress={() => setOpen((prevOpen) => !prevOpen)}
                    >
                        <Bars3CenterLeftIcon size="27" color="#8C7FE5" />
                    </TouchableOpacity>

                    <View className=" flex-1 space-x-2 items-center">

                        <Text className={"text-2xl font-bold"} style={{color:"#8C7FE5"}} >
                            Recommend Activity
                        </Text>
                    </View>
                    <TouchableOpacity className={"rounded-full p-1 border-2"} style={{borderColor:themeColors.btnColor}}>
                        <BellIcon size="27" color="#8C7FE5" />
                    </TouchableOpacity>
                </View>

                <View>
                    <Text className={"text-xl font-semibold ml-5 mt-5"} style={{color:"gray"}}>
                        Overview
                    </Text>
                </View>

                <View className={" mx-2 flex mb-3 pt-2 mt-4"}>
                    <View className={"flex-row rounded-3xl p-3 shadow-2xl  mx-2 space-x-3"} style={{backgroundColor:themeColors.colornormal,shadowColor: "#000"}}>
                        <Image
                            source={require('../assets/images/covercloude.png')}
                            style={{width: wp(95), height: wp(20), borderRadius: 20}}
                            className="absolute"
                        />
                        <View className={"flex justify-center flex-1"}>
                            <Text className={" text-gray-500 text-lg text-white font-bold"} style={{color:"gray"}} >Your plan for today</Text>
                            <View className={"flex-row items-center space-x-2"}>
                                <Text className={" text-white"} style={{color:"gray"}}>8 sessions  25mins</Text>
                            </View>
                        </View>

                    </View>
                </View>

                <View className={"my-1 mt-3"}>
                    <Text className={" font-semibold ml-5 my-1"} style={{color:"gray",fontSize:16}}>
                        Sessions
                    </Text>
                </View>
                <View className={"flex space-y-2"}>
                    <TouchableOpacity className={"flex-row rounded-xl p-3 shadow-xl  mx-2 space-x-3  justify-center items-center"} style={{backgroundColor:"white",shadowColor:"black"}}>
                        <View className={"flex justify-center items-center rounded-full p-2 h-12 w-12"} >
                            <Image source={require("../assets/images/y1.png")} className={"w-14 h-14 rounded-full"}/>
                        </View>
                        <View className={"flex justify-center flex-1"}>
                            <Text>
                                <Text className={" text-white font-semibold"} style={{color:"gray"}}>Introduction</Text>
                            </Text>
                            <View className={"flex-row items-center "}>
                                <Text className={" text-sm"} style={{color:"gray"}}>6 Min</Text>
                            </View>
                        </View>
                        <View className={"flex-row justify-center items-center space-x-3"}>
                            <EllipsisVerticalIcon  size="32" color="black"  />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity className={"flex-row rounded-xl p-3 shadow-xl  mx-2 space-x-3  justify-center items-center"} style={{backgroundColor:"white",shadowColor:"black"}}>
                        <View className={"flex justify-center items-center rounded-full p-2 h-12 w-12"} >
                            <Image source={require("../assets/images/y4.png")} className={"w-14 h-14 rounded-full"}/>
                        </View>
                        <View className={"flex justify-center flex-1"}>
                            <Text>
                                <Text className={" text-white font-semibold"} style={{color:"gray"}}>Focusing your mind</Text>
                            </Text>
                            <View className={"flex-row items-center "}>
                                <Text className={" text-sm"} style={{color:"gray"}}>10 Min</Text>
                            </View>
                        </View>
                        <View className={"flex-row justify-center items-center space-x-3"}>
                            <EllipsisVerticalIcon  size="32" color="black"  />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity className={"flex-row rounded-xl p-3 shadow-xl  mx-2 space-x-3  justify-center items-center"} style={{backgroundColor:"white",shadowColor:"black"}}>
                        <View className={"flex justify-center items-center rounded-full p-2 h-12 w-12"} >
                            <Image source={require("../assets/images/y3.png")} className={"w-14 h-14 rounded-full"}/>
                        </View>
                        <View className={"flex justify-center flex-1"}>
                            <Text>
                                <Text className={" text-white font-semibold"} style={{color:"gray"}}>Managing Expectations</Text>
                            </Text>
                            <View className={"flex-row items-center "}>
                                <Text className={" text-sm"} style={{color:"gray"}}>3 Min</Text>
                            </View>
                        </View>
                        <View className={"flex-row justify-center items-center space-x-3"}>
                            <EllipsisVerticalIcon  size="32" color="black"  />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity className={"flex-row rounded-xl p-3 shadow-xl  mx-2 space-x-3  justify-center items-center"} style={{backgroundColor:"white",shadowColor:"black"}}>
                        <View className={"flex justify-center items-center rounded-full p-2 h-12 w-12"} >
                            <Image source={require("../assets/images/y5.png")} className={"w-14 h-14 rounded-full"}/>
                        </View>
                        <View className={"flex justify-center flex-1"}>
                            <Text>
                                <Text className={" text-white font-semibold"} style={{color:"gray"}}>Catching Thoughts</Text>
                            </Text>
                            <View className={"flex-row items-center "}>
                                <Text className={" text-sm"} style={{color:"gray"}}>6 Min</Text>
                            </View>
                        </View>
                        <View className={"flex-row justify-center items-center space-x-3"}>
                            <EllipsisVerticalIcon  size="32" color="black"  />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity className={"flex-row rounded-xl p-3 shadow-xl  mx-2 space-x-3  justify-center items-center"} style={{backgroundColor:"white",shadowColor:"black"}}>
                        <View className={"flex justify-center items-center rounded-full p-2 h-12 w-12"} >
                            <Image source={require("../assets/images/y6.png")} className={"w-14 h-14 rounded-full"}/>
                        </View>
                        <View className={"flex justify-center flex-1"}>
                            <Text>
                                <Text className={" text-white font-semibold"} style={{color:"gray"}}>Understanding Distractions</Text>
                            </Text>
                            <View className={"flex-row items-center "}>
                                <Text className={" text-sm"} style={{color:"gray"}}>8 Min</Text>
                            </View>
                        </View>
                        <View className={"flex-row justify-center items-center space-x-3"}>
                            <EllipsisVerticalIcon  size="32" color="black"  />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity className={"flex-row rounded-xl p-3 shadow-xl  mx-2 space-x-3  justify-center items-center"} style={{backgroundColor:"white",shadowColor:"black"}}>
                        <View className={"flex justify-center items-center rounded-full p-2 h-12 w-12"} >
                            <Image source={require("../assets/images/y2.png")} className={"w-14 h-14 rounded-full"}/>
                        </View>
                        <View className={"flex justify-center flex-1"}>
                            <Text>
                                <Text className={" text-white font-semibold"} style={{color:"gray"}}>Patience</Text>
                            </Text>
                            <View className={"flex-row items-center "}>
                                <Text className={" text-sm"} style={{color:"gray"}}>10 Min</Text>
                            </View>
                        </View>
                        <View className={"flex-row justify-center items-center space-x-3"}>
                            <EllipsisVerticalIcon  size="32" color="black"  />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity className={"flex-row rounded-xl p-3 shadow-xl  mx-2 space-x-3  justify-center items-center"} style={{backgroundColor:themeColors.colorDark}}>
                        <Text>
                            <Text className={" text-white font-semibold"} style={{color:"white"}}>Start Session</Text>
                        </Text>
                    </TouchableOpacity>

                </View>

            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    title: {
        color: themeColors.colornormal,
    },
});
