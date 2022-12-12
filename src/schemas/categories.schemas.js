import * as yup from "yup";

export const createCategoriestSchema = yup.object().shape({
  name: yup.string().required()
});