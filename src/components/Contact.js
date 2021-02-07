import React from 'react';
import './Contact.css';

function Contact() {
    return (
      <div className="Contact">
        
      <img className="avatar"
        src="https://randomuser.me/api/portraits/women/75.jpg"
        alt="Vivan Kuhn"
      />
    
      <div>
        <p className="name">
        Vivan Kuhn
        </p>
        <div className="status">
            
            <div className="status-online"></div>
            <p className="status-text">online</p>
        </div>
      </div>
    
        
      </div>
    );
  }
  
  export default Contact;