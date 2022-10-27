import React from "react";
import "./index.css";
import { Button, Typography, Card, CardContent, Box } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField, CheckboxWithLabel } from "formik-material-ui";
import { validationSchema } from "../../schema";

function FormikForm() {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        Username: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
        termsAndConditions: false,
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors, isSubmitting, touched }) => (
        <Form>
          <Card sx={{ width: 350, minHeight: 350, boxShadow: 3, padding: 3 }}>
            <CardContent sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h5" component="div">
                Formik Registration
              </Typography>
            </CardContent>
            <Field
              name="Username"
              type="text"
              component={TextField}
              variant="outlined"
              color="primary"
              label="Username"
              fullWidth
            />
            <Box height={14} />
            <Field
              name="Email"
              type="text"
              component={TextField}
              variant="outlined"
              color="primary"
              label="Email"
              fullWidth
            />
            <Box height={10} />
            <Field
              name="Password"
              type="password"
              component={TextField}
              variant="outlined"
              color="primary"
              label="Password"
              fullWidth
            />
            <Box height={10} />
            <Field
              name="ConfirmPassword"
              type="password"
              component={TextField}
              variant="outlined"
              color="primary"
              label="Confirm Password"
              fullWidth
            />
            <Box height={10} />
            <Field
              name="termsAndConditions"
              type="checkbox"
              component={CheckboxWithLabel}
              Label={{ label: "I accept the terms and conditions" }}
              sx={
                errors.termsAndConditions && touched.termsAndConditions
                  ? { color: "red" }
                  : undefined
              }
            />
            <Box height={10} />
            <Button type="submit" variant="outlined" fullWidth>
              {isSubmitting ? "SIGNING UP" : "SIGN UP"}
            </Button>
          </Card>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
