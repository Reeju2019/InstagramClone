import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import * as Yup from "yup";
import { Formik, formik } from "formik";

const PLACEHOLDER_IMG =
  "https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, "Caption has reached the charecter limit."),
});

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
  const handleSubmit = (values, actions) => {
    console.log("values", values);
    console.log("actions", actions);
    actions.setSubmitting(false);
  };
  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={uploadPostSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
      }) => (
        <View>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
            placeholder="Image URL"
          />
          {errors.imageUrl && touched.imageUrl && (
            <Text style={styles.error}>{errors.imageUrl}</Text>
          )}
          <TextInput
            style={styles.input}
            onChangeText={handleChange("caption")}
            onBlur={handleBlur("caption")}
            value={values.caption}
            placeholder="Caption"
          />
          {errors.caption && touched.caption && (
            <Text style={styles.error}>{errors.caption}</Text>
          )}
          <Button
            title="Submit"
            onPress={handleSubmit}
            disabled={!values.imageUrl || !values.caption}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  input: {},
});

export default FormikPostUploader;
