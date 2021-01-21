import React, {useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import { useForm } from "react-hook-form";

function PplTextField(props) {
const { register } = useForm();
const [values, setValues] = React.useState({
    name: props.defaultValue
  });

  
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
      <>
      <TextField 
      fullWidth

      label={props.label}
        inputProps={{
          maxlength: props.charLimit
        },{ref:props.register}}
        value={values.name}
        helperText={props.charLimit && `${values?.name?.length||0}/${props.charLimit}`}
        onChange={handleChange("name")}
        variant="filled"
        multiline
        rows={props.rows}
        id={props.name}
        name={props.name}
        />
      </>
  );
}

export default PplTextField;