import React, {useEffect} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function PploCheckBox(props) {
const [state, setState] = React.useState(props.defaultValue);
    
   const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
     <FormControlLabel
        control={
          <Checkbox
            checked={state.featuredPost}
            onChange={handleChange}
            name="featuredPost"
            color="primary"
             inputProps={{ref:props.register}}
          />
        }
        label={props.label}
      />
  );
}

export default PploCheckBox;