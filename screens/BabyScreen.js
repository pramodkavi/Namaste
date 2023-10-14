import React, {useContext} from "react";
import {Text, View, Image, TouchableOpacity, Button} from 'react-native'
import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from "react-native-safe-area-context";
import {themeColors} from "../theme";
import {BellIcon} from "react-native-heroicons/outline";
import {Bars3CenterLeftIcon} from "react-native-heroicons/mini";
import {babyDetails, mainFeatures} from "../constants";
import Carousel from "react-native-snap-carousel";
import {Features} from "../components/features";
import {UpcomingEvent} from "../components/upcomingEvent";
import {Logs} from "../components/logs";
import {HomeIcon,CalendarDaysIcon,ClipboardDocumentListIcon,PresentationChartLineIcon} from "react-native-heroicons/outline";
import {useNavigation} from "@react-navigation/native";
import { AuthContext } from "../Context/AuthContext";
import RemindersButton from "../components/RemindersButton";
import FilledButton from "../components/filledButton";
import { Drawer } from 'react-native-drawer-layout';
import DrawerContent from "../components/Drawer/DrawerContent";
import Destinations from "./destinations";
import {CheckIcon, ClockIcon} from "react-native-heroicons/solid";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";


export function BabyScreen() {
    let baby = babyDetails[2];
    let featuresDetails = mainFeatures;
    let navigation = useNavigation();
    const [open, setOpen] = React.useState(false);

    return (
        <Drawer
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            renderDrawerContent={() => {
                return (
                    <DrawerContent/>
                );
            }}
        >
        <View className={"flex-1 relative "} style={{backgroundColor:"#FFFFFF"}}>
            <StatusBar />
            <SafeAreaView>
                {/*Top bar*/}
                <View className="mx-4  mt-1 flex-row  items-center">
                    <TouchableOpacity className={"rounded-full p-1 border-2"} style={{borderColor:themeColors.btnColor}}
                        onPress={() => setOpen((prevOpen) => !prevOpen)}
                    >
                        <Bars3CenterLeftIcon size="27" color="#8C7FE5" />
                    </TouchableOpacity>

                    <View className=" flex-1 space-x-2 items-center">

                        <Text className={"text-3xl font-bold"} style={{color:"#8C7FE5"}} >
                            Dashboard
                        </Text>
                    </View>
                    <TouchableOpacity className={"rounded-full p-1 border-2"} style={{borderColor:themeColors.btnColor}}>
                        <BellIcon size="27" color="#8C7FE5" />
                    </TouchableOpacity>
                </View>

                <View className={" pl-8 my-3"}>
                    <Text className={"text-3xl text-gray-700"} style={{color:"gray"}} >
                        Hello<Text className={"text-3xl font-semibold text-gray-500"} style={{color:"#8C7FE5"}}> Kavi,</Text>
                    </Text>
                </View>

                <View >
                    <View className={"flex-row rounded-xl p-3 shadow-2xl  mx-2 space-x-3"} style={{backgroundColor:themeColors.colornormal,shadowColor: "#000"}}>
                        <Image
                            source={require('../assets/images/status.png')}
                            style={{width: wp(95), height: wp(20), borderRadius: 20}}
                            className="absolute"
                        />
                        <View className={"flex justify-center flex-1"}>
                            <Text className={" text-gray-500 text-lg text-white font-semibold"} style={{color:"black"}} >Your plan for today</Text>
                            <View className={"flex-row items-center space-x-2"}>
                                <Text className={" text-white"} style={{color:"gray"}}>1 to 4 completed</Text>
                            </View>
                        </View>
                        <View className={"flex-row justify-center items-center space-x-3"}>
                            <TouchableOpacity className={"rounded-full p-2 border border-white"} style={{backgroundColor:themeColors.btnColorop(1),borderColor:"white"}} >
                                <CalendarDaysIcon size="27" color="white"  />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

                {/*feature carousel*/}
                <View>
                    <Destinations />
                </View>

            </SafeAreaView>
        </View>
        </Drawer>
    )
}
