import React from 'react';
import { Input, TableCell } from '@mui/material';

const ShiftTimeInput = ({ shiftPart, onChange, shift, index }) => {
  return (
    <TableCell align="center" >
      <Input
        type="number"
        name="hours"
        value={shift[shiftPart].hours}
        onChange={(e) => onChange(e, index, shiftPart, 'hours')}
        sx={{ width: '1rem', fontSize: '13px' }}
      />
      :
      <Input
        size="small"
        name="minutes"
        value={shift[shiftPart].minutes}
        onChange={(e) => onChange(e, index, shiftPart, 'minutes')}
        sx={{ width: '1rem', fontSize: '13px' }}
      />
      <select
        name="period"
        value={shift[shiftPart].period}
        onChange={(e) => onChange(e, index, shiftPart, 'period')}
        style={{ padding: '2.5px', border: 'none', fontSize: '13px', '-webkit-appearance': 'none' }}
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </TableCell>
  );
};

export default ShiftTimeInput;



const NewShiftTimeInput = ({ shiftPart, onChange, shift }) => {
  return (
    <TableCell align="center" >
      <Input
        type="number"
        name="hours"
        value={shift[shiftPart].hours}
        onChange={(e) => onChange(e, shiftPart, 'hours')}
        sx={{ width: '1rem', fontSize: '13px' }}
      />
      :
      <Input
        size="small"
        name="minutes"
        value={shift[shiftPart].minutes}
        onChange={(e) => onChange(e, shiftPart, 'minutes')}
        sx={{ width: '1rem', fontSize: '13px' }}
      />
      <select
        name="period"
        value={shift[shiftPart].period}
        onChange={(e) => onChange(e, shiftPart, 'period')}
        style={{ padding: '2.5px', border: 'none', fontSize: '13px', '-webkit-appearance': 'none' }}
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </TableCell>
  );
};

export {NewShiftTimeInput}
