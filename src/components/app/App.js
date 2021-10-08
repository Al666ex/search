import React, {useState, useEffect} from 'react'
import './app.css'

const people = [
  "Siri",
  "Alexa",
  "Siriona",
  "DariSiri",
  "Google",
  "Sirtaea",
  "Facebook",
  "Siriea",
  "Sirrena",
  "Twitter",
  "Linkedin",
  "Sinkedin",
  "Sinke",
  "Asirra",
];

const App = () => {
 const [searchTerm, setSearchTerm] = React.useState("");
 const [searchResults, setSearchResults] = React.useState([]);
 const handleChange = event => {
    setSearchTerm(event.target.value);
  };

 React.useEffect(() => {     
        const results = people.filter(person =>
            person.toLowerCase().includes(searchTerm)
          );
          setSearchResults(results); 
  }, [searchTerm]);

  return (
    <main className="main app">
      <div className="row">
        <div className="col-8">
          <div className="searchBlock">
            <input className="input-text fa fa-search"
              
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange}
            />          
            {(searchTerm.length >1) ? 
                    <ul className="list-group">
                      {searchResults.slice(0,5).map(item => (
                      <li className="list-group-item" key={item}><a href="#">{item}</a></li>
                        ))}
                    </ul> 
                      : null      
            } 
         
        </div>            

          </div>
          

        <div className="col-4">
          <ul>
          {
            people.map(e => 
              searchResults.includes(e) ? 
                <li key={e}  className="blueviolet" >{e}</li> :
                   <li key={e}>{e}</li>)             
          }
          </ul>
        </div>

      </div>

    </main>
  );
}


export default App;
