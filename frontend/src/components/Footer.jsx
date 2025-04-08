

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/AboutUs.css";

// Material UI
import { IconButton, Box, Typography, Grid } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Images
import HarshImg from "../images/members/Harsh.jpg"
import BhavyaImg from "../images/members/Bhavya.jpg"
import VaishvikImg from "../images/members/Vaishvik.jpg"



const teamMembers = [
  {
    name: "Harshvardhan Vajani",
    photo: HarshImg,
    linkedin: "https://www.linkedin.com/in/dishank-thakkar-835650279/",
  },
  {
    name: "Bhavya Patel",
    photo: BhavyaImg,
    linkedin: "https://www.linkedin.com/in/divyakumar-tandel/",
  },
  {
    name: "Vaishvik Patel",
    photo: VaishvikImg,
    linkedin: "https://www.linkedin.com/in/hardi-naik-76558b277/",
  }
];

function AboutUS() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div data-aos="fade-up">
      <section className="section services-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title">
                <h2 style={{ fontFamily: "Quicksand", fontSize: "3em" }}>About Us</h2>
                <p style={{ fontFamily: "Quicksand", fontSize: "1.1em" }}>
                  We are a team of three passionate developers focused on creating seamless, real-time collaborative tools that empower teams to work together effortlessly—anytime, anywhere.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-sm-6 col-lg-4 mb-4">
                <div
                  className="feature-box-1"
                  style={{
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                    borderRadius: "12px",
                    padding: "20px",
                    textAlign: "center",
                    backgroundColor: "#fff"
                  }}
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    style={{
                      border: "2px solid #012A4A",
                      height: 180,
                      width: 180,
                      objectFit: "cover",
                      borderRadius: "50%",
                      marginBottom: "15px",
                    }}
                  />
                  <h5 style={{ fontFamily: "Quicksand" }}>{member.name}</h5>
                  <div>
                   
                    <IconButton onClick={() => window.open(member.linkedin, "_blank")}>
                      <LinkedInIcon sx={{ color: "#012A4A" }} />
                    </IconButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          bgcolor: "#F2F2F2",
          color: "black",
          py: 4,
          px: { xs: 2, sm: 4 },
          mt: "auto",
          position: "relative",
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 2,
                borderBottom: "1px solid black",
              }}
            >
              Contact Us
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              Email: CoWork.service@gmail.com
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              We're always happy to help — feel free to reach out anytime!
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default AboutUS;
