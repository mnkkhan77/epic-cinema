import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import Genre from "../helpers/Genre";
import Years from "../helpers/Years";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../../logo123.jpg";
import { useMediaQuery } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

const drawerWidth = 320;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  backgroundColor: "#282828",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  justifyContent: "flex-end",
}));

export default function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [showOverlay, setShowOverlay] = useState(false);
  const [isSearchBarOPen, setIsSearchBarOPen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setShowOverlay(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setShowOverlay(false);
  };

  const handleClick = (path) => {
    navigate(path.path);
    handleDrawerClose();
  };

  const handleSearch = () => {
    const formattedQuery = query.replace(/\s+/g, "%");
    if (formattedQuery.trim() !== "") {
      navigate(`/search?query=${formattedQuery}`);
    }
    setIsSearchBarOPen(false);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchBarOpen = () => {
    setIsSearchBarOPen(true);
  };
  const handleSearchBarClose = () => {
    setIsSearchBarOPen(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {isSearchBarOPen ? (
        <AppBar
          position="fixed"
          style={{ zIndex: 1400, backgroundColor: "#282828" }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="back"
              onClick={handleSearchBarClose}
            >
              <ArrowBack />
            </IconButton>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                borderRadius: 4,
                backgroundColor: "#000",
                marginRight: 16,
                marginLeft: 0,
                width: "90%",
              }}
            >
              <InputBase
                placeholder="Search…"
                style={{
                  color: "inherit",
                  paddingLeft: "48px",
                }}
                inputProps={{ "aria-label": "search" }}
                value={query}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                fullWidth
              />
              <IconButton
                edge="end"
                color="inherit"
                aria-label="search"
                onClick={handleSearch}
                style={{ position: "absolute", right: 10 }}
              >
                <SearchIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      ) : (
        <>
          <AppBar position="fixed" open={open}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{ mr: 2, ...(open && { display: "none" }) }}
                >
                  <MenuIcon />
                </IconButton>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "10px",
                    }}
                  >
                    <div>
                      <img src={Logo} width="40vw" height="40vh" alt="Logo" />
                    </div>
                    <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      sx={{ color: "#aaa", marginRight: "10px" }}
                    >
                      Epic Cinema
                    </Typography>
                  </div>
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  width: "60%",
                }}
              >
                {!isSmallScreen && (
                  <InputBase
                    placeholder="Search..."
                    inputProps={{ "aria-label": "search" }}
                    sx={{
                      backgroundColor: "#000",
                      color: "#aaa",
                      px: 3,
                      width: "80%",
                    }}
                    value={query}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                  />
                )}
                <IconButton
                  color="inherit"
                  aria-label="search"
                  onClick={!isSmallScreen ? handleSearch : handleSearchBarOpen}
                >
                  <SearchIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Link to="/log_in">
                  <Button
                    color="inherit"
                    startIcon={<PersonIcon />}
                    sx={{ color: "#aaa" }}
                  >
                    {isSmallScreen ? "" : "Login"}
                  </Button>
                </Link>
              </Box>
            </Toolbar>
          </AppBar>
        </>
      )}

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            backgroundColor: theme.palette.grey[900],
            color: "#aaa",
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        ModalProps={{ disablePortal: true }}
      >
        {showOverlay && (
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            onClick={handleDrawerClose}
          />
        )}

        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon style={{ color: "#aaa" }} />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider style={{ background: "#424242" }} />
        <List>
          {[
            { text: "Home", icon: <HomeIcon />, path: "/" },
            // {
            //   text: "Top Rated IMDB",
            //   icon: <MovieFilterIcon />,
            //   path: "/toprated",
            // },
            { text: "Movies", icon: <MovieIcon />, path: "/movie" },
            { text: "TV Shows", icon: <TvIcon />, path: "/tv" },
          ].map(({ text, icon, path }, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleClick({ path })}>
                <ListItemIcon
                  sx={{
                    color: "#aaa",
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider style={{ background: "#424242" }} />
        <Genre />
        <Divider style={{ background: "#424242" }} />
        <Years />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
