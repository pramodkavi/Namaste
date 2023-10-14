import React, {useEffect} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View,} from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context";
import {ArrowRightIcon, ArrowUpIcon, ClockIcon, Cog6ToothIcon,} from "react-native-heroicons/solid";
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

let baby = babyDetails[2];


export function DigitalWellbeingScreen() {
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
                            Digital Wellbeing
                        </Text>
                    </View>
                    <TouchableOpacity className={"rounded-full p-1 border-2"} style={{borderColor:themeColors.btnColor}}>
                        <BellIcon size="27" color="#8C7FE5" />
                    </TouchableOpacity>
                </View>

                {/*overl Statics*/}
                <View className={"flex justify-center items-center my-2"}>
                    <ProgressCircular/>
                </View>

                {/* app usage*/}
                <GrowthDisplays />

                {/*Critical app*/}
                <View className={"h-60 mx-2 flex"}>
                    <View className={"flex-row p-2 "}>
                        <TouchableOpacity className={" flex flex-1 my-1 h-44 border-r-2 justify-center items-center"} style={{borderColor:themeColors.littleGray}}>
                            <View className={"shadow-lg rounded-2xl"} style={{backgroundColor:"white",shadowColor:"gray"}}>
                                <Image source={require("../assets/icons/insta.png")} style={{width:80,height:80}}></Image>
                            </View>
                            <View>
                                <Text className={"text-lg font-bold"}>Instagram</Text>
                            </View>
                            <View>
                                <Text className={"mt-1"} style={{color:"gray"}}>Most Used App</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity className={" flex flex-1 m-1 h-44  justify-center items-center"}>
                            <View className={"shadow-lg rounded-2xl p-2"} style={{backgroundColor:"white",shadowColor:"gray"}}>
                                <Image source={require("../assets/icons/google.png")} style={{width:60,height:60}}></Image>
                            </View>
                            <View>
                                <Text className={"text-lg font-bold"}>Google</Text>
                            </View>
                            <View>
                                <Text className={"mt-1"} style={{color:"gray"}}>Most Used App</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View className={"flex justify-center items-center"}>
                        <Text style={{color:"gray"}}>This is based on past 7 days usage</Text>
                    </View>
                </View>

                <TouchableOpacity className={"flex-row rounded-xl p-3 shadow-2xl border  mx-2 space-x-3"} style={{backgroundColor:"white",borderColor:themeColors.littleGray}}>
                    <View className={"rounded-full p-1 bg-white"} style={{backgroundColor:"white"}}>
                        <Image source={require('../assets/images/indicator.png')} style={{width:40,height:60}}/>
                    </View>
                    <View className={"flex justify-center flex-1"}>
                        <Text>
                            <Text className={" text-white font-semibold"} style={{color:"gray"}}>Addiction Level: </Text>
                            <Text style={{color:"lime"}}> Habitual</Text>
                        </Text>
                        <View className={"flex-row items-center "}>
                            <Image source={require('../assets/images/stars.png')} style={{width:80,height:30}}/>
                        </View>
                    </View>
                    <View className={"flex-row justify-center items-center space-x-3"}>
                        <TouchableOpacity className={"rounded-full p-2 border border-white"} style={{backgroundColor:themeColors.btnColorop(1),borderColor:"white"}} >
                            <CalendarDaysIcon size="27" color="white"  />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity className={"flex-row rounded-xl p-3 shadow-2xl border  mx-2 space-x-3 my-2"} style={{backgroundColor:"white",borderColor:themeColors.littleGray}}>
                    <View className={"flex justify-center items-center rounded-full p-2 h-12 w-12"} style={{backgroundColor:themeColors.colorDanger}} >
                        <Cog6ToothIcon  size="27" color="white"  />
                    </View>
                    <View className={"flex justify-center flex-1"}>
                        <Text>
                            <Text className={" text-white font-semibold"} style={{color:"gray"}}>Perantal Controls </Text>
                        </Text>
                        <View className={"flex-row items-center "}>
                            <Text className={" text-sm"} style={{color:"gray"}}>Set time to help child balance their screen time</Text>
                        </View>
                    </View>
                    <View className={"flex-row justify-center items-center space-x-3"}>
                        <TouchableOpacity className={"rounded-full p-2 border border-white"} style={{backgroundColor:themeColors.btnColorop(1),borderColor:"white"}} >
                            <CalendarDaysIcon size="27" color="white"  />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>

                {/*Magnifire*/}
                    <TouchableOpacity
                        className={"absolute bottom-10 right-5 rounded-full shadow-2xl p-1"}
                        style={{backgroundColor:themeColors.btnColor,shadowColor: "#000"}}
                        onPress={() => navigation.navigate('ParentAppStatus')}
                    >
                        <Image source={require("../assets/images/analysisIcon.png")} className={"w-12 h-12 rounded-full"}/>
                        {/*<ChartBarSquareIcon   size="40" color="white" />*/}
                    </TouchableOpacity>

                {/*</View>*/}

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
