import { Link as ReactLink } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

type LinkProps = {
  to: string;
  text: string;
  isNext?: boolean;
  isPrev?: boolean;
};
const Link = ({ to, text, isNext, isPrev }: LinkProps) => {
  return (
    <ReactLink to={to} style={{ textDecoration: 'none' }}>
      <MUILink
        sx={{
          color: 'white',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'right',
        }}
      >
        {isPrev && <NavigateBefore />} {text} {isNext && <NavigateNext />}
      </MUILink>
    </ReactLink>
  );
};

export default Link;
