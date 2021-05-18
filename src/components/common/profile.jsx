import React, {useEffect, useState} from 'react';
import { getPersonById, getFilm } from '../../services/peopleService';
import Button from './button';
import _ from 'lodash';

const Profile = (props) => {
    const [person, setPerson] = useState(null); 
    const [films, setFilms] = useState([]); 

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const id = props.match.params.id;
                const { data } = await getPersonById(id);
                setPerson(data);

                const response = await Promise.all(data.films.map(url => getFilm(url)));
                const filmTitles = [];
                response.forEach(respObj => filmTitles.push(respObj.data.title))
                setFilms(filmTitles);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProfile();
    }, []);

    return (
        <section className="profile">
           <h1 className="text-bold profile-name">{person && person.name}</h1>
           <div className="box-container">
                <div className="box profile-box">Height: {person && person.height}</div>
                <div className="box profile-box">Eye color: {person && person.eye_color}</div>
                <div className="box profile-box">Birth Date: </div>
                <div className="box profile-box">Hair color: {person && person.hair_color}</div>
           </div>
           <h4 className="sub-heading text-bold">{person && person.films.length} Films</h4>

           <div className="box film-box">
                <ul className="list films-list">
                    {films && films.map(film => <li className="list-item" key={film}>- {film}</li>)}
                </ul>
           </div>
           <Button className="btn btn-primary" onClick={() => props.history.push('/')}>Back to home ...</Button>
        </section>
    )
}


export default Profile;