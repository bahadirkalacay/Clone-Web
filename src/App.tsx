import { Box } from "@mui/material";
import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Feed,
  Navbar,
  VideoDetail,
  SearchFeed,
  ChannelDetail,
} from "./components";

type Props = {};

const App: FC<Props> = (props) => {
  return (
    <BrowserRouter>
      <Box sx={{ background: "#141414" }}>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Feed />} />
          <Route path={"/video/:id"} element={<VideoDetail />} />
          <Route path={"/channel/:id"} element={<ChannelDetail />} />
          <Route path={"/search/:searchTerm"} element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;