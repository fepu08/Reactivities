import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import "./styles.css";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { observer } from "mobx-react-lite";
import HomePage from "../../features/home/HomePage";
import { Route } from "react-router-dom";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/activities" component={ActivityDashboard} />
        <Route path="/activities/:id" component={ActivityDetails} />
        <Route
          path={["/createActivity", "/manage/:id"]}
          component={ActivityForm}
        />
      </Container>
    </Fragment>
  );
};

export default observer(App);
