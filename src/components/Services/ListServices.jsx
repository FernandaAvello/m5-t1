import React, { useEffect, useState } from "react";
import { ServiceCard } from "./ServiceCard";
import { Row, Col } from "antd";

const ListServices = () => {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const response = await fetch('../../../../data/services.json');
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="section_list_services">
      <Row gutter={[16, 16]} justify="space-around">
        {services.map((service, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export { ListServices };