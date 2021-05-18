import React, { useState, useEffect } from 'react';
import Card from './common/card';
import Button from '../components/common/button';
import { getPeople } from './../services/peopleService';

const Catalog = () => {
    const [people, setPeople] = useState([]);
    const [page, setPage] = useState(1);

    const fetchPeople = async (currentPage) => {
        try {
            const { data: { results } } = await getPeople(currentPage);
            setPeople([...people, ...results]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPeople(page);
    }, [page]);

    return (
        <section className="container">
            <h1 className="header">Star Wars Catalog</h1>
            <div className="catalog">
                {people && people.map((person, i) => <Card data={person} id={i + 1}/>)}
            </div>
            <Button className="btn btn-primary" onClick={() => setPage(prev => prev + 1)}>Load more ...</Button>
        </section>
    );
}

export default Catalog;