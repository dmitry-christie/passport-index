import React from 'react';
import './CitizenshipsTable.css';
import styled from 'styled-components'

class ProfileButton extends React.Component {
    render() {
    return <div className={`profile-button ${ this.props.selected }`}>I am a {this.props.profile}!</div>;
  }
}

export default ProfileButton;