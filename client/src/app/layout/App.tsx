import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Header, List} from 'semantic-ui-react'
import { Activity } from "../models/activity";
import NavBar from "./NavBar";

const App = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    });
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <NavBar/>
      <List>
        {activities.map((activity) => (
          <List.Item key={activity.id}>
            {activity.title}
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default App;
