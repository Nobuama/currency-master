import { FormControl, InputLabel, MenuItem } from "@mui/material";
import React from "react";

export const Select = ({name, func, usd, eur, value}) => {
  return(
    <FormControl sx={{ width: 100 }}>
        <InputLabel>{name}</InputLabel>
          <Select
            onChange={(e) => func(e.target.value)}
            displayEmpty
            value={value}
            label={name}
          >
            <MenuItem value={usd}>USD</MenuItem>
            <MenuItem value={eur}>EUR</MenuItem>
            <MenuItem value={1}>UAH</MenuItem>
          </Select>
        </FormControl>
  )
}