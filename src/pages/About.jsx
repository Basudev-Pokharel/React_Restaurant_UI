import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box sx={{ width: "90%", mx: "auto", my: 2 }} flexGrow={1}>
      <Typography
        variant="h4"
        color="initial"
        textAlign={"center"}
        fontWeight={"bold"}
      >
        Welcome to my Restaurant
      </Typography>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia quis
        labore, praesentium accusantium voluptas quibusdam blanditiis
        perspiciatis, repudiandae error explicabo atque rerum, quidem minima.
        Neque quisquam aut obcaecati vitae animi tempora rem et cumque quidem ex
        vel nobis ullam aliquam veniam numquam sint quaerat, placeat libero
        alias quibusdam nihil minus fuga. Eos maiores vitae beatae quidem
        officiis maxime porro, est nisi ab consequatur corrupti nihil dolorum
        voluptas fugit. Dolore consequuntur voluptatum molestiae ea quas.
      </p>
    </Box>
  );
};

export default About;
