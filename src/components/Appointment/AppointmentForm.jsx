import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Select, DatePicker, Button } from 'antd';

const { Option } = Select;

const AppointmentForm = ({ appointmentDate, setAppointmentDate, patientEmail, setPatientEmail, patientPhone, setPatientPhone, doctorSpecialty, setDoctorSpecialty }) => {
  const emailInputRef = useRef(null);

  const focusEmailInput = () => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  };

  return (
    <Form className="section_appointment">
      <React.Fragment>
        <Form.Item
          label="Correo del paciente"
          rules={[
            { required: true, message: 'Por favor ingrese el correo del paciente' },
            { type: 'email', message: 'Por favor ingrese un correo válido' },
          ]}
        >
          <Input
            ref={emailInputRef}
            value={patientEmail}
            onChange={(e) => setPatientEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Teléfono del paciente"
          rules={[{ required: true, message: 'Por favor ingrese el teléfono del paciente' }]}
        >
          <Input value={patientPhone} onChange={(e) => setPatientPhone(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Especialidad del doctor"
          rules={[{ required: true, message: 'Por favor seleccione la especialidad del doctor' }]}
        >
          <Select value={doctorSpecialty} onChange={(value) => setDoctorSpecialty(value)}>
            <Option value="Ginecología y Obstetricia">Ginecología y Obstetricia</Option>
            <Option value="Endocrinología Reproductiva">Endocrinología Reproductiva</Option>
            <Option value="Medicina Materno-Fetal">Medicina Materno-Fetal</Option>
            <Option value="Ginecología Oncológica">Ginecología Oncológica</Option>
            <Option value="Uroginecología">Uroginecología</Option>
            <Option value="Ginecología Pediátrica y Adolescente">Ginecología Pediátrica y Adolescente</Option>
            <Option value="Reproducción Asistida">Reproducción Asistida</Option>
            <Option value="Ginecología General">Ginecología General</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Fecha de la cita"
          rules={[{ required: true, message: 'Por favor seleccione la fecha de la cita' }]}
        >
          <DatePicker value={appointmentDate} placeholder={'Selecciona'} onChange={(date) => setAppointmentDate(date)} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={focusEmailInput}>
            Agendar Cita
          </Button>
        </Form.Item>
      </React.Fragment>
    </Form>
  );
};

AppointmentForm.propTypes = {
  appointmentDate: PropTypes.object.isRequired,
  setAppointmentDate: PropTypes.func.isRequired,
  patientEmail: PropTypes.string.isRequired,
  setPatientEmail: PropTypes.func.isRequired,
  patientPhone: PropTypes.string.isRequired,
  setPatientPhone: PropTypes.func.isRequired,
  doctorSpecialty: PropTypes.string.isRequired,
  setDoctorSpecialty: PropTypes.func.isRequired,
};

export { AppointmentForm };