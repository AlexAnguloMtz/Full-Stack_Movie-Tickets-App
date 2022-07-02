import { DateDropdown } from "../DateDropdown/DateDropdown";
import './DatePicker.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export const DatePicker = ({initialDate, onDateChange}: {initialDate: Date, onDateChange: Function}) => (
    <section className="datePicker">
        <h1 className="datePicker__heading"> 
            <FontAwesomeIcon className="datePicker__calendarIcon" 
                             icon={faCalendarDays} />
             Date
        </h1>
        <DateDropdown initialDate={initialDate}
                      numberOfDatesToRender={10}
                      onDateChange={onDateChange}/>
    </section>
);

const today = (): Date => {
    return new Date();
}
