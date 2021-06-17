import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
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
prepricestyle: {
    fontSize: '15px',
    textDecoration: 'line-through',
    color: 'gray',
},
detailName: {
    color: 'black',
    marginTop: '20px',
    marginBottom: '20px',
    fontFamily: 'Cursive',
},
detailMedia: {
    borderRadius: '10px'
},
descriptionsty: {
  color: 'gray',
  fontFamily: 'Monospace',
  border: '2px',
  margin: '20px',
}
  

  
}));