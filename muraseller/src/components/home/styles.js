import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  upper: {
    height: '60px',
    width: '100%',
  },
  maintitle: {
    fontSize: '40px',
    color: 'black',
    marginTop: '10px',
  },
  subtitle: {
    color: 'gray',
    fontSize: '20px',
    textAlign: 'center',
    fontFamily: 'Cursive',
  },
  hottitle: {
    color: 'Crimson',
    fontFamily: 'Monospace',
    fontSize: '30px',
    margin: '10px',
    animation: 'myfirst 5s linear 2s infinite alternate',
  },
  checkoutButton: {
    minWidth: '150px',
    margin: '15px',
  },
  
}));