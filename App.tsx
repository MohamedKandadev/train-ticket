import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';

type Props = {};

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
