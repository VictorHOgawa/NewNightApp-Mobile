import { createStackNavigator } from "@react-navigation/stack";
import { Chat } from "../pages/Chat";
import { Checkout } from "../pages/Checkout";
import { Event } from "../pages/Event";
import { Portaria } from "../pages/JobDetails/Portaria";
import { Jobs } from "../pages/Jobs";
import { Login } from "../pages/Login";
import { Match } from "../pages/Match";
import { MatchRegister } from "../pages/MatchRegister";
import { MyMatches } from "../pages/MyMatches";
import { Place } from "../pages/Place";
import { Products } from "../pages/Products";
import { Profile } from "../pages/Profile";
import { Purchased } from "../pages/Purchased";
import { Register } from "../pages/Register";
import { Shop } from "../pages/Shop";
import { Tickets } from "../pages/Tickets";
import { AppRoutes } from "./NavBar.routes";
import { Promoter } from "../pages/JobDetails/Promoter";
import { Suggestions } from "../pages/Suggestions";
import { VIP } from "../pages/VIP";
import { Gift } from "../pages/Gift";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          flex: 1,
          backgroundColor: `transparent`,
        },
      }}
    >
      <Screen name="AppRoutes" component={AppRoutes} />
      <Screen name="MatchRegister" component={MatchRegister} />
      <Screen name="Tickets" component={Tickets} />
      <Screen name="Match" component={Match} />
      <Screen name="Login" component={Login} />
      <Screen name="Purchased" component={Purchased} />
      <Screen name="Profile" component={Profile} />
      <Screen name="Place" component={Place} />
      <Screen name="Checkout" component={Checkout} />
      <Screen name="Event" component={Event} />
      <Screen name="Register" component={Register} />
      <Screen name="Shop" component={Shop} />
      <Screen name="Products" component={Products} />
      <Screen name="MyMatches" component={MyMatches} />
      <Screen name="Chat" component={Chat} />
      <Screen name="Jobs" component={Jobs} />
      <Screen name="Promoter" component={Promoter} />
      <Screen name="Portaria" component={Portaria} />
      <Screen name="Suggestions" component={Suggestions} />
      <Screen name="VIP" component={VIP} />
      <Screen name="Gift" component={Gift} />
    </Navigator>
  );
}
