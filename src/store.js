import { createStore , combineReducers } from "redux";
import dataReducer from "./redux/reducer/dataReducer";
import songReducer from "./redux/reducer/songReducer";

// if we have multiple reducer then we can combine them with the help of combineReducer

const rootReducer = combineReducers(
    {
        songs : dataReducer,
        selectedSong : songReducer,
    }
)

const store = createStore(rootReducer);
export default store;