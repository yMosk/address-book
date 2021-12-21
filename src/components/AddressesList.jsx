import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AddressCard from "./AddressCard";

export default function AddressesList() {
  return (
    <Container>
      <Grid item xs={4}>
        <AddressCard />
      </Grid>
    </Container>
  );
}
