import React from 'react';
import { Item } from '../lib/definitions';
import PageCard from '../ui/Card/Card';

const Cards = ({ items }: { items: Item[] }) => {
  return (
    <ul className='md:max-w-[1200px] md:mx-auto grid md:grid-cols-3 gap-5'>
      {items &&
        items.map((item, index) => {
          return (
            <li key={index}>
              <PageCard
                id={item.id}
                name={item.name}
                description={item.description}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default Cards;
