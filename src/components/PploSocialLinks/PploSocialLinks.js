import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MicIcon from '@material-ui/icons/Mic';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function PploSocialLinks() {
  const classes = useStyles();
  const [value, setValue] = React.useState('audience');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root} showLabels>
      <BottomNavigationAction label="Audience" value="audience" icon={<PeopleAltIcon />} />
      <BottomNavigationAction label="Notifications" value="notifications" icon={<NotificationsIcon />} />
      <BottomNavigationAction label="Social" value="Social" icon={<ChatBubbleIcon />} />
      <BottomNavigationAction label="Campagins" value="campagins" icon={<MicIcon />} />
    </BottomNavigation>
  );
}