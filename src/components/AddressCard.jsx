import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function AddressCard() {
  const [name /*seName*/] = useState("Monica Geller");
  const [email /*setEmail*/] = useState("monica@test.com");
  const [phone /*setPhone*/] = useState(1234567890);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" component="div">
          {email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {phone}
        </Typography>
      </CardContent>
    </Card>
  );
}
