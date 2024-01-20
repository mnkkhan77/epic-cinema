import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import yearsData from "../../DataProvider/years.json";
import { useState } from "react";

const Years = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
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
          <ListItemText primary="Years" />
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
          {yearsData.map(({ id, year }) => (
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
                <ListItemText primary={year} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </List>
  );
};

export default Years;
