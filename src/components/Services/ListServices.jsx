import React, { useEffect, useState } from "react";
import { ServiceCard } from "./ServiceCard";
import { Row, Col, Button, Spin, Alert } from "antd";

const ListServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchServices = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch('../../../../data/services.json');
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTimeout(() => {
        setServices(data);
        setLoading(false);
      }, 2000); // Retraso de 2 segundos
    } catch (error) {
      console.error("Error fetching services:", error);
      setError(true);
      setLoading(false);
    }
  };

  const simulateApiFailure = () => {
    setLoading(true);
    setError(false);
    setTimeout(() => {
      setLoading(false);
      setError(true);
    }, 2000); // Retraso de 2 segundos para simular el fallo
  };

  useEffect(() => {
    fetchServices();
  }, []); // Se asegura de que fetchServices se llame solo una vez cuando el componente se monte

  return (
    <div className="section_list_services">
      <Button type="primary" onClick={fetchServices} style={{ marginBottom: '16px', marginRight: '8px' }}>
        Recargar Servicios
      </Button>
      <Button type="danger" onClick={simulateApiFailure} style={{ marginBottom: '16px' }}>
        Simular Fallo de API
      </Button>
      {loading ? (
        <Spin size="large" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}} />
      ) : error ? (
        <Alert
          message="Error"
          description="Ocurrió un error al cargar los servicios. Por favor, intente nuevamente."
          type="error"
          showIcon
          style={{ marginBottom: '16px' }}
        />
      ) : (
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
      )}
    </div>
  );
};

export default ListServices;