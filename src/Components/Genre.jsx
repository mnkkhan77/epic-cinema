import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import genresData from "../DataProvider/genre.json";

const Genre = () => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItem disablePadding onClick={handleToggle}>
        <ListItemButton>
          <ListItemIcon>
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemIcon>
          <ListItemText primary="Genre" />
        </ListItemButton>
      </ListItem>
      {open && (
        <List
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 0,
          }}
        >
          {/* Render genres dynamically from the JSON data */}
          {genresData.map(({ id, name }) => (
            <ListItem
              key={id}
              disablePadding
              sx={{
                boxSizing: "border-box",
                fontSize: "12px",
                marginRight: "3px",
              }}
            >
              <ListItemButton>
                <ListItemIcon sx={{ color: "#aaa" }}>
                  {/* Add icon if needed */}
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </List>
  );
};

export default Genre;
