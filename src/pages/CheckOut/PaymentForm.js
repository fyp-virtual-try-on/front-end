import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import visa from "./../../images/visa.png";
import jazzCash from "./../../images/Jazz.svg";
import easypaisa from "./../../images/easypaisa.png";
import cod from "./../../images/cod.png";

export default function PaymentForm({
  cardName,
  setCardName,
  cardNumber,
  setCardNumber,
}) {
  const handleChange = (event) => {
    setCardName(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography  variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Payment method</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={cardName}
              variant="standard"
              label="payment method"
              onChange={handleChange}
            >
              <MenuItem value={"Visa"}>
                {" "}
                <img
                  height={"40px"}
                  style={{ marginRight: "5px" }}
                  src={cod}
                  alt="visa"
                />{" "}
                Cash On Delivery
              </MenuItem>
              <MenuItem value={"JazzCash"}>
                <img
                  height={"30px"}
                  style={{ marginRight: "5px" }}
                  src={jazzCash}
                  alt="visa"
                />{" "}
              </MenuItem>
              <MenuItem value={"EasyPaisa"}>
                <img
                  height={"30px"}
                  style={{ marginRight: "5px" }}
                  src={easypaisa}
                  alt="visa"
                />{" "}
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            sx={{ color: "black" }}
            control={
              <Checkbox
                sx={{ color: "black" }}
                color="secondary"
                name="saveCard"
                value="yes"
              />
            }
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
