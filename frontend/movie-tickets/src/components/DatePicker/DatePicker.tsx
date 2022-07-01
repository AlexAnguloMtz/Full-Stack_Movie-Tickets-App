import { DateDropdown } from "../DateDropdown/DateDropdown";
import './DatePicker.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export const DatePicker = ({initialDate, onDateChange}: {initialDate: Date, onDateChange: Function}) => (
    <div className="datePicker">
        <h1 className="datePicker__heading"> 
            <FontAwesomeIcon className="calendarIcon" 
                             icon={faCalendarDays} />
             Date
        </h1>
        <DateDropdown initialDate={initialDate}
                      numberOfDatesToRender={10}
                      onDateChange={onDateChange}/>
    </div>
);

const today = (): Date => {
    return new Date();
}
