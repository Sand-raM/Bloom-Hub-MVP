import React from 'react';
import { Form, Table } from 'react-bootstrap';

const MenstrualCycleTracking = () => {
  return (
    <div>
      <h1>Menstrual Cycle Tracking</h1>
      <Form>
        {/* Add form fields for cycle start and end dates, flow intensity, and symptoms */}
      </Form>
      <Table striped bordered hover>
        {/* Add table for past cycles */}
      </Table>
    </div>
  );
};

export default MenstrualCycleTracking;
