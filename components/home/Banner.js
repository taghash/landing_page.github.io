/**
 * @format
 */
import Image from 'next/image';
import React from 'react';
import oneStopSolutions from '../../public/oneStopSolutions.svg';
import { motion } from 'framer-motion';
import Button from '../Button';

const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.7 },
    scale: 1,
  },
  exit: {
    x: '-100vh',
    transition: { ease: 'easeIn' },
  },
};

const Banner = () => {
  return (
    <div className="p-10 md:p-10 pt-0  flex bg-neutral-100 flex-col md:flex-row md:justify-around">
      <motion.div
        className="mt-12 md:mt-28"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2 className="text-2xl md:text-4xl pb-2  ">
          Software for <br /> PE/VC and Family Offices
        </h2>
        <p className="mb-10 ">
          To Connect, Collaborate, Communicate and Close.
        </p>
        {/* <div className="flex ">
          <input
            type="text"
            placeholder="Enter your email address"
            className=" w-3/4 border-2 border-r-0 border-blue-500 p-2 outline-none rounded rounded-r-none"
          />
          <a
            href="#"
            className="rounded-l-none whitespace-nowrap px-4 py-2  rounded-md  text-base font-medium text-white "
            style={{
              background:
                'linear-gradient(90deg, hsl(231deg 89% 51%) 0%, hsl(210deg 100% 61%) 100%)',
            }}
          >
            Contact Sales
          </a>
        </div> */}
        <div className="grid md:grid-cols-2 gap-3">
          <Button title="Deal Flow Management" target="/dealflow"></Button>
          <Button
            // classNames="bg-teal-500 hover:bg-teal-300 "
            title="Portfolio Management"
            target="/portfolio"
          ></Button>
          <Button
            // classNames="bg-teal-500 hover:bg-teal-300 "
            title="Funds Management"
            target="/fund"
          ></Button>
          <Button
            // classNames="bg-teal-500 hover:bg-teal-300 "
            title="LP Reporting"
            target="/lpreporting"
          ></Button>
          {/* <Button
            // classNames="bg-teal-500 hover:bg-teal-300 "
            title="Deal Flow BI"
            target="/deaflowbi"
          ></Button>
          <Button
            classNames="bg-teal-500 hover:bg-teal-300 "
            title="Taghash Advantages"
            target="/taghashAdvantages"
          ></Button> */}
        </div>
      </motion.div>

      <motion.div
        className="z-1 w-2/3 mt-5 ml-10 md:w-2/5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Image src={oneStopSolutions} />
      </motion.div>
    </div>
  );
};

export default Banner;
