import React from 'react'
import PropTypes from 'prop-types'

import { LoadingWrapper, Loader } from './style';

const Loading = ({ size }) => (
  <LoadingWrapper>
    <Loader className="loader" size={size}>
      <svg className="circular" viewBox="25 25 50 50">
        <circle
          cx="50"
          cy="50"
          r="20"
          stroke="rgba(92, 157, 194, 0.1)"
          fill="none"
          strokeWidth="5"
        />
        <circle
          className="path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="5"
          strokeMiterlimit="10"
        />
      </svg>
    </Loader>
  </LoadingWrapper>
)

Loading.defaultProps = {
  size: '60',
}

Loading.propTypes = {
  size: PropTypes.string,
}

export default Loading
