import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import {
  AccountCircleOutlined,
  AdminPanelSettings,
  CategoryOutlined,
  ConfirmationNumberOutlined,
  EscalatorWarningOutlined,
  FemaleOutlined,
  LoginOutlined,
  MaleOutlined,
  SearchOutlined,
  VpnKeyOutlined,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { AuthContext, UiContext } from "../../context";

const AdminMenu = () => {
  return (
    <>
      <Divider />
      <ListSubheader>Admin Panel</ListSubheader>

      <ListItem button>
        <ListItemIcon>
          <CategoryOutlined />
        </ListItemIcon>
        <ListItemText primary={"Productos"} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ConfirmationNumberOutlined />
        </ListItemIcon>
        <ListItemText primary={"Ordenes"} />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <AdminPanelSettings />
        </ListItemIcon>
        <ListItemText primary={"Usuarios"} />
      </ListItem>
    </>
  );
};

const SideMenu = () => {
  const { isMenuOpen, toogleSideMenu } = useContext(UiContext);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const { isLoggedIn, user, logout } = useContext(AuthContext);

  const handleNavigateToSearch = () => {
    if (searchTerm.trim().length === 0) return;

    navigateTo(`/search/${searchTerm}`);
  };

  const navigateTo = (path: string) => {
    toogleSideMenu();
    router.push(path);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <Drawer
      open={isMenuOpen}
      anchor="right"
      onClose={toogleSideMenu}
      sx={{ backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          <ListItem>
            <Input
              type="text"
              value={searchTerm}
              onKeyPress={(e) =>
                e.key === "Enter" ? handleNavigateToSearch() : null
              }
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar..."
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleNavigateToSearch}>
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              }
            />
          </ListItem>

          {isLoggedIn && (
            <>
              <ListItem button>
                <ListItemIcon>
                  <AccountCircleOutlined />
                </ListItemIcon>
                <ListItemText primary={"Perfil"} />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <ConfirmationNumberOutlined />
                </ListItemIcon>
                <ListItemText primary={"Mis Ordenes"} />
              </ListItem>
            </>
          )}

          <ListItem button sx={{ display: { xs: "", sm: "none" } }}>
            <ListItemIcon>
              <MaleOutlined />
            </ListItemIcon>
            <ListItemText
              primary={"Hombres"}
              onClick={() => navigateTo("/category/men")}
            />
          </ListItem>

          <ListItem button sx={{ display: { xs: "", sm: "none" } }}>
            <ListItemIcon>
              <FemaleOutlined />
            </ListItemIcon>
            <ListItemText
              primary={"Mujeres"}
              onClick={() => navigateTo("/category/women")}
            />
          </ListItem>

          <ListItem button sx={{ display: { xs: "", sm: "none" } }}>
            <ListItemIcon>
              <EscalatorWarningOutlined />
            </ListItemIcon>
            <ListItemText
              primary={"Niños"}
              onClick={() => navigateTo("/category/kids")}
            />
          </ListItem>

          {!isLoggedIn ? (
            <ListItem
              button
              onClick={() =>
                navigateTo(`/api/auth/signin?page=${router.asPath}`)
              }
            >
              <ListItemIcon>
                <VpnKeyOutlined />
              </ListItemIcon>
              <ListItemText primary={"Ingresar"} />
            </ListItem>
          ) : (
            <ListItem button onClick={handleLogout}>
              <ListItemIcon>
                <LoginOutlined />
              </ListItemIcon>
              <ListItemText primary={"Salir"} />
            </ListItem>
          )}

          {user?.role === "admin" && <AdminMenu />}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideMenu;
