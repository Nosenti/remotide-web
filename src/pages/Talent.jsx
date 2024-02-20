import { useState, useEffect } from 'react';
import Airtable from 'airtable';
import CardComponent from './CardComponent.jsx';
import "./App.css"



const YOUR_SECRET_API_TOKEN = "patOUR18P2XCAGHwI.b9cb3a3e70d1457af8e49071d83ea5cd2e69f48557b15f2d33cfb18d2f0b5b91";
function Talent() {
  const [talents, setTalents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const base = new Airtable({ apiKey: YOUR_SECRET_API_TOKEN }).base('appX1TKkEJArl4R7q');
        const records = await base('Talents').select({
          view: 'Grid view'
        }).all();

        const formattedTalents = records.map((record) => ({
          index: record.id, 
          imageSrc: record.fields.Avatar[0].url,
          roles: record.get('Roles Interested'),
          linkedinUrl: record.get('LinkedIn'), 
        }));

        setTalents(formattedTalents);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='text-colorBrand500 text-2xl flex justify-center font-bold'>Talent</h1>
        <p className='text-lg flex justify-center font-md mb-8'>Find the curated list of talent.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4">
          {talents.map((talent, idx) => (
            <CardComponent
              key={talent.index}
              index={idx + 1}
              imageSrc={talent.imageSrc}
              roles={talent.roles}
              buttonLink={talent.linkedinUrl}
              buttonText="LinkedIn"
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default Talent;
