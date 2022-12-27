import { Box, Stack, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../../utils/fetch";

import { CheckCircle } from "@mui/icons-material";
import { VideoProps } from "../../utils/types";
import { VideoFeed } from "../Feed/VideoFeed";

type Props = {};

export const VideoDetail: FC<Props> = (props) => {
  const { id } = useParams();
  const [data, setData] = useState<VideoProps>();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((response) => {
      setData(response.items[0]);
    });

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (response) => {
        setVideos(response.items);
      }
    );
  }, [id]);

  if (!data?.snippet)
    return (
      <Typography variant={"h6"} color="#fff">
        Loading...
      </Typography>
    );

  return (
    <Box minHeight={"95vh"}>
      <Stack
        direction={{ md: "row", xs: "column" }}
        justifyContent={"space-around"}
      >
        <Box sx={{ flex: 1, p: 2 }}>
          <Box sx={{ width: "100%", position: "sticky", top: 120 }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />

            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {data?.snippet?.title}
            </Typography>

            <Stack
              direction={"row"}
              justifyContent="space-between"
              sx={{ color: "#FFF", px: 2, pb: 1 }}
            >
              <Link to={`/channel/${data?.snippet?.channelId}`}>
                <Typography variant={"button"} color="#fff">
                  {data?.snippet?.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              {data.statistics && (
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="button" sx={{ opacity: 0.7 }}>
                    {parseInt(data.statistics.viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="button" sx={{ opacity: 0.7 }}>
                    {parseInt(data.statistics.likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              )}
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ xs: 1, md: 5 }}
          justifyContent="center"
          alignItems="center"
          sx={{ width: "25%" }}
          className="video-left-list"
        >
          <VideoFeed
            data={videos}
            direction="column"
            videoItemClassName="search-video-detail-item-feed"
          />
        </Box>
      </Stack>
    </Box>
  );
};
