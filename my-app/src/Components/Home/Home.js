import React, { useState } from 'react';
import List from '../List/List';
import { data } from '../../StaticData/data';

export default function Home() { 
  const [people, setPeople] = useState(data); 

  return (
    <main>
      <section className='container'>
        <h3>{people.length} reviews today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear all</button>
      </section>
    </main>
  );
}
