import { Component } from "vue";
export default interface Widget {
  name?: string;
  component?: Component;
  setComponent?: Component;
  configValue?: object;
}
