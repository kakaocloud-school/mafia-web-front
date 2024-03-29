import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';

/** @jsxImportSource @emotion/react */

function ListItem({ children, className, css }) {
  return (
    <span className={className} css={css}>
      {children}
    </span>
  );
}

ListItem.defaultProps = {
  className: '',
  css: emotionCss({}),
};

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
};

export default ListItem;
