import React from 'react';
import PropTypes from 'prop-types';
import { Card, Tag, Row, Col } from 'antd';
const { Meta } = Card;

const DoctorCard = ({ name, specialty, description, image }) => (
  <Card
    hoverable
    style={{
      width: 300,
      margin: '10px'
    }}
    cover={<img alt={name} src={image} height={400} width={250} />}
  >
    <Meta title={name}/>
    <Row justify="center" style={{ marginTop: '10px' }}>
      <Col>
        <Tag color="pink">{specialty}</Tag>
      </Col>
    </Row>
    <div style={{ marginTop: '10px' }}>
      <Meta description={description} />
    </div>
  </Card>
);

DoctorCard.propTypes = {
  name: PropTypes.string.isRequired,
  specialty: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export { DoctorCard };