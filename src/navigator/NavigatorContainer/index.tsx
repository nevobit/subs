import AppNavigator from "../AppNavigator";
import AuthNavigator from "../AuthNavigator";

export const NavigatorContainer = () => {
    const user = true;
    return user ? <AppNavigator /> : <AuthNavigator />
}