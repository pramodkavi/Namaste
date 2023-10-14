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
import {selectGrowth, setGrowth} from "../slices/growthSlice";
import {BellIcon, CalendarDaysIcon, ChartBarSquareIcon} from "react-native-heroicons/outline";
import {GlobalStyles} from "../constants/styles";
import {babyDetails} from "../constants";
import {Bars3CenterLeftIcon} from "react-native-heroicons/mini";
import {DUMMY_GROWTH} from "../constants/GrowthChartZScoreData/DUMMY_GROWTH";
import {Center, Modal, VStack} from "native-base";
import {AppScreenTimeChart} from "../constants/AppScreenTimeChart";
import DeleteBtn from "../components/UI/DeleteBtn";
import UpdateBtn from "../components/UI/UpdateBtn";
import DateTimePicker from "../components/Form Component/DateTimePicker";

let baby = babyDetails[2];


export function HealthScreen() {
    let baby = babyDetails[2];
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(setGrowth(DUMMY_GROWTH));
    },[DUMMY_GROWTH]);
    let growthDetails = useSelector(selectGrowth);
    const latestGrowthDetail = growthDetails[0];
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const DataModal = () => {
        return <Center>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
                <Modal.Content maxWidth="350" style={{backgroundColor:"white"}}>
                    <Modal.CloseButton />
                    <Modal.Header>
                        <View className={"flex-row justify-start items-center space-x-2"}>
                            <Image source={require('../assets/images/happy.png')} style={{width:30,height:30}}/>
                            <Text className={" text-gray-500  font-semibold"} style={{color:"gray",fontSize:16}}>Happy</Text>
                        </View>
                    </Modal.Header>
                    <Modal.Body>
                        <VStack space={2}>
                            <View>
                                <View className={"flex-row justify-center"}><Text className={"text-lg font-bold"} style={{color:"gray"}}>Mood Analysis</Text></View>
                            </View>
                            <View style={{backgroundColor:"white"}}>
                                <TouchableOpacity className={" flex flex-1 mt-1 h-36 justify-center items-center"} >
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
                            Cancel
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
                            Last Activity
                        </Text>
                    </View>
                    <TouchableOpacity className={"rounded-full p-1 border-2"} style={{borderColor:themeColors.btnColor}}>
                        <BellIcon size="27" color="#8C7FE5" />
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View>
                        <Text className={"text-xl font-semibold ml-5 mt-3"} style={{color:"gray"}}>
                            Activity Analytics
                        </Text>
                    </View>


                    <View className={" mx-2 flex pt-2 "}>
                        <View className={"flex-row p-2 "}>

                            <TouchableOpacity className={" flex flex-1 m-1 items-center"}>
                                <View>
                                    <Text className={"text-lg"} style={{color:"gray"}}>Health Status</Text>
                                </View>

                                <View className={"flex space-y-2 mt-5"}>

                                    <View className={"shadow-lg rounded-2xl p-2"} style={{backgroundColor:"white",shadowColor:"gray"}}>
                                        <View className={"flex-row space-x-2"} >
                                            <View className={"flex-row "} >
                                                <Image source={require("../assets/images/weight.png")} className={"w-9 h-9 rounded-full"}/>
                                            </View>
                                            <View className={"flex justify-center items-center  flex-1"} >
                                                <Text>67Kg</Text>
                                                <Text style={{color:"gray"}}>Weight</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View className={"shadow-lg rounded-2xl p-2"} style={{backgroundColor:"white",shadowColor:"gray"}}>
                                        <View className={"flex-row space-x-2"} >
                                            <View className={"flex-row "} >
                                                <Image source={require("../assets/images/height.png")} className={"w-9 h-9 rounded-full"}/>
                                            </View>
                                            <View className={"flex justify-center items-center  flex-1"} >
                                                <Text>171cm</Text>
                                                <Text style={{color:"gray"}}>Height</Text>
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
                                </View>

                                <View className={"mt-5"}>
                                    <Image source={require("../assets/images/ecg.png")} style={{width:150,height:50}}></Image>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity className={" flex flex-1 my-1  justify-center items-center "} style={{borderColor:themeColors.littleGray}}>
                                <View lassName={"mt-10"}>
                                    <Image source={require("../assets/images/kalla.png")} style={{width:150,height:300}}></Image>
                                </View>
                            </TouchableOpacity>

                        </View>

                    </View>

                    <View className={"flex items-center justify-center  py-3 mx-3 rounded-3xl"} style={{backgroundColor:"#F7E7A2"}}>
                        <TouchableOpacity className={"flex-row justify-end"}>
                            <Text className={"flex-1 text-lg font-semibold pl-5"}> My mood </Text>
                            <Text className={" text-sm pr-3"} style={{color:"gray"}}> View more </Text>
                        </TouchableOpacity>
                        <TouchableOpacity className={"flex"} >
                            <Image source={require("../assets/images/em1.png")} className={"rounded-full"} style={{width:300,height:50}}/>
                        </TouchableOpacity>
                        <TouchableOpacity className={"flex"} >
                            <Image source={require("../assets/images/em2.png")} className={"rounded-full"} style={{width:300,height:50}}/>
                        </TouchableOpacity>
                        <TouchableOpacity className={"flex"} >
                            <Image source={require("../assets/images/em3.png")} className={"rounded-full"} style={{width:300,height:50}}/>
                        </TouchableOpacity>
                    </View>

                    <View className={"flex-row  pl-3 mt-5"}>
                        <Text className={"flex-1 text-xl font-semibold"} style={{color:"gray"}}>Mood Changes</Text>
                        <TouchableOpacity><Text className={"text-sm pr-5 "} style={{color:"gray"}}>See More</Text></TouchableOpacity>
                    </View>
                    <ScrollView className={"pl-3 my-2 mt-4"}>

                            <View className={"pl-3 my-2"}>
                                <Text className={"text-lg font-semibold"} style={{fontSize:16}}>Tuesday, Sep 2023 </Text>
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
                                        <View className={"flex "}>
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
                                        <View className={"flex "}>
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
                                        <View className={"flex "}>
                                            <Image source={require("../assets/images/waterdrop.png")} className={"w-9 h-9 rounded-full"}/>
                                            <View className={"flex-row items-center "}><Text className={"font-bold"} >98</Text><Text className={"text-sm"} style={{color:"gray"}}>%</Text></View>
                                            <Text className={"font-semibold text-sm"}>Oxygen</Text>
                                        </View>
                                    </View>

                                </View>

                            </TouchableOpacity>


                    </ScrollView>

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
