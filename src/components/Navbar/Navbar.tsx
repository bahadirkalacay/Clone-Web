import { FC } from "react";
import { Stack, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "..";
import logo from "../../assets/logo.webp"
import { borderRadius } from "@mui/system";

type Props = {};

const Root = styled(Stack)(({ theme }) => ({
  background: "#0000",
}));

export const Navbar: FC<Props> = (props) => {
  return (
    <Root
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
    >
      <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt={"Logo"} height={55} style={{ marginTop: "-10px", paddingLeft: "15px" }} />
      </Link>
      <SearchBar />
      <Link to={"/"} className="login-button" >
        Login
      </Link>
    </Root>
  );
};
