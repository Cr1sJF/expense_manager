import { ArrowForward } from '@mui/icons-material';
import { Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export type ActionCardProps = {
  name: string;
  description: string;
  url: string;
};

function ActionCard(props: ActionCardProps) {
  return (
    <Paper
      square={false}
      elevation={2}
      sx={{
        padding: '10px',
        m: 2,
        width: 300,
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="h4">{props.name}</Typography>

      <Typography>{props.description}</Typography>

      <Link
        to={props.url}
        style={{
          textDecoration: 'none',
          color: 'white',
          alignSelf: 'flex-end',
        }}
      >
        Ir <ArrowForward />
      </Link>
    </Paper>
  );
}

export default ActionCard;
