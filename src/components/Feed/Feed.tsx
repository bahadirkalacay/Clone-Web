import { Box, Stack, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { fetchFromAPI } from "../../utils/fetch";
import { VideoProps } from "../../utils/types";
import { Sidebar } from "./Sidebar";
import { VideoFeed } from "./VideoFeed";

type Props = {};
export const Feed: FC<Props> = (props) => {
  const [videos, setVideos] = useState<VideoProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    window.localStorage.getItem("selectedCategory") || "New"
  );
  useEffect(() => {
    fetchFromAPI(
      `search?part=snippet&q=${selectedCategory.toLocaleLowerCase()}`
    ).then((data) => setVideos(data.items));

    window.localStorage.setItem("selectedCategory", selectedCategory);
  }, [selectedCategory]);

  return (
    <Stack
      direction={{ sm: "column", md: "row" }}
      sx={{ height: "calc(100vh - 88px)" }}
    >
      <Box
        sx={{
          height: { sm: "auto", md: "100%" },
          borderRight: "1px solid #3d3d3d",

          width: { md: "20%", xs: "auto" },
          p: { sm: 0, md: 3 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box
        sx={{
          height: { sm: "auto", md: "100vh" },
          p: { sm: 0, md: 3 },
          mt: { xs: 3, md: 0 },
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          mb={2}
          ml={0.5}
          fontWeight={"bold"}
          sx={{ color: "red" }}
        >
          <span style={{ color: "#fff" }}>{selectedCategory}</span> videos
        </Typography>
        <VideoFeed data={videos} justifyContent="flex-start" />
      </Box>
    </Stack>
  );
};
