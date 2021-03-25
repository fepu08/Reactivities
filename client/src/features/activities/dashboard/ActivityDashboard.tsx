import { observer } from "mobx-react-lite";
import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
  createOrEdit: (activity: Activity) => void;
  submitting: boolean;
  deleteActivity: (id: string) => void;
}

const ActivityDashboard = ({
  createOrEdit,
  submitting,
  deleteActivity,
}: Props) => {
  const { activityStore } = useStore();
  const { selectedActivity, editMode } = activityStore;

  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList deleteActivity={deleteActivity} submitting={submitting} />
      </Grid.Column>
      <Grid.Column width="6">
        {selectedActivity && !editMode && <ActivityDetails />}
        {editMode && (
          <ActivityForm createOrEdit={createOrEdit} submitting={submitting} />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard);
