import { CheckCircle } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { demoChannelUrl, demoVideoUrl } from "../../../utils/constants";
import { VideoProps } from "../../../utils/types";

type Props = {
  data: VideoProps;
  id: string;
};

export const VideoItem: FC<Props> = ({ data, id }) => {
  return (
    <Card sx={{ width: "100%" }} data-id={id}>
      <Link to={id ? `/video/${id}` : demoVideoUrl} data-id={id}>
        <CardMedia
          image={data?.snippet.thumbnails?.high?.url}
          alt={data?.snippet.title}
          component="img"
          sx={{
            width: "100%",
            height: 180,
          }}
        />
      </Link>

      <CardContent
        sx={{ background: "#1e1e1e", height: "100%", minHeight: "106px" }}
      >
        <Grid container wrap="nowrap" direction="column">
          <Grid item>
            <Link to={id ? `/video/${id}` : demoVideoUrl} data-id={id}>
              <Tooltip title={data.snippet.title}>
                <Typography variant="button" color="white">
                  {data.snippet.title.length > 30
                    ? `${data.snippet.title.slice(0, 30)}...`
                    : data.snippet.title}
                </Typography>
              </Tooltip>
            </Link>
          </Grid>
          <Grid item>
            <Link
              to={
                data.snippet.channelId
                  ? `/channel/${data.snippet.channelId}`
                  : demoChannelUrl
              }
              data-id={id}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Tooltip title={data.snippet.channelTitle}>
                  <Typography variant="subtitle2" color="gray">
                    {data.snippet.channelTitle.slice(0, 60)}
                  </Typography>
                </Tooltip>

                <CheckCircle sx={{ fontSize: 12, ml: 1, color: "gray" }} />
              </Box>
            </Link>
          </Grid>

          <Grid item mt={3}>
            <Link to={id ? `/video/${id}` : demoVideoUrl} data-id={id}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography
                  variant="body2"
                  color="gray"
                  width={"calc(100% - 40px)"}
                  sx={{
                    height: 40,
                    overflow: "hidden",
                  }}
                >
                  {data.snippet.description.length > 120
                    ? `${data.snippet.description.slice(0, 120)}...`
                    : data.snippet.description}
                </Typography>
              </Box>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
