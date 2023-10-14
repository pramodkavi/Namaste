import React, {useContext} from "react";
import {Text, View, Image, TouchableOpacity, Button, ScrollView, TextInput} from 'react-native'
import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from "react-native-safe-area-context";
import {themeColors} from "../theme";
import * as Icon from "react-native-feather";
import {articals, babyDetails, featured, mainFeatures} from "../constants";
import {useNavigation} from "@react-navigation/native";
import Categories from "../components/categories";
import FeatureRow from "../components/featureRow";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {Bars3CenterLeftIcon} from "react-native-heroicons/mini";
import {BellIcon} from "react-native-heroicons/outline";


export function RelaxingScreen() {
    let baby = babyDetails[2];
    let featuresDetails = mainFeatures;
    let navigation = useNavigation();
    const [open, setOpen] = React.useState(false);

    return (
        <SafeAreaView className="bg-white" style={{backgroundColor:"white"}}>
            <StatusBar barStyle="dark-content"/>
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

            <View className="flex-row items-center space-x-2 px-4 pb-2 pt-4" >
                <View className="flex-row flex-1 items-center rounded-full border border-gray-300 p-3" style={{borderColor:"gray"}}>
                    <Icon.Search width="25" height="25" stroke="gray"/>
                    <TextInput placeholder="Search" className="flex-1 pl-2"/>
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300 " style={{borderColor:"gray"}}>
                        <Icon.MapPin width="25" height="25" stroke="gray"/>
                        <Text className="text-gray-300" style={{color:"gray"}}>Maditation</Text>
                    </View>
                </View>
                <View style={{backgroundColor: themeColors.bgColor(1)}} className="rounded-full p-2">
                    <Icon.Sliders width="25" height="25" strokeWidth="2.5" stroke="white"/>
                </View>
            </View>

            {/*MAIN*/}


            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom :20
                }}
            >
                <View>
                    <Text className={"text-lg font-semibold ml-5"} style={{color:"gray"}}>
                        What do you want to do?
                    </Text>
                </View>
                {/*categories*/}
                <Categories/>

                <View>
                    <View>
                        <Text className={"text-lg font-semibold ml-5 mt-4 "} style={{color:"gray"}}>
                            Last Acitvites
                        </Text>
                        <View className="mx-4 flex-row justify-between flex-wrap mt-5">
                            <TouchableOpacity
                                onPress={()=> navigation.navigate("DoneActivity")}
                                style={{width: wp(44), height: wp(65)}}
                                className="flex justify-end relative p-4 py-6 space-y-1 mb-3">
                                <Image
                                    source={require("../assets/images/feature1.png")}
                                    style={{width: wp(44), height: wp(65), borderRadius: 35}}
                                    className="absolute"
                                />

                                <Text style={{fontSize: wp(4.4),color:"white"}} className="text-white font-semibold">The Peace</Text>
                                <Text style={{fontSize: wp(3),color:"white"}} className="text-white">15 min</Text>

                            </TouchableOpacity>

                            <TouchableOpacity
                                // onPress={()=> navigation.navigate(item.location)}
                                style={{width: wp(44), height: wp(65)}}
                                className="flex justify-end relative p-4 py-6 space-y-1 mb-3">
                                <Image
                                    source={require("../assets/images/feature2.png")}
                                    style={{width: wp(44), height: wp(65), borderRadius: 35}}
                                    className="absolute"
                                />

                                <Text style={{fontSize: wp(4.4),color:"white"}} className="text-white font-semibold">Lovely Deserts</Text>
                                <Text style={{fontSize: wp(3),color:"white"}} className="text-white">20 min</Text>

                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                {/*feature*/}

                <View className="mt-5">
                    {
                        [articals].map((item, index) => {
                            return (
                                <FeatureRow
                                    key={index}
                                    title={item.title}
                                    restaurants={item.restaurants}
                                    description={item.description}
                                />

                            )
                        })

                    }
                </View>

                <View>
                    <View>
                        <Text className={"text-lg font-semibold ml-5 mt-4 "} style={{color:"gray"}}>
                           Recommended Acitvites
                        </Text>
                        <View className="mx-4 flex-row justify-between flex-wrap mt-5">
                            <TouchableOpacity
                                onPress={()=> navigation.navigate("RecommendActivity")}
                                style={{width: wp(44), height: wp(65)}}
                                className="flex justify- relative p-4 py-6 space-y-1 mb-3">
                                <Image
                                    source={require("../assets/images/feature3.png")}
                                    style={{width: wp(44), height: wp(65), borderRadius: 35}}
                                    className="absolute"
                                />

                                <Text style={{fontSize: wp(4.4),color:"gray"}} className="text-white font-semibold">Breathing Techniques Good for your Heart</Text>
                                <View className="text-white relative top-20" >
                                    <Text style={{fontSize: wp(4),color:"gray"}} className="text-white">8 sessions</Text>
                                    <Text style={{fontSize: wp(3),color:"gray"}} className="text-white">14 min</Text>
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity
                                // onPress={()=> navigation.navigate(item.location)}
                                style={{width: wp(44), height: wp(65)}}
                                className="flex justify-start relative p-4 py-6 space-y-1 mb-3">
                                <Image
                                    source={require("../assets/images/feature4.png")}
                                    style={{width: wp(44), height: wp(65), borderRadius: 35}}
                                    className="absolute"
                                />

                                <Text style={{fontSize: wp(4.4),color:"gray"}} className="text-white font-semibold">Yogo Stretching for Stress and Anxiety</Text>
                                <View className="text-white relative top-20" >
                                    <Text style={{fontSize: wp(4),color:"gray"}} className="text-white">5 sessions</Text>
                                    <Text style={{fontSize: wp(3),color:"gray"}} className="text-white">20 min</Text>
                                </View>

                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                <View className="mt-5 h-20">

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
