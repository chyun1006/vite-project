import { Component, AsyncComponentLoader } from "vue";
export default interface Widget {
  name?: string;
  component?: Function;
  setComponent: Function;
  configValue?: object;
}
