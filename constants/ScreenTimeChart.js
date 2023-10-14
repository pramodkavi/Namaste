import {LineChart} from "react-native-chart-kit";
import {Dimensions, View} from "react-native";
import {themeColors} from "../theme";

const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => themeColors.colorDark, // optional
            strokeWidth: 2 // optional
        }
    ],
    legend: ["Daily App Usage"] // optional
};
const chartConfig = {
    backgroundGradientFrom: "white",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: " white",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => themeColors.mediumGray,
    strokeWidth: 0.5, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: true // optional
};

export function ScreenTimeChart(){
    return (
        <View>
            <LineChart
                data={data}
                width={Dimensions.get("window").width}
                height={256}
                verticalLabelRotation={30}
                chartConfig={chartConfig}
                bezier
            />
        </View>
    )
}