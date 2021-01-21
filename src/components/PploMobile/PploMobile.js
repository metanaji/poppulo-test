import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PplTextField from "../PplTextField/PplTextField";
import PploSocialLinks from "../PploSocialLinks/PploSocialLinks";
import {DropzoneArea} from 'material-ui-dropzone';
import PploCheckBox from "../PploCheckBox/PploCheckBox";
import PploButton from "../PploButton/PploButton";
import { useForm } from "react-hook-form";
import useStyles from './PploMobileCss.js';
function handleChange(files){

 }
function PplMobile() {
const { register, handleSubmit, errors } = useForm();
const [formData, setFormData] = useState({});
const onSubmit = data => {setFormData(data)};

const classes = useStyles();
  return (
    <>
    <div className={classes.root}>

    <div className={classes.pageWrapper}>
        <h1>Create new Post</h1>

       <Grid container>      
        <Grid item xs={7}>
          <div>
          <form noValidate onSubmit={handleSubmit(onSubmit)} >
            <PplTextField label={'Title'} name="title" register={register} defaultValue="10 Trends and Challenges for Employee Communications in 2020" charLimit={120} />
            <PplTextField label={'Author'} name="author" register={register} charLimit={60} />
            <PploCheckBox label="Featured Post" register={register} defaultValue={{"featuredPost":true}} />
            <PplTextField label="Post Body" name="postBody" register={register} rows={12} />
            <Grid item xs={12} className={classes.btnContainer}>
                <PploButton label="Save Draft" type="button"  variant="contained" /> <PploButton label="Publish Now" type="submit" variant="contained" color="primary" />
            </Grid>
          </form>
          </div>
          <Grid container xs={12}>{formData.author}</Grid>
        </Grid>
        <Grid item xs={5} className={classes.rightCol}>
        <DropzoneArea
        dropzoneText="Drag a file here Choose from Media Library or Browse(jpg,png,gif)"
        onChange={handleChange}
        />
        <div className={classes.additionalInfo}><span>Drop up to 3 pdfs or click to browse</span></div>
          <PploSocialLinks/>
        </Grid>
      </Grid>
    </div>
    </div>
    </>
  );
}

export default PplMobile;