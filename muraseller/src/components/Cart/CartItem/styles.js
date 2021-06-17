import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  pricestyle: {
    fontSize: '15px',
    color: 'blue',
 },
 namestyle: {
    fontSize: '20px',
    whiteSpace: 'nowrap',
    width: '200px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));
