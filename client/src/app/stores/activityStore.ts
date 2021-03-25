import { action, makeObservable, observable } from "mobx";

export default class ActivityStore {
  title = "Hello from MobX";

  constructor() {
    makeObservable(this, {
      title: observable,

      // we need to use "bound" because in method dec we use "this", and w this we bound it to the class
      //setTitle: action.bound,
      setTitle: action,
    });
  }

  //setTitle() {
  //  this.title = this.title + "!";
  //}

  // TO AVOID BINDING USE ARROW FUNCTIONS

  setTitle = () => {
    this.title = this.title + "!";
  };
}
