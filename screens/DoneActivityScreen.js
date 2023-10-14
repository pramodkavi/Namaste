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

let baby = babyDetails[2];


export function DoneActivityScreen() {
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
                            Last Activity
                        </Text>
                    </View>
                    <TouchableOpacity className={"rounded-full p-1 border-2"} style={{borderColor:themeColors.btnColor}}>
                        <BellIcon size="27" color="#8C7FE5" />
                    </TouchableOpacity>
                </View>

                {/*/!*overl Statics*!/*/}
                {/*<View className={"flex justify-center items-center my-2"}>*/}
                {/*    <ProgressCircular/>*/}
                {/*</View>*/}

                {/*/!* app usage*!/*/}
                {/*<GrowthDisplays />*/}
                <View>
                    <Text className={"text-xl font-semibold ml-5 mt-3"} style={{color:"gray"}}>
                        Activity Analytics
                    </Text>
                </View>

                {/*Critical app*/}
                <View className={" mx-2 flex mb-3 pt-2"}>
                    <View className={"flex-row p-2 "}>
                        <TouchableOpacity className={" flex flex-1 my-1  border-r-2 justify-center items-center"} style={{borderColor:themeColors.littleGray}}>
                            <View className={" flex-row justify-end shadow-lg rounded-2xl"} >
                                <Text className={"mt-1"} style={{color:themeColors.colorDark,fontSize:80}}> 74</Text>
                                <View className={"flex justify-end pl-2"}>
                                    <Text style={{color:"gray",fontSize:40}}>%</Text>
                                </View>

                            </View>
                            <View lassName={"mt-10"}>
                                <Image source={require("../assets/images/yogaPos.png")} style={{width:200,height:200}}></Image>
                            </View>
                            <View>
                                <Text className={"mt-6"} style={{color:"gray"}}>Average Process</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity className={" flex flex-1 m-1 items-center"}>
                            <View>
                                <Text className={"text-lg font-bold"} style={{color:"gray"}}>Achived Goal</Text>
                            </View>

                            <View className={"flex space-y-2 mt-5"}>

                                <View className={"shadow-lg rounded-2xl p-2"} style={{backgroundColor:"white",shadowColor:"gray"}}>
                                    <View className={"flex-row space-x-2"} >
                                        <View className={"flex-row "} >
                                            <Image source={require("../assets/images/fire.png")} className={"w-9 h-9 rounded-full"}/>
                                        </View>
                                        <View className={"flex justify-center items-center  flex-1"} >
                                            <Text>1,840</Text>
                                            <Text style={{color:"gray"}}>Calories</Text>
                                        </View>
                                    </View>
                                </View>

                                <View className={"shadow-lg rounded-2xl p-2 w-40"} style={{backgroundColor:"white",shadowColor:"gray"}}>
                                    <View className={"flex-row space-x-2"} >
                                        <View className={"flex-row"} >
                                            <Image source={require("../assets/images/heartRate.png")} className={"w-9 h-9 rounded-full"}/>
                                        </View>
                                        <View className={"flex justify-center items-center  flex-1"} >
                                            <Text>101</Text>
                                            <Text style={{color:"gray"}}>Heart Rate</Text>
                                        </View>
                                    </View>
                                </View>

                                <View className={"shadow-lg rounded-2xl p-2"} style={{backgroundColor:"white",shadowColor:"gray"}}>
                                    <View className={"flex-row space-x-2"} >
                                        <View className={"flex-row "} >
                                            <Image source={require("../assets/images/run.png")} className={"w-9 h-9 rounded-full"}/>
                                        </View>
                                        <View className={"flex justify-center items-center  flex-1"} >
                                            <Text>3,683</Text>
                                            <Text style={{color:"gray"}}>Steps</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View className={"mt-2"} >
                                <MultipleProgressCircular/>
                            </View>

                            <View>
                                <Text className={"mt-1"} style={{color:"gray"}}>Average Goal</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                </View>

                <View>
                    <Text className={"text-xl font-semibold ml-5 my-1"} style={{color:"gray"}}>
                        Complete Activities
                    </Text>
                </View>
                <View>
                    <TouchableOpacity className={"flex-row rounded-xl p-3 shadow-2xl border  mx-2 space-x-3  justify-center items-center"} style={{backgroundColor:"white",borderColor:themeColors.littleGray}}>
                        <View className={"flex justify-center items-center rounded-full p-2 h-12 w-12"} >
                            <Image source={require("../assets/images/y1.png")} className={"w-14 h-14 rounded-full"}/>
                        </View>
                        <View className={"flex justify-center flex-1"}>
                            <Text>
                                <Text className={" text-white font-semibold"} style={{color:"gray"}}>Camel Pose</Text>
                            </Text>
                            <View className={"flex-row items-center "}>
                                <Text className={" text-sm"} style={{color:"gray"}}>15 Min. 70 Kcal</Text>
                            </View>
                        </View>
                        <View className={"flex-row justify-center items-center space-x-3"}>
                            <EllipsisVerticalIcon  size="32" color="black"  />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity className={"flex-row rounded-xl p-3 shadow-2xl border  mx-2 space-x-3 my-1 justify-center items-center"} style={{backgroundColor:"white",borderColor:themeColors.littleGray}}>
                        <View className={"flex justify-center items-center rounded-full p-2 h-12 w-12"} >
                            <Image source={require("../assets/images/y4.png")} className={"w-14 h-14 rounded-full"}/>
                        </View>
                        <View className={"flex justify-center flex-1"}>
                            <Text>
                                <Text className={" text-white font-semibold"} style={{color:"gray"}}>Chair Pose </Text>
                            </Text>
                            <View className={"flex-row items-center "}>
                                <Text className={" text-sm"} style={{color:"gray"}}>20Min. 110 Kcal</Text>
                            </View>
                        </View>
                        <View className={"flex-row justify-center items-center space-x-3"}>
                            <EllipsisVerticalIcon  size="32" color="black"  />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity className={"flex-row rounded-xl p-3 shadow-2xl border  mx-2 space-x-3 justify-center items-center"} style={{backgroundColor:"white",borderColor:themeColors.littleGray}}>
                        <View className={"flex justify-center items-center rounded-full p-2 h-12 w-12"} >
                            <Image source={require("../assets/images/y2.png")} className={"w-14 h-14 rounded-full"}/>
                        </View>
                        <View className={"flex justify-center flex-1"}>
                            <Text>
                                <Text className={" text-white font-semibold"} style={{color:"gray"}}>Yoga Pilates</Text>
                            </Text>
                            <View className={"flex-row items-center "}>
                                <Text className={" text-sm"} style={{color:"gray"}}>8 Min. 45 Kcal</Text>
                            </View>
                        </View>
                        <View className={"flex-row justify-center items-center space-x-3"}>
                            <EllipsisVerticalIcon  size="32" color="black"  />
                        </View>
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
