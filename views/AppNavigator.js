import { createStackNavigator } from 'react-navigation-stack';
import HomePage from './HomePage';
import CreatePoll from './CreatePoll';

const AppNavigator = createStackNavigator({
  HomePage: { screen: HomePage },
  CreatePoll: { screen: CreatePoll }
});

export default AppNavigator;