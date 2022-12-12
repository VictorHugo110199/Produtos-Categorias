import * as yup from "yup";

export const createProductSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  category_id: yup.string(),
});