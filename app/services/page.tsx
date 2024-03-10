"use client";
import { IServicesData, SERVICES_DATA } from "@shared/data/services-data/services.data";
import React, { useState, useEffect } from "react";
import { groupBy } from "lodash";
import ServiceCardComponent from "@shared/components/cards/ServiceCard/service-card.component";

const ServicePage = () => {
  const [groupedServices, setGroupedServices] = useState<
    { serviceType: string; services: IServicesData[] }[]
  >([]);

  useEffect(() => {
    getGroupedData();
  }, []);

  const getGroupedData = () => {
    const data = groupBy(SERVICES_DATA, "serviceType");
    Object.keys(data).forEach((key, index) => {
      setGroupedServices((prev) => [...prev, { serviceType: key, services: data[key] }]);
    });
  };
  return (
    <div className="flex flex-col justify-center items-center pt-4 md:p-4 gap-5">
      {groupedServices.map((group) => (
        <div key={group.serviceType} className="w-full h-full flex flex-col items-center p-5 gap-4">
          <h1 className="p-4 bg-primary-darker w-full text-white font-bold text-xl ">
            {group.serviceType}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  lg:gap-x-5 md:gap-x-3 py-2 gap-y-5 ">
            {group.services.map((service) => (
              <ServiceCardComponent
                key={service.slug}
                title={service.title}
                src={service.src}
                descriptioin={service.description}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicePage;
