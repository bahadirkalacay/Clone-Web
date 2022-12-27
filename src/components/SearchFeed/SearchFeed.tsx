import { FC, useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../../utils/fetch";
import { VideoFeed } from "../Feed/VideoFeed";

type Props = {};

export const SearchFeed: FC<Props> = (props) => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <Box p={2} minHeight="95vh">
      <Box display="flex">
        <Typography variant="h4" fontWeight={900} color="white" mb={3}>
          Search Results for{" "}
          <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
        </Typography>
      </Box>
      <Box display="flex">
        <Box />
        <VideoFeed data={videos} />
      </Box>
    </Box>
  );
};
