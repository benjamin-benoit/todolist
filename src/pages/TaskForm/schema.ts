import * as Yup from 'yup';

export const TaskSchema = Yup.object().shape({
  label: Yup.string()
    .min(1, 'Le label est trop court.')
    .max(50, 'Le label est trop long.')
    .required('Le label est obligatoire'),
  description: Yup.string()
    .min(1, 'La description est trop courte.')
    .max(250, 'La description est trop longue.')
    .required('La description est obligatoire'),
});