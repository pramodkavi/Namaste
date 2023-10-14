import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import { store } from "./store/store";
import {LogBox} from "react-native";
import {Navigation} from "./navigation/navigation";
import {NativeBaseProvider} from "native-base";

export default function App() {
    LogBox.ignoreAllLogs(true);

    return (
        <Provider store={store}>
            <NativeBaseProvider>
            <Navigation/>
            </NativeBaseProvider>
        </Provider>
    );
}