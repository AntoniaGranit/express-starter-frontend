import React from 'react';
import { CompleteList } from './Components/CompleteList'

export const App = () => {
  // const [selectedLanguage, setSelectedLanguage] = useState('English');
  // const handleLanguageChange = (event) => {
  //   setSelectedLanguage(event.target.value);
  // }

  // const handleShowProfessionals = () => {
  //   console.log(`Showing professionals who work in ${selectedLanguage}`);
  // }

  return (
    <CompleteList />
    // <div>
    //   <section>
    //     <p>Hi!</p>
    //     <select value={selectedLanguage} onChange={handleLanguageChange}>
    //       <option value="">Order by work language:</option>
    //       <option value="English">English</option>
    //       <option value="German">German</option>
    //       <option value="Spanish">Spanish</option>
    //     </select>
    //     <button type="button" onClick={handleShowProfessionals}>Show professionals</button>
    //   </section>
    // </div>
  )
}
