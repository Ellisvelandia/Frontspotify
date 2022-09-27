import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { AiFillClockCircle } from "react-icons/ai";
import { useStateProvider } from "../Utils/StateProvider";

export default function Body() {
  const [{ token, selectedPlaylist, selectedPlaylistId }, dispatch] =
    useStateProvider();

  useEffect(() => {
    const getInitialPlaylist = async () => {
      console.log(selectedPlaylistId);
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    };
    getInitialPlaylist();
  }, [token, dispatch]);
  return <Container>Body</Container>;
}

const Container = styled.div``;
