import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import genresData from "../../data/genre.json";
import { useState } from "react";

const Genre = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleGenreClick = (id) => {
    // Handle the click event for each genre
    console.log(`Genre clicked with id: ${id}`);
    // Add your logic here
  };

  return (
    <List>
      <ListItem disablePadding onClick={handleToggle}>
        <ListItemButton>
          <ListItemIcon>
            {open ? (
              <ExpandLessIcon sx={{ color: "#aaa" }} />
            ) : (
              <ExpandMoreIcon sx={{ color: "#aaa" }} />
            )}
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
              onClick={() => handleGenreClick(id)}
            >
              <ListItemButton>
                <ListItemIcon sx={{ color: "#aaa" }} />
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
