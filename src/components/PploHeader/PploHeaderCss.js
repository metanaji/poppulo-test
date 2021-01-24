import { makeStyles } from '@material-ui/core/styles';
const PploHeaderCss = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  floatRight:{float:'right', fontSize:'12px'},
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  appBarStyling:{
   boxShadow: 'none',
   backgroundColor:'#00325a',
   padding:'0',
   margin:'0',
  },
   topMenu:{
    listStyle:'none',
    margin:'0',
    padding:'0',
     "& >li" :{
        display:'inline-block',
        margin:theme.spacing(0,1,0,1),
        padding:'0',
        "& >a" :{
        color:'#fff',
        textDecoration:'none',
        height:'64px',
        display:'box',
        boxAlign: 'center',
        padding:theme.spacing(0,2,0,2),
        },
         "& >a.active": {
            backgroundColor: '#3cdcd2',
            color:'#00325a',
         },
    },
  },

}));

export default PploHeaderCss;