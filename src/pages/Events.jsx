import { Box, Typography, Paper } from "@mui/material";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { eventdata } from "./eventsdata";
import EventInfo from "../components/events/EventInfo";

const bookedStyle = { backgroundColor: "#461622", color: "white" };

const Events = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [month, setMonth] = useState();
  const setDateOnCalendar = (dates) => {
    const data = dates.map((date) => new Date(date));
    setCurrentEvents([...data]);
    setMonth(data[0]);
  };
  return (
    <Box
      sx={{
        backgroundColor: "brand.lightgrey",
        display: "flex",
        justifyContent: "center",
        height: "92%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 0 16px",
          height: "100%",
          width: { xs: "100%", sm: "100%", md: "72%", lg: "72%" },
          overflowY: "auto",
        }}
      >
        <Typography
          sx={{
            typography: { xs: "h5", sm: "h5", md: "h3", lg: "h3" },
            color: "brand.brown",
            marginBottom: "16px",
            width: "100%",
          }}
        >
          PROXIMOS EVENTOS
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            paddingTop: "16px",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "64%", lg: "64%" },
              margin: "8px",
            }}
          >
            {eventdata.map((event) => (
              <Accordion
                square
                key={event.title}
                onChange={() => setDateOnCalendar([...event.dates])}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={event.title}
                  id={event.title}
                  sx={{
                    borderRadius: "0 !important",
                    backgroundColor: "background.primary",
                    color: "brand.lightgrey",
                  }}
                >
                  <Typography sx={{ width: "80%", flexShrink: 0 }}>
                    {event.title}
                  </Typography>
                  <Typography sx={{ color: "brand.lightgrey" }}>
                    {event.dates[0]}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <EventInfo event={event} />
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          <Paper
            square
            elevation={3}
            sx={{
              backgroundColor: "brand.lightgrey",
              width: { xs: "100%", sm: "100%", md: "32%", lg: "32%" },
              minHeight: "330px",
              minWidth: "280px",
              padding: "8px 16px 8px 16px",
              margin: "8px",
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "fixed",
                overflow: "auto",
              }}
            >
              <DayPicker
                mode="single"
                modifiers={{ booked: currentEvents }}
                modifiersStyles={{ booked: bookedStyle }}
                month={month}
              />
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Events;
