import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: false
    };
}
render (){
    return (
      <div className="Contact">
        
      <img className="avatar"
        src={this.props.avatar} alt={this.props.name} />
      
    
      <div>
        <p className="name">
        {this.props.name}
        </p>
        <div className="status"
                       
             onClick={(event) => {
              const newOnLine = !this.state.isOnline;
              this.setState({ isOnline: newOnLine });
            }}>
            <span
            className={this.state.isOnline ? 'status-online' : 'status-offline'}></span>
             
            <p className="status-text">{this.state.isOnline ? 'online' : 'offline'}</p>
        </div>
      </div>
    
        
      </div>
    );
  }
}
  
    Contact.propTypes = {
      online: PropTypes.bool,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    };
    
  
  
  
  export default Contact;