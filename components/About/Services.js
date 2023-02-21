/**
 * @format
 */
import Image from 'next/image';
import React from 'react';
import Ellipse from '../../public/Ellipse.svg';
import dealflow from '../../public/dealflow.svg';
import portfolio from '../../public/portfolioManagement.svg'
import funds from '../../public/fundManagement.svg'
import lpReporting from '../../public/lpReporting.svg'
import Card from '../Card';

const services = [
  {
    id: 1,
    title: 'DealFlow',
    img: dealflow,
    desc: 'Bring your deals from Email, Whatsapp, Pitch forms into a single portal. Collaborate, communicate and close seamlessly.',
  },
  {
    id: 2,
    title: 'Portfolio',
    img: portfolio,
    desc: 'Centrally track your portfolio’s MIS, Investment and Valuation metrics. Improve governance in your portfolio by automatically detecting discrepancies in investor updates.',
  },
  {
    id: 3,
    title: 'Funds',
    img: funds,
    desc: 'Track your fund’s performance across multiple funds, currencies and investments across the lifetime of your fund.',
  },
  {
    id: 4,
    title: 'LP Reporting',
    img: lpReporting,
    desc: 'Create DIY Reports with metrics and charts from all the departments in the organization with qualitative and quantitative analysis laid on top. Brand your reports and track opens.',
  },
];

const Services = () => {
  return (
    <div className="p-5 md:p-10 bg-neutral-100 " id="services">
      <h4 className="font-bold text-2xl text-center p-5 pb-10 capitalize">Offerings</h4>
      {/* <h2 className="text-center text-2xl md:text-3xl pb-10 md:mb-10">
        Taking Your Business to <br /> the Next Level
      </h2> */}
      <div className="grid lg:grid-cols-2 gap-10 text-center ">
        {services.map((service) => (
          <Card key={service.id} title={service.title} body={service.desc} image={service.img} />
        ))}
      </div>
    </div>
  );
};

export default Services;
