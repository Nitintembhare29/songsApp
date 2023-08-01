import { SELECT_SONGS } from "./actionsTypes";

export const selectSongs = (song)=>{

    return {
        type : SELECT_SONGS,
        payload : song
    }
}

// payload - anything that is carrying a information