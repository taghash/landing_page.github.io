/**
 * @format
 */
import React from 'react';
import actionable from '../../public/actionable.svg';
import intelligence from '../../public/intelligence1.svg';
import singleSource from '../../public/single-source.svg';
import Card from '../Card';

const philosophies = [
  {
    id: 1,
    title: `Single Source of Truth`,
    body: `Unify your organization's deal flow from multiple sources. Eliminate working in silos.`,
    image: singleSource,
  },
  {
    id: 2,
    title: `Actionables`,
    body: `Make decisions together. Track progress. Back great entrepreneurs.`,
    image: actionable,
  },
  {
    id: 3,
    title: `Intelligence`,
    body: `Let Taghash be the unified brain for your team. Automate everything.`,
    image: intelligence,
  },
];

const Philosophy = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl text-center p-5">
        Our product philosophy
      </h2>
      <div className="grid grid-cols-3 p-16">
        {philosophies.map(philosophi => (
          <Card
            imageStyles="w-full px-36 pt-3"
            style="text-center"
            title={philosophi.title}
            body={philosophi.body}
            image={philosophi.image}
            key={philosophi.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Philosophy;
