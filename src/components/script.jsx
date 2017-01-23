import React from 'react';
import { connect } from 'react-redux';

export default connect(state => ({
  script: state.script,
}))(({ script }) => {
  if (!script) {
    return null;
  }

  return (
    <pre className="script">
      {script}
    </pre>
  );
});
