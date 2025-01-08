import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DoctorCard } from "./DoctorCard";
import { Row, Col, Button, Space, Modal } from "antd";

const ListDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const fetchDoctors = async () => {
    try {
      const response = await fetch('../../../../data/doctors.json');
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const showModal = (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="section_list_doctors">
      <Row gutter={[16, 16]}>
        {doctors.map((doctor, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <DoctorCard
              name={doctor.name}
              specialty={doctor.specialty}
              description={doctor.description}
              image={doctor.image}
            />
            <Button type="primary" onClick={() => showModal(doctor)}>
              Ver Detalles
            </Button>
          </Col>
        ))}
      </Row>

      <Modal
        title="Detalles del Doctor"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {selectedDoctor && (
          <div>
            <p><strong>Nombre:</strong> {selectedDoctor.name}</p>
            <p><strong>Especialidad:</strong> {selectedDoctor.specialty}</p>
            <p><strong>Descripción:</strong> {selectedDoctor.description}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export { ListDoctors };