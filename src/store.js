//import { Store } from "@material-ui/icons";
import { createStore } from "redux";
import rootReducer from "./redux/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools()
  // other store enhancers if any
);
export default store;





