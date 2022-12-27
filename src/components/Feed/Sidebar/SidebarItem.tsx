import { Box, Button, styled, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  name: string;
  icon: React.ReactNode;
  id: number;
  selectedCategory: string;
  setSelectedCategory: (name: string) => void;
};

const Root = styled(Button)(({ theme }) => ({
  color: "#fff",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  "& .category-btn-icon": {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  "&:hover .category-btn-icon svg path": {
    color: "#fff",
  },

  [theme.breakpoints.up("md")]: {
    marginBottom: 8,
  },
}));

export const SidebarItem: FC<Props> = ({
  name,
  icon,
  id,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <Root
      className={"category-btn"}
      onClick={() => setSelectedCategory(name)}
      data-id={id}
      sx={{
        background: selectedCategory === name ? "#FC1503" : "transparent",
        width: "100%",
      }}
    >
      <Box
        className="category-btn-icon"
        sx={{
          "& svg path": {
            color: selectedCategory === name ? "#FFF" : "#f00",
          },
        }}
      >
        {icon}
      </Box>
      <Typography variant="button" className="category-btn-text">
        {name}
      </Typography>
    </Root>
  );
};
