import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

}));

export default function Resume() {
  const classes = useStyles();
  return (
    <div>
		<iframe
				src="https://drive.google.com/file/d/183TmG60HDvDAb1upmzMF-Y_6V9fl-8WK/preview"
				style={{width: '80%', height: '45rem'}}
			/>
		</div>
  )
}
