import React, { useEffect, useState, useRef } from 'react';
import './Course.css';
import icons from '../../assets/Icons/index.jsx';

const CardItem = ({ name, address, date, dataset }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div className='school-item fade-in' ref={itemRef}>
      <img
        src={icons.shortlist}
        alt='bookmarks icon'
        className='bookmarks-icon'
      />

      <div className='school-header'>
        <h3 className='facility-name'>{name}</h3>
      </div>

      <div className='school-details'>
        <div className='address-container'>
          <img
            src={icons.address}
            alt='building icon'
            className='building-icon'
          />

          <span className='address-text' style={{ whiteSpace: 'pre-wrap' }}>
            {address}
          </span>
        </div>

        <div className='info-container'>
          <div className='update-info'>
            <img src={icons.status} alt='check icon' className='check-icon' />
            <div className='date-container'>
              <div className='date-label'>Last Updated Date</div>
              <div className='date'>{date}</div>
            </div>
          </div>

          <div className='institution-type'>
            <span className='dot'>•</span>
            {dataset}
          </div>
        </div>
      </div>
    </div>
  );
};

const Course = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.csdi.gov.hk/apim/dataquery/api/?id=edb_rcd_1629267205213_58940&layer=asfps&limit=5&offset=${page}`
        );

        if (!res.ok) {
            setLoading(false);

          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const json = await res.json();
        console.log('json', json);
        setLoading(false);

        if (Array.isArray(json?.features) && json.features.length > 0) {
          setData((pre) => [...pre, ...json.features]);
        } else {
          console.warn(
            'The response does not contain a valid "features" array.'
          );
        }
      } catch (error) {
        setLoading(false);

        console.log(error);
      }
    };
    fetchData();
  }, [page]);

  return (
    <div className='container-wrapper'>
      <div className='popular-schools-container'>
        <div className='schools-header fade-in' ref={titleRef}>
          <h2>Popular schools</h2>
          <img src={icons.help} alt='help icon' className='help-icon' />
        </div>

        <div className='schools-wrapper'>
          <div className='schools-list'>
            {data.map((school, index) => (
              <CardItem
                key={index}
                name={school?.properties?.Facility_Name}
                address={school?.properties?.Address}
                date={school?.properties?.Last_Updated_Date___最後更新日期}
                dataset={school?.properties?.Dataset}
              />
            ))}
          </div>
        </div>

        <div className='load-more'>
          <button className='more-button' onClick={() => setPage(page + 1)}>
            {loading ? 'Loading...' : '+ More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
