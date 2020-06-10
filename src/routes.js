import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Constants from 'Constants';
import { mountSectionPathById } from 'Utils/urlCreationUtil';
import { isSectionIdAvailable } from 'Utils/sectionUtil';
import Error from 'Pages/error';
import Section from 'Pages/section';

const scienceAndTechnologyRoute = mountSectionPathById(Constants.SECTION_IDS.SCITEC);

const SectionRoute = ({ component: Component, ...routeProps }) => (
  <Route
    {...routeProps}
    render={props => (
      isSectionIdAvailable(routeProps.computedMatch.params.section)
        ? <Component {...props} />
        : <Redirect to={scienceAndTechnologyRoute} {...props} />
    )}
  />
);

const Routes = () => (
  <Switch>
    <SectionRoute exact path="/nyttop/section/:section" component={Section} />
    <Route exact path="/nyttop/error" component={Error} />
    <Route exact path="/" render={props => <Redirect to={scienceAndTechnologyRoute} {...props} />} />
  </Switch>
);

export default Routes;
