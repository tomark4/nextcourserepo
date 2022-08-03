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
import React, { useContext } from "react";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import UiContext from "../../context/ui/UiContext";

const menuItem = ["Inbox", "Starred", "Send email", "Drafts"];

const Sidebar = () => {
  const { closeSideBar, sideMenuOpen } = useContext(UiContext);

  return (
    <Drawer anchor="left" open={sideMenuOpen} onClose={closeSideBar}>
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
