import React, { Fragment, useState } from "react";
import { DatePicker } from "@material-ui/pickers";


  
function BasicDatePicker(props) {
  const [selectedDate, handleDateChange] = useState(new Date());
    console.log(selectedDate)
  return (
    <MuiPickersUtilsProvider>
      <DatePicker
        label="Basic example"
        value={selectedDate}
        onChange={handleDateChange}
        animateYearScrolling
      />

      <DatePicker
        autoOk
        label="Clearable"
        clearable
        disableFuture
        value={selectedDate}
        onChange={handleDateChange}
      />

      <DatePicker
        disableFuture
        openTo="year"
        format="dd/MM/yyyy"
        label="Date of birth"
        views={["year", "month", "date"]}
        value={selectedDate}
        onChange={handleDateChange}
      />
    </MuiPickersUtilsProvider>
  );
}

export default BasicDatePicker;
