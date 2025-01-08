import { List } from 'antd';
import React, { useState } from 'react';
import { AppointmentForm } from '../components/Appointment/AppointmentForm';

const Appointment = () => {
  return (
    <div className="section_appointment">
      <h1 className="title">Formulario de Agendamiento</h1>
      <p className="description" style={{ textAlign: 'center'}}>
        Por favor complete el siguiente formulario para agendar una cita con uno de nuestros doctores.
      </p>
      < AppointmentForm />
    </div>
  );
};

export default Appointment;