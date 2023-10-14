import React, {useEffect, useState} from "react";
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native'
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
import {deleteGrowth, selectGrowth, setGrowth} from "../slices/growthSlice";
import {BellIcon, CalendarDaysIcon, ChartBarSquareIcon} from "react-native-heroicons/outline";
import {GlobalStyles} from "../constants/styles";
import {babyDetails} from "../constants";
import {Bars3CenterLeftIcon} from "react-native-heroicons/mini";
import {DUMMY_GROWTH} from "../constants/GrowthChartZScoreData/DUMMY_GROWTH";
import GrowthDisplays from "../components/Growth/GrowthDisplays";
import ProgressCircular from "../components/ProgressCircular";
import {ScreenTimeChart} from "../constants/ScreenTimeChart";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {Center, Modal, VStack} from "native-base";
import {dateDiff, getDateenUSFormat} from "../util/date";
import DeleteBtn from "../components/UI/DeleteBtn";
import UpdateBtn from "../components/UI/UpdateBtn";
import {AppScreenTimeChart} from "../constants/AppScreenTimeChart";
import DateTimePicker from "../components/Form Component/DateTimePicker";


let baby = babyDetails[2];


export function ParentAppStatusScreen() {
    let baby = babyDetails[2];
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    useEffect(() => {
        dispatch(setGrowth(DUMMY_GROWTH));
    },[DUMMY_GROWTH]);

    let growthDetails = useSelector(selectGrowth);
    const latestGrowthDetail = growthDetails[0];

    const navigation = useNavigation();

    const DataModal = () => {
        return <Center>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
                <Modal.Content maxWidth="350" style={{backgroundColor:"white"}}>
                    <Modal.CloseButton />
                    <Modal.Header>
                        <View className={"flex-row justify-start items-center space-x-2"}>
                            <Image source={require('../assets/images/youtube.png')} style={{width:30,height:30}}/>
                            <Text className={" text-gray-500  font-semibold"} style={{color:"gray",fontSize:16}}>Youtube</Text>
                        </View>
                    </Modal.Header>
                    <Modal.Body>
                        <VStack space={2}>
                            <View style={{backgroundColor:"white"}}>
                                <View>
                                    <View className={"flex-row justify-center"}><Text className={"text-lg font-bold"} style={{color:"gray"}}>Screen Time Analysis</Text></View>
                                </View>
                                <View>
                                    <AppScreenTimeChart/>
                                </View>

                                <View className={" mx-1 mt-2 mb-2 items-center"}>
                                    <View >
                                        <View className={"flex items-center"}>
                                            <Text className={"flex-row font-semibold"} style={{color:"gray"}}>Usage Screen Time</Text>
                                        </View>
                                        <View className={"flex items-center"}>
                                            <Text className={"flex-row font-semibold text-2xl"} style={{color:themeColors.colorDanger}}>3h 43m</Text>
                                        </View>

                                    </View>

                                </View>
                                <View>
                                    <View className={"flex-row justify-center"}><Text className={"text-lg font-bold"} style={{color:"gray"}}>Mood Analysis</Text></View>
                                </View>
                                <TouchableOpacity className={"flex-row rounded-xl p-3 shadow-2xl mx-2 my-1 space-x-3"}
                                                  style={{backgroundColor:"white",shadowColor:"black"}}
                                                  onPress={()=> setShowModal(true)}
                                >

                                    <View className={"flex p-1 bg-white w-1/4  relative"} style={{backgroundColor:"white"}}>
                                        <View className={"items-center"}>
                                            <Text className={"font-bold"}>11.26 AM</Text>
                                        </View>
                                        <View className={"flex-1 items-center relative top-6 space-y-1"} >
                                            <Image source={require('../assets/images/happy.png')} style={{width:50,height:50}}/>
                                            <Text className={"font-bold"}>Happy</Text>
                                        </View>
                                    </View>
                                    <View className={"flex-row justify-center flex-1"}>
                                        <View className={"flex justify-center flex-1 space-y-2"}>
                                            <View className={"flex "}>
                                                <Image source={require("../assets/images/heartRate.png")} className={"w-9 h-9 rounded-full"}/>
                                                <View className={"flex-row items-center "}><Text className={"font-bold"} >60</Text><Text className={"text-sm"} style={{color:"gray"}}>bpm</Text></View>
                                                <Text className={"font-semibold text-sm"}>Heart Rate</Text>
                                            </View>
                                            <View className={"flex "}>
                                                <Image source={require("../assets/images/blooddrop.png")} className={"w-9 h-9 rounded-full"}/>
                                                <View className={"flex-row items-center "}><Text className={"font-bold"} >120/80</Text><Text className={"text-sm"} style={{color:"gray"}}>mmHg</Text></View>
                                                <Text className={"font-semibold text-sm"}>Pressure</Text>
                                            </View>
                                        </View>

                                        <View className={"flex justify-center flex-1 space-y-2"}>
                                            <View className={"flex mb-6"}>
                                                <Image source={require("../assets/images/ecg.png")} style={{width:100,height:50}}/>
                                            </View>
                                            <View className={"flex items-center "}>
                                                <Image source={require("../assets/images/waterdrop.png")} className={"w-9 h-9 rounded-full"}/>
                                                <View className={"flex-row items-center "}><Text className={"font-bold"} >98</Text><Text className={"text-sm"} style={{color:"gray"}}>%</Text></View>
                                                <Text className={"font-semibold text-sm"}>Oxygen</Text>
                                            </View>
                                        </View>

                                    </View>

                                </TouchableOpacity>
                                <TouchableOpacity className={"flex-row rounded-xl p-3 shadow-2xl mx-2 my-1 space-x-3"}
                                                  style={{backgroundColor:"white",shadowColor:"black"}}
                                                  onPress={()=> setShowModal(true)}
                                >

                                    <View className={"flex p-1 bg-white w-1/4  relative"} style={{backgroundColor:"white"}}>
                                        <View className={"items-center"}>
                                            <Text className={"font-bold"}>12.52 PM</Text>
                                        </View>
                                        <View className={"flex-1 items-center relative top-6 space-y-1"} >
                                            <Image source={require('../assets/images/sad.png')} style={{width:50,height:50}}/>
                                            <Text className={"font-bold"}>Sad</Text>
                                        </View>
                                    </View>
                                    <View className={"flex-row justify-center flex-1"}>
                                        <View className={"flex justify-center flex-1 space-y-2"}>
                                            <View className={"flex "}>
                                                <Image source={require("../assets/images/heartRate.png")} className={"w-9 h-9 rounded-full"}/>
                                                <View className={"flex-row items-center "}><Text className={"font-bold"} >72</Text><Text className={"text-sm"} style={{color:"gray"}}>bpm</Text></View>
                                                <Text className={"font-semibold text-sm"}>Heart Rate</Text>
                                            </View>
                                            <View className={"flex "}>
                                                <Image source={require("../assets/images/blooddrop.png")} className={"w-9 h-9 rounded-full"}/>
                                                <View className={"flex-row items-center "}><Text className={"font-bold"} >120/96</Text><Text className={"text-sm"} style={{color:"gray"}}>mmHg</Text></View>
                                                <Text className={"font-semibold text-sm"}>Pressure</Text>
                                            </View>
                                        </View>

                                        <View className={"flex justify-center flex-1 space-y-2"}>
                                            <View className={"flex mb-6"}>
                                                <Image source={require("../assets/images/ecg.png")} style={{width:100,height:50}}/>
                                            </View>
                                            <View className={"flex items-center"}>
                                                <Image source={require("../assets/images/waterdrop.png")} className={"w-9 h-9 rounded-full"}/>
                                                <View className={"flex-row items-center "}><Text className={"font-bold"} >98</Text><Text className={"text-sm"} style={{color:"gray"}}>%</Text></View>
                                                <Text className={"font-semibold text-sm"}>Oxygen</Text>
                                            </View>
                                        </View>

                                    </View>

                                </TouchableOpacity>

                                <TouchableOpacity className={"flex-row rounded-xl p-3 shadow-2xl mx-2 my-1 space-x-3"}
                                                  style={{backgroundColor:"white",shadowColor:"black"}}
                                                  onPress={()=> setShowModal(true)}
                                >

                                    <View className={"flex p-1 bg-white w-1/4  relative"} style={{backgroundColor:"white"}}>
                                        <View className={"items-center"}>
                                            <Text className={"font-bold"}>2.14 PM</Text>
                                        </View>
                                        <View className={"flex-1 items-center relative top-6 space-y-1"} >
                                            <Image source={require('../assets/images/angry1.png')} style={{width:50,height:50}}/>
                                            <Text className={"font-bold"}>Angry</Text>
                                        </View>
                                    </View>
                                    <View className={"flex-row justify-center flex-1"}>
                                        <View className={"flex justify-center flex-1 space-y-2"}>
                                            <View className={"flex "}>
                                                <Image source={require("../assets/images/heartRate.png")} className={"w-9 h-9 rounded-full"}/>
                                                <View className={"flex-row items-center "}><Text className={"font-bold"} >117</Text><Text className={"text-sm"} style={{color:"gray"}}>bpm</Text></View>
                                                <Text className={"font-semibold text-sm"}>Heart Rate</Text>
                                            </View>
                                            <View className={"flex "}>
                                                <Image source={require("../assets/images/blooddrop.png")} className={"w-9 h-9 rounded-full"}/>
                                                <View className={"flex-row items-center "}><Text className={"font-bold"} >120/110</Text><Text className={"text-sm"} style={{color:"gray"}}>mmHg</Text></View>
                                                <Text className={"font-semibold text-sm"}>Pressure</Text>
                                            </View>
                                        </View>

                                        <View className={"flex justify-center flex-1 space-y-2"}>
                                            <View className={"flex mb-6"}>
                                                <Image source={require("../assets/images/ecg.png")} style={{width:100,height:50}}/>
                                            </View>
                                            <View className={"flex items-center"}>
                                                <Image source={require("../assets/images/waterdrop.png")} className={"w-9 h-9 rounded-full"}/>
                                                <View className={"flex-row items-center "}><Text className={"font-bold"} >98</Text><Text className={"text-sm"} style={{color:"gray"}}>%</Text></View>
                                                <Text className={"font-semibold text-sm"}>Oxygen</Text>
                                            </View>
                                        </View>

                                    </View>

                                </TouchableOpacity>
                            </View>

                        </VStack>
                    </Modal.Body>
                    <Modal.Footer>
                        <DeleteBtn style={{paddingHorizontal:5}} mode="flat"
                                   flex="1" onPress={() => {
                            setShowModal(false);
                        }}>
                            Disable app
                        </DeleteBtn>
                        <UpdateBtn flex="1" onPress={() => {setShowModal2(true);}}>
                            Set time
                        </UpdateBtn>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>

            <Modal isOpen={showModal2} onClose={() => setShowModal(false)} size="lg">
                <Modal.Content maxWidth="350" style={{backgroundColor:"white"}}>
                    <Modal.Body>
                        <VStack space={2}>
                            <View>
                                <Image source={require("../assets/images/lock.png")} className={"w-20 h-20 mx-auto"}/>
                            </View>
                            <View>
                                <Text style={{color:themeColors.colorDanger,textAlign:"center"}}>
                                    App will be limited to given time.
                                </Text>
                                <View className={"mt-2"}>
                                    <DateTimePicker
                                        mode='time'
                                        lable={"Time"}
                                    />
                                </View>
                            </View>
                        </VStack>
                    </Modal.Body>
                    <Modal.Footer>
                        <DeleteBtn style={{paddingHorizontal:5}} mode="flat"
                                   flex="1"
                                   onPress={() => {
                                       setShowModal(false);
                                       setShowModal2(false);
                                   }}>Set Time
                        </DeleteBtn>

                        <UpdateBtn flex="1" onPress={() => {
                            setShowModal(false);setShowModal2(false);
                        }}>Cancel</UpdateBtn>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    };

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

                {/*chart Statics*/}
                <View className={"flex justify-center items-center my-2"}>
                    <ScreenTimeChart/>
                </View>

                {/* app usage*/}
                <View className={"flex-row my-2 justify-center items-center"}>

                    {/* Display 1 */}
                    <TouchableOpacity className={"flex rounded-2xl shadow-xl mx-1 border px-2"} style={{backgroundColor:"white",borderColor: themeColors.littleGray}}>
                        <Image
                            source={require('../assets/images/GreenCover.png')}
                            style={{width: wp(42), height: wp(22.5), borderRadius: 18}}
                            className="absolute"
                        />
                        {/*Image and title*/}
                        <View className={"flex-row mx-2 space-x-2 pt-1 h-14 "}>
                            {/*Weight Image*/}
                            <View className={" pt-5  rounded-full flex justify-start"} >
                                <Text>
                                    <Text className={"text-3xl font-bold"} style={{color:"white"}} >5</Text> <Text style={{color:"white"}}>h</Text> <Text className={"text-3xl font-bold"} style={{color:"white"}} >26</Text>  <Text style={{color:"white"}}>m</Text>
                                </Text>
                            </View>
                            <View className={"flex pt-1  justify-start items-center"}>
                                <Text className={"flex-row font-semibold text-xs underline"} style={{color:"white"}}>more ></Text>
                            </View>
                        </View>

                        <View className={"flex-row items-center p-2"}>
                            <Text  style={{color:"white",fontSize:12}}>This Week Avg.Usage</Text>
                        </View>
                    </TouchableOpacity>

                    {/*Display 2*/}
                    <TouchableOpacity className={"flex rounded-2xl shadow-xl mx-1 border px-2"} style={{backgroundColor:"white",borderColor: themeColors.littleGray}}>
                        <Image
                            source={require('../assets/images/BlueCover.png')}
                            style={{width: wp(42), height: wp(22.5), borderRadius: 18}}
                            className="absolute"
                        />
                        {/*Image and title*/}
                        <View className={"flex-row mx-2 space-x-2 pt-1 h-14 "}>
                            {/*Weight Image*/}
                            <View className={" pt-5  rounded-full flex justify-start"} >
                                <Text>
                                    <Text className={"text-3xl font-bold"} style={{color:"white"}} >8</Text> <Text style={{color:"white"}}>h</Text> <Text className={"text-3xl font-bold"} style={{color:"white"}} >12</Text>  <Text style={{color:"white"}}>m</Text>
                                </Text>
                            </View>

                            <View className={"flex pt-1  justify-start items-center"}>
                                <Text className={"flex-row font-semibold text-xs underline"} style={{color:"white"}}>more ></Text>
                            </View>

                        </View>

                        <View className={"flex-row items-center p-2"}>
                            <Text  style={{color:"white",fontSize:12}}>This Month Avg.Usage</Text>
                        </View>
                    </TouchableOpacity>

                </View>


                <ScrollView>
                    <View className={"pl-3 my-2"}>
                        <Text className={"text-lg font-semibold"} style={{fontSize:16}}>Create Challenges</Text>
                    </View>
                    <TouchableOpacity className={"flex-row rounded-xl p-3 shadow-2xl border  mx-2 my-1 space-x-3"}
                                      style={{backgroundColor:"white",borderColor:themeColors.littleGray}}
                                      onPress={()=> setShowModal(true)}
                    >
                        <View className={"rounded-full p-1 bg-white"} style={{backgroundColor:"white"}}>
                            <Image source={require('../assets/images/youtube.png')} style={{width:40,height:40}}/>
                        </View>
                        <View className={"flex justify-center flex-1"}>
                            <Text>
                                <Text className={" text-white font-semibold "} style={{color:"gray",fontSize:16}}>Youtube </Text>
                            </Text>
                            <View className={"flex-row items-center "}>
                                <ClockIcon  size="16" color="gray"  />
                                <Text className={"pl-2"} style={{color:"gray"}}>1 hours</Text>
                            </View>
                        </View>
                        <View className={"flex-row justify-center items-center space-x-3"}>
                            <EllipsisVerticalIcon  size="32" color="black"  />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className={"flex-row rounded-xl p-3 shadow-2xl border  mx-2 my-1 space-x-3"} style={{backgroundColor:"white",borderColor:themeColors.littleGray}}>
                        <View className={"rounded-full p-1 bg-white"} style={{backgroundColor:"white"}}>
                            <Image source={require('../assets/images/whatsapp.png')} style={{width:40,height:40}}/>
                        </View>
                        <View className={"flex justify-center flex-1"}>
                            <Text>
                                <Text className={" text-white font-semibold "} style={{color:"gray",fontSize:16}}>Whatsapp </Text>
                            </Text>
                            <View className={"flex-row items-center "}>
                                <ClockIcon  size="16" color="gray"  />
                                <Text className={"pl-2"} style={{color:"gray"}}>2 hours</Text>
                            </View>
                        </View>
                        <View className={"flex-row justify-center items-center space-x-3"}>
                                <EllipsisVerticalIcon  size="32" color="black"  />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity className={"flex-row rounded-xl p-3 shadow-2xl border  mx-2 my-1 space-x-3"} style={{backgroundColor:"white",borderColor:themeColors.littleGray}}>
                        <View className={"rounded-full p-1 bg-white"} style={{backgroundColor:"white"}}>
                            <Image source={require('../assets/images/tiktok.png')} style={{width:40,height:40}}/>
                        </View>
                        <View className={"flex justify-center flex-1"}>
                            <Text>
                                <Text className={" text-white font-semibold "} style={{color:"gray",fontSize:16}}>Tiktok </Text>
                            </Text>
                            <View className={"flex-row items-center "}>
                                <ClockIcon  size="16" color="gray"  />
                                <Text className={"pl-2"} style={{color:"gray"}}>1 hours</Text>
                            </View>
                        </View>
                        <View className={"flex-row justify-center items-center space-x-3"}>
                            <EllipsisVerticalIcon  size="32" color="black"  />
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </SafeAreaView>
            <DataModal/>
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
