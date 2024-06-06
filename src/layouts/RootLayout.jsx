import { Outlet } from "react-router-dom";
import Navbar from "/src/components/Navbar";
import { useTheme } from "../components/Themes";
import { Box } from "@mui/material";

const RootLayout = () => {
  const { theme } = useTheme();

  return (
    <Box className={`${theme}-theme`}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </Box>
  );
};

export default RootLayout;
