/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Airtable from 'airtable';
import CardComponent from './CardComponent.jsx';
import './App.css';
import Modal from '../ui/Modal.jsx';
import { toast } from "react-hot-toast";

const YOUR_SECRET_API_TOKEN =
  'patJ4YpILwTPFbyF6.751540e7d4a42bafa283f2f44ebc162f08bb736a87f6f1f8dbec9af5b7257040';
function Talent() {
  const [talents, setTalents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLinkedInUrl, setSelectedLinkedInUrl] = useState('');

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const base = new Airtable({ apiKey: YOUR_SECRET_API_TOKEN }).base(
          'appX1TKkEJArl4R7q'
        );
        const records = await base('Talents')
          .select({
            view: 'Grid view',
          })
          .all();

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

  const handleCardButtonClick = (linkedinUrl) => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn) {
      setIsModalOpen(true);
      setSelectedLinkedInUrl(linkedinUrl);
    } else {
      window.open(linkedinUrl, '_blank');
    }
  };

  const handleSubmit = async (company, email) => {
    try {
      const base = new Airtable({ apiKey: YOUR_SECRET_API_TOKEN }).base(
        'appX1TKkEJArl4R7q'
      );
      if(!company || !email){
        toast.error("company or email invalid");
        return;
      }
      const res = await base('Users').create([
        {
          fields: {
            email: email,
            companyName: company,
          },
        },
      ]);
      console.log(res);
      if (res) {
        toast.success("saved successfully! You can now access linkedin profiles");
        localStorage.setItem('loggedIn', true);
      }
      setIsModalOpen(false);
      //if (selectedLinkedInUrl) window.open(selectedLinkedInUrl, '_blank');
    } catch (error) {
      toast.error("Error on saving");
      console.log('err: ', error);
    }
  };

  const closeModal = () => setIsModalOpen(false);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='text-colorBrand500 text-2xl flex justify-center font-bold'>
          Talent
        </h1>
        <p className='text-lg flex justify-center font-md mb-8'>
          Find the curated list of talent.
        </p>
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          onSubmit={handleSubmit}
        />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4'>
          {talents.map((talent, idx) => (
            <CardComponent
              key={talent.index}
              index={idx + 1}
              imageSrc={talent.imageSrc}
              roles={talent.roles}
              buttonLink={talent.linkedinUrl}
              buttonText='LinkedIn'
              onButtonClick={handleCardButtonClick}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default Talent;
