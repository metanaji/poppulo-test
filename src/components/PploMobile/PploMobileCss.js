import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    h1:{
    color:"#042e54",
    },
  dropWrapper:{
    background:"#E5E5E5",
  },
  dropzoneParagraphClass:{
  fontSize:"14px",
  },
  root: {
    flexGrow: 1,
  },
   paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing(2),
  },
  pageWrapper:{
    margin:theme.spacing(0,5),
  },
  rightCol:{
    padding:theme.spacing(0,0,0,5),
  },
 floatRight:{float: 'right'},
 btnContainer:{textAlign:'right', margin:theme.spacing(3, 0), display:'block',
 '&& button':{
    margin:theme.spacing(0,0,0,1)
 }
 },
 additionalInfo:{
    background: '#E5E5E5',
     padding:theme.spacing(3),
     margin:theme.spacing(4,0),
     color:'#404447',
 },
 attachIcon:{
    verticalAlign: 'middle',
    marginRight:'4px',
 },
}));

export default useStyles;