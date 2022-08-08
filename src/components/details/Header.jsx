import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Search from "./Search";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#000000" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 0 }}
          >
            <GitHubIcon
              sx={{ fontSize: { md: 40, xs: 34 }, ml: { md: -1, xs: -0.4 } }}
            />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
          >
            GitHub User's Favourite Programming Language{" "}
          </Typography>
          <Search />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
