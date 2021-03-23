import React, {useState, useEffect, Fragment} from "react";
import axios from 'axios';
import {Container, Header, List} from 'semantic-ui-react'
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import './styles.css'

const App = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    });
    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
      <List>
        {activities.map((activity) => (
          <List.Item key={activity.id}>
            {activity.title}
          </List.Item>
        ))}
      </List>
      </Container>
    </Fragment>
  );
};

export default App;
