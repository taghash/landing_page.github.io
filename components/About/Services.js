/**
 * @format
 */
import Image from 'next/image';
import React from 'react';
import Ellipse from '../../public/Ellipse.svg';

const services = [
  {
    id: 1,
    title: 'DealFlow',
    desc: 'Bring your deals from Email, Whatsapp, Pitch forms into a single portal. Collaborate, communicate and close seamlessly.',
  },
  {
    id: 2,
    title: 'Portfolio',
    desc: 'Centrally track your portfolio’s MIS, Investment and Valuation metrics. Improve governance in your portfolio by automatically detecting discrepancies in investor updates.',
  },
  {
    id: 3,
    title: 'Funds',
    desc: 'Track your fund’s performance across multiple funds, currencies and investments across the lifetime of your fund.',
  },
  {
    id: 4,
    title: 'LP Reporting',
    desc: 'Create DIY Reports with metrics and charts from all the departments in the organization with qualitative and quantitative analysis laid on top. Brand your reports and track opens.',
  },
];

const Services = () => {
  return (
    <div className="p-5 md:p-10 md:m-7" id="services">
      <h4 className="font-bold text-2xl text-center p-5 pb-10">SERVICES</h4>
      {/* <h2 className="text-center text-2xl md:text-3xl pb-10 md:mb-10">
        Taking Your Business to <br /> the Next Level
      </h2> */}
      <div className="grid lg:grid-cols-3 gap-10 text-center ">
        {services.map((service) => (
          <div className="md:px-10 mx-5 mb-10 md:mb-0" key={service.id}>
            <div className="lg:w-1/3 md:w-1/6 w-1/4 mx-auto mb-5">
              <Image src={Ellipse} />
            </div>
            <p className="text-center mb-3">{service.title}</p>
            <p className="text-lg">{service.desc} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
