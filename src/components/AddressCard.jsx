import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function AddressCard(props) {
  const address = props.addressProp;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {address.Name}
        </Typography>
        <Typography variant="h5" component="div">
          {address.Email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {address.Phone}
        </Typography>
      </CardContent>
    </Card>
  );
}
