import {
  Drawer,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import React from "react";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const menuItem = ["Inbox", "Starred", "Send email", "Drafts"];

const Sidebar = () => {
  return (
    <Drawer anchor="left" open={true} onClose={() => {}}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: 5 }}>
          <Typography variant="h4">Menu</Typography>
        </Box>
        <List>
          {menuItem.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 ? <AllInboxIcon /> : <AlternateEmailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {menuItem.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 ? <AllInboxIcon /> : <AlternateEmailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
