import React, {useState, useEffect} from "react";
import axios from 'axios';

const App = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    });
  }, [])

  return (
    <div className='App'>
      <h1>Hello World!</h1>
      <ul>
        {
          activities.map((activity: any) => {
            <li key={activity.id}>
              {activity.title}
            </li>
          })
        }
      </ul>
    </div>
  );
};

export default App;
