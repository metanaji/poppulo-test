import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    background: 'rgba(0, 0, 0, 0.09)',
     padding:theme.spacing(3),
     margin:theme.spacing(4,0),
 },
}));

export default useStyles;