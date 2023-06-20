import { useEffect, useRef } from "react";
import Sidebar from "./components/layouts/Sidebar";
import styled from "styled-components";
import Topbar from "./components/layouts/Topbar";
import { Box, HeadingStyled } from "./components/ui/Elements";
import { routesConfig } from "./routes/routes";
import { useRoutes } from "react-router-dom";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import { loggedinUserApiThunk } from "./store/Slices/AuthSlice";
import Login from "./pages/Auth/Login";

function App() {
  const routes = useRoutes(routesConfig);
  const pageRef = useRef();
  const sidebarRef = useRef();
  const dispatch = useDispatch();

  const token = localStorage.adminToken;

  if (token) {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      localStorage.removeItem("adminToken");
      window.location = "/login";
    }
    dispatch(loggedinUserApiThunk());
  }

  useEffect(() => {
    (function () {
      window.addEventListener("resize", () => {
        const rect = pageRef.current.getBoundingClientRect();
        if (rect.x > 0) {
          sidebarRef.current.style.left = rect.x + "px";
        } else {
          sidebarRef.current.style.left = "20px";
        }
      });
    })();
  }, []);

  return (
    <div>
      {token ? (
        <WrapperStyled className="mx-auto" ref={pageRef}>
          <Sidebar sidebarRef={sidebarRef} />
          <Box>
            <Topbar />
            <Box className="mt-3">{routes}</Box>
          </Box>
        </WrapperStyled>
      ) : (
        <Login />
      )}
    </div>
  );
}
const WrapperStyled = styled.main`
  padding: 20px 40px 20px 240px;
  max-width: 1366px;
`;

export default App;
