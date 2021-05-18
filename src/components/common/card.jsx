import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getUnit } from '../../utils/units';

const Card = (props) => {
    const { data, id } = props;
    return (
        <div key={data.name} className="card">
            <div className="card-header">
                <CardHeader title={data.name} id={id}/>
            </div>
            <div className="card-body">
                <CardBody height={data.height} birthYear={data.birth_year} films={data.films.length} />
            </div>
        </div>
    );
}

const CardHeader = (props) => <Link to={`/profile/${props.id}`}><h1 className="text-bold">{props.title}</h1></Link>;
const CardBody = (props) => <Fragment>{Object.entries(props).map(([key, value]) => <div key={value} className="body-info">{value} {getUnit(key)}</div>)}</Fragment>;

export default Card;