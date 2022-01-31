import React from 'react';
import { Formik, Form,Field } from 'formik';
import * as Yup from 'yup';


const AddNewFlight = () => {
  return (
    <div>
      <Formik
        initialValues={{
          newflight: {
            flightNumber: [],
            origin: [],
            destination: [],
          }
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        <Form>
          <label htmlfor="newflight">Add NewFlight:</label> <br/><br/>
          <label>Flight Number:</label>
            <input type="text" name="flightnumber" placeholder="flight number"/> <br/> <br/>
          <label>Origin :</label>
          <Field name="origin" as="select" placeholder="Origin">
          <option value="Ahmedabad">AHMEDABAD</option>
          <option value="mumbai">MUMBAI</option>
          <option value="Goa">GOA</option>
          <option value="tamilnadu">TAMILNADU</option>
          </Field> <br/> <br/>
          <label>Destination:</label>
          <Field name="destination" as="select">
          <option value="kerala">KERALA</option>
          <option value="delhi">DELHI</option>
          <option value="tamilnadu">TAMILNADU</option>
          <option value="mumbai">MUMBAI</option>
          </Field> <br/> <br/>
        </Form>
      </Formik>
    </div>
  )
}

export default AddNewFlight;
