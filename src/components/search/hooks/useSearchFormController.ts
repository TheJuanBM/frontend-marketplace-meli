import { useFormik } from "formik";
import * as Yup from "yup";

interface FormSearchValues {
  search: string;
}

type OnSubmit = (values: FormSearchValues) => void;

export function useSearchFormController(onSubmit: OnSubmit) {
  const { handleSubmit, handleChange } = useFormik<FormSearchValues>({
    onSubmit,
    initialValues: {
      search: "",
    },
    validationSchema: Yup.object().shape({
      search: Yup.string().required(),
    }),
  });

  return { handleSubmit, handleChange };
}
