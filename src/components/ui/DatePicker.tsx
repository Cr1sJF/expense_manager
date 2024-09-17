import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface DateSelectorProps {
  label: string;
  onChange: any;
  defaultValue?: any;
}
export default function DateSelector(props: DateSelectorProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={props.label}
        onChange={props.onChange}
      />
    </LocalizationProvider>
  );
}
