import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from './Loading';

export const WorkLanguage = () => {
  const [languageList, setLanguageList] = useState([])
  const [loading, setLoading] = useState(false);
  const { language } = useParams();

  useEffect(() => {
    setLoading(true)
    fetch(`https://project-express-api-wcsanbxhyq-lz.a.run.app/professionals?worklanguage=${language}`)
      .then((res) => res.json())
      .then((data) => setLanguageList(data.body.professionals))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [language]);

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <section className="completelist-container">
      {languageList.map((singleProfessional) => {
        return (
          <div key={singleProfessional.id}>
            <p>Age: {singleProfessional.age}</p>
            <p>Gender: {singleProfessional.gender}</p>
            <p>City:{singleProfessional.city}</p>
            <p>Position: {singleProfessional.position}</p>
            <p>Total years of experience: {singleProfessional.total_years_experience}</p>
            <p>Seniority level: {singleProfessional.seniority_level}</p>
            <p>Main programming languge: {singleProfessional.main_language}</p>
            <p>Yearly salary:{singleProfessional.yearly_salary}</p>
            <p>Employment status: {singleProfessional.employment_status}</p>
            <p>Contract duration: {singleProfessional.contract_duraction}</p>
            <p>Work language: {singleProfessional.work_language}</p>
            <p>Company size: {singleProfessional.company_size}</p>
            <p>Company type: {singleProfessional.company_type}</p>
            <br />
          </div>
        )
      })}
    </section>
  );
};