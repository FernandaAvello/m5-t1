import React from 'react';
import { Card, Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonPregnant, faHospital, faHeart, faChild, faSpa, faBrain, faBaby } from '@fortawesome/free-solid-svg-icons';
const { Meta } = Card;
import PropTypes from 'prop-types';

const iconMap = {
  pregnant_woman: faPersonPregnant,
  local_hospital: faHospital,
  healing: faHeart,
  favorite: faHeart,
  child_care: faChild,
  local_pharmacy: faHeart,
  spa: faSpa,
  psychology: faBrain,
  medical_services: faBaby,
};

const ServiceCard = ({ icon, title, description }) => (
  <Card
    hoverable
    style={{
      width: 300,
      margin: '10px'
    }}
  >
    <Row justify="center" style={{ marginTop: '10px' }}>
      <Col>
        <FontAwesomeIcon icon={iconMap[icon]} size="3x" color="pink" />
      </Col>
    </Row>
    <Meta title={title} style={{ textAlign: 'center', marginTop: '10px' }} />
    <div style={{ marginTop: '10px', textAlign: 'center' }}>
      <Meta description={description} />
    </div>
  </Card>
);

ServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export { ServiceCard };