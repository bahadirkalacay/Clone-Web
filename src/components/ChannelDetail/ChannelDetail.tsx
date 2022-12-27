import { Box } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { demoChannelInfo, demoProfileId } from "../../utils/constants";
import { fetchFromAPI } from "../../utils/fetch";
import { ChannelDetailsProps, VideoProps } from "../../utils/types";
import { VideoFeed } from "../Feed/VideoFeed";
import { ChannelItem } from "./ChannelItem";

type Props = {};

export const ChannelDetail: FC<Props> = (props) => {
  const { id } = useParams();
  const [data, setData] = useState<VideoProps[]>([]);
  const [channelDetails, setChannelDetails] = useState<ChannelDetailsProps>();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetails(data?.items[0]);

      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setData(videosData?.items);
    };

    fetchResults();
  }, [id]);

  console.log(channelDetails);

  return (
    <Box minHeight={"100vh"}>
      <Box sx={{ height: "40vh", mb: 15 }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            minHeight: "calc((100vw - 120px)/6.2 - 1px)",
            zIndex: 10,
            background: channelDetails?.brandingSettings.image.bannerExternalUrl
              ? `url(${channelDetails.brandingSettings.image.bannerExternalUrl}) center center no-repeat`
              : "linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147))",
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              bottom: "-150px",
              transform: "translateX(-50%)",
            }}
          >
            <ChannelItem
              data={channelDetails ? channelDetails : demoChannelInfo}
              id={channelDetails ? channelDetails.id : demoProfileId}
            />
          </Box>
        </Box>
      </Box>
      <Box p={6}>
        <VideoFeed data={data} justifyContent="center" />
      </Box>
    </Box>
  );
};
