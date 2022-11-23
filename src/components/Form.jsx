import React from "react";
import { useFormik } from "formik";
import { impSchema } from "../schema/index";

const Form = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((res) => {
      setTimeout((res) => {
        actions.resetForm();
      }, 1000);
    });
  };

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      edad: "",
      contraseña: "",
      repeatPassword: "",
    },
    validationSchema: impSchema,
    onSubmit,
  });

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Ingresa tu email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}
        <label htmlFor="edad">Edad</label>
        <input
          type="number"
          id="edad"
          placeholder="Ingresa tu edad"
          value={values.edad}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.edad && touched.edad ? "input-error" : ""}
        />
        {errors.edad && touched.edad && <p className="error">{errors.edad}</p>}

        <label htmlFor="contraseña">Contraseña</label>
        <input
          type="password"
          id="contraseña"
          placeholder="Ingresa tu contraseña"
          value={values.contraseña}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.contraseña && touched.contraseña ? "input-error" : ""
          }
        />

        {errors.contraseña && touched.contraseña && (
          <p className="error">{errors.contraseña}</p>
        )}

        <label htmlFor="repeatPassword">Repite tu contraseña</label>
        <input
          type="password"
          id="repeatPassword"
          placeholder="Repite tu contrasena"
          value={values.repeatPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.repeatPassword && touched.repeatPassword ? "input-error" : ""
          }
        />
        {errors.repeatPassword && touched.repeatPassword && (
          <p className="error">{errors.repeatPassword}</p>
        )}
        <button disabled={isSubmitting} type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
