import * as Yup from "yup";

// const reglaContrasenia = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{5,}$/;
const reglaContrasenia = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

export const impSchema = Yup.object().shape({
  email: Yup.string()
    .email("Por favor ingrese un correo valido")
    .required("Campo obligatorio"),
  edad: Yup.number().integer().positive().required("Campo obligatorio"),
  contraseña: Yup.string()
    .min(6)
    .required("Campo obligatorio")
    .matches(reglaContrasenia),
  repeatPassword: Yup.string()
    .required("Campo obligatorio")
    .oneOf([Yup.ref("contraseña"), null], "La contraseña tiene que ser igual"),
});
