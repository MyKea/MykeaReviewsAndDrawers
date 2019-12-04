import React from 'react';

const CareInstructionsText = props => {
  if (props.careInstructions) {
    let instructionArray = props.instructions.split('\n');

    return (
      <div className="aw_drop_down_container">
        {instructionArray.map((line, i) => {
          return (
            <div className="aw_drop_down_text" key={'instruction' + i}>
              {line}
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div className="aw_drop_down_text aw_drop_down_container">Not Available</div>;
  }
};

export default CareInstructionsText;
