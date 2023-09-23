const isFormValid = (form: any) => form.getFieldsError().some((item : {errors: string}) => item.errors.length > 0)

export default isFormValid;
