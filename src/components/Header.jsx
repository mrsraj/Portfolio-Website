import React, { useEffect, useState } from 'react';
import '../CSS/Header.css'

import { fetchData } from '../ApiFetch/FetchApi';
import Loading from '../Loading.jsx/Loading';
function Header() {
  const [InfoData, setInfoData] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function fetchInfoData() {
      try {
        const endpoint = 'student';
        const result = await fetchData(endpoint);
        setTimeout(() => {
          setInfoData(result);
        }, 1000);
        console.log(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchInfoData();

  }, []);



  return (
    <header className="header">
      <div className="header-content">
        {InfoData ? (

          InfoData[0].details.map((info, index) => (
            <div key={index}>
              <h1 className="header-title">Software Engineer</h1>
              <p className="header-subtitle"><b>University: </b>{info.universityname}</p>
              <p className="header-subtitle"><b>College: </b>{info.collegename}</p>
              <p className="header-subtitle"><b>Branch: </b>{info.branch}</p>
              <p className="header-subtitle"><b>Degree: </b>{info.degree}</p>
            </div>
          ))
        ) : error ? <div style={{color: 'var(--text-color)'}}>{error}</div> :
          (
            <Loading/>
          )}
      </div>

      <div className='header-pic-div'>
        <img className='profile-pic' src="https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg" alt="Photo" width="300" />
      </div>

    </header>
  );
}

export default Header;