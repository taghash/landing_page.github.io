/**
 * @format
 */
import { useRouter } from 'next/router';
import React from 'react';

const Button = ({ title, classNames, target }) => {
  const router = useRouter();
  return (
    <a
      onClick={() => router.push(target)}
      //   href="#"
      className={`cursor-pointer mt-2 mb-2 w-full whitespace-nowrap inline-flex items-center justify-center px-4 py-2
       bg-blue-600  rounded-md  text-base font-medium text-white  hover:bg-blue-500 hover:scale-105 hover:transition-all ${classNames}`}
    >
      {title}
    </a>
  );
};

export default Button;
