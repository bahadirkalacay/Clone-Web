import { Box } from "@mui/material";
import { FC, Fragment } from "react";
import { VideoProps } from "../../../utils/types";
import { ChannelItem } from "../../ChannelDetail/ChannelItem";
import { VideoItem } from "./VideoItem";
import { VideoPlaylist } from "./VideoPlaylist";

type Props = {
  data: VideoProps[];
  direction?: "column" | "row" | "column-reverse" | "row-reverse";
  justifyContent?: string;
  videoItemClassName?: string;
};

export const VideoFeed: FC<Props> = ({
  data,
  direction = "row",
  videoItemClassName = "video-feed-item",
  justifyContent = "space-between",
}) => {
  return (
    <Box
      sx={{
        overflowY: "auto",
        flex: 2,
        height: "100%",
      }}
      key={data.length}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: justifyContent,
          alignItems: "center",
          flexDirection: direction,
          width: "100%",
          flexWrap: "wrap",
        }}
        rowGap={3}
        columnGap={2}
      >
        {data.map((item: any, index: number) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
              width:
                videoItemClassName === "video-feed-item"
                  ? {
                    xs: "calc(100% - 10px)",
                    sm: "calc(50% - 16px)",
                    md: "calc(33% - 16px)",
                    xl: "calc(25% - 16px)",
                  }
                  : "100%",
            }}
            className={videoItemClassName}
            key={index}
          >
            {item && item.id && (
              <Fragment>
                {item.id.videoId && (
                  <VideoItem id={item.id.videoId} data={item} />
                )}

                {item.id.playlistId && (
                  <VideoPlaylist id={item.id.playlistId} data={item} />
                )}

                {item.id.channelId && (
                  <ChannelItem id={item.id?.channelId} data={item} />
                )}
              </Fragment>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
