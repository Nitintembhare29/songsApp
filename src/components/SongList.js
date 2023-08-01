import React from 'react'
import { selectSongs } from '../redux/actions/song.action';
import { useSelector, useDispatch } from 'react-redux';

const SongList = () => {
    const songs = useSelector(state=> state.songs);
    const dispatch = useDispatch();

  return (
    <div className='songs'>
        <h1 className='heading'>Song App</h1>
        {
            songs.map((song, index)=>(
                <div className='songList'>
                    <h1>{song.name}</h1>
                    <button onClick={()=> dispatch(selectSongs(song))}>Show Details</button>
                </div>
            ))
        }
      
    </div>
  )
}

export default SongList
