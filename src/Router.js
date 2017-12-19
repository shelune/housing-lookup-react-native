import React from 'react';
import { 
  Scene,
  Router,
  Stack
} from 'react-native-router-flux';

import Criteria from './components/Criteria';
import ApartmentList from './components/ApartmentList';
import ApartmentPage from './components/ApartmentPage';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="criteria">
          <Scene key="listCriteria" component={Criteria} title="Search"></Scene>
        </Scene>
        <Scene key="apartments" back backTitle="Search">
          <Scene key="fetchAparments" component={ApartmentList} title="Apartment List" />
          <Scene key="apartmentPage" component={ApartmentPage}/>
        </Scene>
      </Stack>
    </Router>
  )
};

export default RouterComponent;