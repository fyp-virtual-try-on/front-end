import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {"Copyright © "}
      <Link color="white" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(
  step,
  cardName,
  setCardName,
  firstName,
  LastName,
  address1,
  address2,
  city,
  country,
  cardNumber,
  setCardNumber,
  setFirstName,
  setLastName,
  setAddress1,
  setAddress2,
  setCity,
  setCountry
) {
  switch (step) {
    case 0:
      return (
        <AddressForm
          firstName={firstName}
          LastName={LastName}
          address1={address1}
          setAddress1={setAddress1}
          setFirstName={setFirstName}
          setLastName={setLastName}
        />
      );
    case 1:
      return (
        <PaymentForm
          cardName={cardName}
          cardNumber={cardNumber}
          setCardName={setCardName}
          setCardNumber={setCardNumber}
        />
      );
    case 2:
      return (
        <Review
          firstName={firstName}
          LastName={LastName}
          address1={address1}
          cardName={cardName}
          cardNumber={cardNumber}
        />
      );
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [cardName, setCardName] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [LastName, setLastName] = React.useState("");
  const [address1, setAddress1] = React.useState("");
  const [address2, setAddress2] = React.useState("");
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container
        component="main"
        maxWidth="sm"
        sx={{ mb: 4 }}
      >
        <Paper
          variant="outlined"
          sx={{
            my: { xs: 3, md: 6 },
            p: { xs: 2, md: 3 },
            background: " linear-gradient(180deg,#fdc50feb 26.71%, #fb982f00 99.36%)",
          }}
        >
          <Typography
            
            component="h1"
            variant="h4"
            align="center"
          >
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(
                activeStep,
                cardName,
                setCardName,
                firstName,
                LastName,
                address1,
                address2,
                city,
                country,
                cardNumber,
                setCardNumber,
                setFirstName,
                setLastName,
                setAddress1,
                setAddress2,
                setCity,
                setCountry
              )}
              ,
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button
                    className="button"
                    style={{  backgroundColor: "black", color: "white"}}
                    onClick={handleBack}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Back
                  </Button>
                )}

                <Button
                  className="button"
                  style={{ backgroundColor: "black", color: "white" }}
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        {/* <Copyright /> */}
      </Container>
    </ThemeProvider>
  );
}
