// Function react component to display student information in a card format
// Receives props from parent component to populate the card with student details
import React from 'react';
function StudentCard(props) {
// Destructure the props to get the student information
  const { name, major, year, bio, imageUrl } = props;


//Declare state using the useState hook to manage the visibility of the bio section of the card
//showBio tracks whether the bio section of the card is visible or not, and setShowBio is the function to update this state
  const [showBio, setShowBio] = React.useState(false);


//Function to toggle the value of showBio when the button is clicked
// Uses true or false to determine whether to show or hide the bio section of the card
  const toggleBio = () => {
    setShowBio(!showBio);
  };
// Return the JSX to render the student card with styling
// The card includes the student's image, name, major, year, and a button to toggle the bio section
  return (
    // Container div for the student card with inline styles for layout and appearance
    <div style={{
      maxWidth: '350px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '12px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: '20px auto',
      backgroundColor: '#969696',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <img // Display the student's profile image with styling to make it circular and fit within the card
        src={imageUrl}
        alt={name + "'s profile"}
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px' }}
      />
      <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>
      <p style={{ margin: '4px 0', fontSize: '16px' }}>{major} – {year}</p>
      <button onClick={toggleBio} style={{ // Styling for the button to toggle the bio section, including padding, font size, border radius, and colors
        marginTop: '12px',
        padding: '8px 16px',
        fontSize: '14px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: 'white'
      }}>
        {showBio ? 'Hide Bio' : 'Show Bio'} 
      </button>
      {showBio && <p style={{ marginTop: '16px', fontSize: '14px' }}>{bio}</p>}
    </div>
  );
}
// Exports component to be used in other files
export default StudentCard;
