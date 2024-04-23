import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
// TanStack Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "react-scroll-to-top";
const queryClient = new QueryClient();




ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ScrollToTop
        smooth
        component={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white" // Set the fill color
            style={{
              display: "block", // Ensure SVG is treated as a block element
              margin: "auto", // Center horizontally
              zIndex: "1000",
            }}
          >
            <path d="M12 8l-8 8h16l-8-8z" />
          </svg>
        }
        style={{
          background: "#ad343e",
          boxShadow: "1px 2px 25px rgba(0, 0 , 0, 0.5)",
          width: "50px",
          height: "50px",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "flex", // Use flexbox to center vertically
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          borderRadius: "50%", // Border radius for a circular button
        }}
      />
    </QueryClientProvider>
  </AuthProvider>
);
