import React from 'react';

import Aux from '../Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

const layout = props => {
  let toolbar = null
  if (props.isAuthenticated) {
    toolbar = (
      <Toolbar
        history={props.history}
        isAuthenticated={props.isAuthenticated}
        userId={props.userId}
      />
    )
  }

  return (
    <Aux>
      {toolbar}
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  );
};

export default layout
