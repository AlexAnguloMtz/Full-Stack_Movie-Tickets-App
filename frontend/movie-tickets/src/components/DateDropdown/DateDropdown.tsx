import { FormControl, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { ReactElement, useState } from "react";
import { DateFormatter } from "../../common/utility/DateFormatter";
import { FunctionalProgramming } from "../../common/utility/FunctionalProgramming";
import { DateLoader } from "./DateLoader";

export const DateDropdown = ({initialDate, numberOfDatesToRender: numberOfDates, onDateChange}: 
                             {initialDate: Date, 
                              numberOfDatesToRender: number, 
                              onDateChange: Function}) => {

    const formattedDateValue = DateFormatter.fromDateToDropdownValue(initialDate);

    const [selectedDate, setSelectedDate] = useState(formattedDateValue);

    const handleChange = (event: SelectChangeEvent): void => {
        const selectedDateValue: string = event.target.value;
        renderNewDate(selectedDateValue);
        
        const newDate: Date = DateFormatter.fromDropdownValueToDate(selectedDateValue);
        onDateChange(newDate);
    }

    const renderNewDate = (date: string) => {
        setSelectedDate(date);
    }

    const renderAllDates = (): ReactElement[] => (
        DateLoader.loadDatesStartingOn(initialDate, numberOfDates)
            .map(renderDate)
    );

    return (
    <FormControl fullWidth>
        <Select
            className='date-dropdown__select'
            value={selectedDate}
            onChange={handleChange}>
            {renderAllDates()}
        </Select>
    </FormControl>
    );
}

const renderDate = (date: Date): ReactElement => {
    const dateDropdownValue: string = DateFormatter.fromDateToDropdownValue(date);
    return  <MenuItem 
                      key={dateDropdownValue}
                      value={dateDropdownValue}>
                      {DateFormatter.formatRenderedDate(date)}   
            </MenuItem>;
}