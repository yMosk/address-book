import * as React from "react";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AddressCard from "./AddressCard";
import * as services from "../AddressServices";

export default function AddressesList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    services
      .getAll()
      .then(onGetAllSuccess)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onGetAllSuccess = (response) => {
    setList(response.data.map(mapAddresses));
  };

  const mapAddresses = (address) => {
    return (
      <Grid item xs={3} key={`id${address.Id}`}>
        <AddressCard addressProp={address}></AddressCard>
      </Grid>
    );
  };

  return (
    <Container>
      <Grid container spacing={2}>
        {list}
      </Grid>
    </Container>
  );
}
