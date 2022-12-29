import { FC, SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";

type Props = {};

export const SearchBar: FC<Props> = (props) => {
  const [searchRequest, setSearchRequest] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (searchRequest !== "") {
      navigate(`/search/${searchRequest}`);

      setSearchRequest("");
    }
  };

  return (
    <Paper
      component={"form"}
      onSubmit={handleSubmit}
      sx={{
        padding: "0px 10px",
        borderRadius: 4,
        border: "1px solid #e3e3e3",
        boxShadow: "none",
        mr: { sm:2 },
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        value={searchRequest}
        onChange={(e) => setSearchRequest(e.target.value)}
      />
      <IconButton className="icon-button" type="submit" sx={{ color: "red", padding: "10px" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};
