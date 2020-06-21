import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomePageContainer,
  UsersPageContainer,
  SingleAnimePageContainer,
  AnimeCategoriesPageContainer,
  SearchResultsContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/:id" component={SingleAnimePageContainer} />
      <Route exact path="/users/:id" component={UsersPageContainer} />
      <Route
        exact
        path="/categories/:categories"
        component={AnimeCategoriesPageContainer}
      />
      <Route exact paht="/results/:term" component={SearchResultsContainer} />
    </Switch>
  );
};

export default RoutesView;
