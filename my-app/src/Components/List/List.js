import React from 'react';

export default function List({ people }) {
  return (
    <>
      {people.map((person) => (
        <article className='person' key={person.id}>
          <img src={person.Image} alt='' /> {/* Corrected the way 'src' is used */}
          <div>
            <h4>{person.name}</h4>
            <p>{person.age} years</p>
            <p className='reviewer'> <strong>Reviewer</strong>:{person.reviewer}</p>
          </div>
        </article>
      ))}
    </>
  );
}
