
import React from "react";

// Page Components
import AboutUs from "./AboutUs";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Material UI Components
import {
  Box,
  Typography
} from "@mui/material";

// Icons
import {
  Person,
  Group,
  Security,
  Speed,
  AdminPanelSettings,
  Settings
} from "@mui/icons-material";

// Features data
const features = [
  {
    title: "Concurrent Editing",
    description: "Enable real-time, multi-user collaboration on user profiles.",
    icon: <Person color="primary" />,
  },
  {
    title: "Team Collaboration",
    description: "Work together seamlessly with your team.",
    icon: <Group color="primary" />,
  },
  {
    title: "Secure",
    description: "Your data is protected with us.",
    icon: <Security color="primary" />,
  },
  {
    title: "Fast Performance",
    description: "Optimized for speed and smooth experiences.",
    icon: <Speed color="primary" />,
  },
  {
    title: "Access Management",
    description: "Streamlined control over user permissions and roles.",
    icon: <AdminPanelSettings color="primary" />,
  },
  {
    title: "Multi-Language Support",
    description: "Work in language of your choice.",
    icon: <Settings color="primary" />,
  },
];

function HomePage() {
  return (
    <>
      <Navbar />

      {/* Intro Section with Image and Text */}
<Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    justifyContent: "center",
    py: 10,
    px: 4,
    bgcolor: "#ffffff",
    gap: 6,
  }}
>
  {/* Left Side - Image */}
  <Box
    component="img"
    src={require("../images/forhome.jpg")}
    alt="Collaboration Illustration"
    sx={{
      width: { xs: "100%", md: "50%" },
      borderRadius: 4,
    }}
  />

  {/* Right Side - Text */}
  <Box sx={{ textAlign: { xs: "center", md: "left" }, maxWidth: "600px" }}>
    <Typography
      variant="h3"
      fontWeight="bold"
      sx={{ color: "#012A4A", mb: 2 }}
    >
      CoWork — Collaborative Code Editing Made Simple
    </Typography>
    <Typography
      variant="h6"
      sx={{ color: "#555", mb: 4 }}
    >
      Empower your development team with a real-time collaborative code editor.
      Share, edit, and build code together — all in one seamless, secure,
      and high-performance environment.
    </Typography>
    {/* Optional CTA */}
    {/* 
    <Button variant="contained" color="primary" size="large">
      Get Started
    </Button> 
    */}
  </Box>
</Box>


      {/* Features Section */}
      <Box sx={{ py: 6, px: 4, bgcolor: "#F9FAFB" }}>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: "#012A4A", mb: 1 }}
          >
            Our Features
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#666" }}>
            Explore what makes CoWork a great platform for your team
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
            gap: 4,
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                p: 3,
                borderRadius: 4,
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                bgcolor: "white",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 6px 24px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Box sx={{ fontSize: 40, mb: 2 }}>{feature.icon}</Box>
              <Typography
                fontWeight="bold"
                variant="h6"
                gutterBottom
                sx={{ color: "#012A4A" }}
              >
                {feature.title}
              </Typography>
              <Typography sx={{ color: "#555" }}>{feature.description}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <AboutUs />
      <Footer />
    </>
  );
}

export default HomePage;
