import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { ChannelDetailsProps } from "../../utils/types";

type Props = {
  data: ChannelDetailsProps;
  id: string;
};

export const ChannelItem: FC<Props> = ({ data, id }) => {
  return (
    <Box data-id={id}>
      <Link to={`/channel/${id}`}>
        <CardContent
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Grid
            container
            direction={"column"}
            wrap="nowrap"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item>
              <CardMedia
                component="img"
                image={data?.snippet.thumbnails?.high.url}
                alt={data.snippet.title}
                sx={{
                  borderRadius: "50%",
                  width: 180,
                  height: 180,
                  mb: 2,
                }}
              />
            </Grid>

            <Grid item>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" color="white">
                  {data.snippet.title.slice(0, 60)}
                </Typography>
                <CheckCircle sx={{ fontSize: 12, ml: 1, color: "white" }} />
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Link>
    </Box>
  );
};
