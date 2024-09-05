import React from 'react';
import { MuiFileInput } from 'mui-file-input';

function FilePicker() {
  const [value, setValue] = React.useState(null);

  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  return <MuiFileInput value={value} onChange={handleChange} label="Archivo" />;
}

export default FilePicker;
