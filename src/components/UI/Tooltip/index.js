import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './Tooltip.module.css';

const  Tooltip = ({ children, content, style, position }) => {
  
    const [visible, setVisible] = useState(false)
    
    const cls = [classes.tooltip]
    cls.push(classes[position])

    return (
      <span className={classes.tooltipWrapper}>
        { visible && <span style={style} className={cls.join(' ')}>{content}</span> }
        <span
          className={classes.targetElement}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >{children}</span>
      </span>
    );
}


Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.string,
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    style: PropTypes.objectOf(PropTypes.string),
  }

Tooltip.defaultProps = {
    content: 'Tooltip content',
    style: {},
    position: 'top'
  }

export default Tooltip;
