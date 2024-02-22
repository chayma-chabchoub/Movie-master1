// import React, { useState, useEffect } from 'react';
// import './darkmodetoggle.css';

// const DarkModeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

  
//   useEffect(() => {
//     const savedDarkMode = localStorage.getItem('darkMode');
  
//     if (savedDarkMode === 'true') {
//       setIsDarkMode(true);
//       document.body.classList.add('dark-mode');
//     } else {
//       setIsDarkMode(false);
//       document.body.classList.remove('dark-mode');
//     }
//   }, []);

//   const toggleDarkMode = () => {
//     const newDarkMode = !isDarkMode;
//     setIsDarkMode(newDarkMode);
//     localStorage.setItem('darkMode', newDarkMode);
//     document.body.classList.toggle('dark-mode', newDarkMode);
//   };

//   return (
//     <div className="dark-mode-toggle-container">
//       <label className="dark-mode-toggle-label">
//         Dark Mode
//         <input
//           type="checkbox"
//           checked={isDarkMode}
//           onChange={toggleDarkMode}
//           className="dark-mode-toggle-input"
//         />
//         <span className="dark-mode-toggle-slider"></span>
//       </label>
//     </div>
//   );
// };

// export default DarkModeToggle;
