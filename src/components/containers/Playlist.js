import React from "react";
import PlaylistHeader from "../PlaylistHeader";
import PalylistItems from "../containers/PlaylistItems";
import NightMode from "../Nightmode";
import StyledPlaylist from "../styles/StyledPlaylist";

const Playlist = ({ videos, active, nightModeCallback, nightMode }) => {
  return (
    <StyledPlaylist>
      <NightMode nightModeCallback={nightModeCallback} nightMode={nightMode} />
      <PlaylistHeader active={nightMode} total={videos.length} />
      <PalylistItems videos={videos} active={active} />
    </StyledPlaylist>
  );
};
export default Playlist;
