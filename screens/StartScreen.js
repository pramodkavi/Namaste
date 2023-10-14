import {SafeAreaView} from "react-native-safe-area-context";
import {LinearGradient} from "expo-linear-gradient";
import {COLORS} from "../constants/theme";
import images from "../constants/images";
import {useNavigation} from "@react-navigation/native";
import React, {useEffect} from "react";
import {Image, Text, View} from "react-native";

export function StartScreen() {
    let navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("AppOverview");
        },2000);
    }, []);

    return (
        <SafeAreaView className={"flex-1"} style={{backgroundColor:"white"}} >
            <Image source={require("../assets/images/background2.png")} className={"absolute h-full w-full"}/>
            <View className={" absolute bottom-44 left-5"}>
                <Text className={"text-3xl font-bold"} >
                    Welcome to Meditation
                </Text>
                {/*<Button title="Logout" onPress={() => logout()} />*/}
                <Text className={"text-gray-500 "} style={{letterSpacing:1,color:"gray"}} >Find Your Inner Peace!</Text>
            </View>
        </SafeAreaView>
    )
}
