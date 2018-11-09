import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import theme from 'theme';

export default ({ onChange }) =>
  <div className="button fadein">
    <label htmlFor="single">
      <FontAwesomeIcon icon={faImage} color={theme.orangePrimary} size="3x"></FontAwesomeIcon>
    </label>
    <input type="file" id="single" onChange={onChange}/>
  </div>
