import React from 'react';
import './index.less';
import { useHistory } from 'react-router';

function Resume() {
  const history = useHistory();
  return (
    <div styleName="root">
      <p
        onClick={() => {
          history.push('/');
        }}
      >
        11
      </p>
    </div>
  );
}

export default Resume;
