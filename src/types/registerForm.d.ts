export interface IRegisterFormProps {
  setOpen: (value: boolean) => void;
  setMessage: (value: string) => void;
  onSubmit: (formData: IPerson) => vodi;
  onCancel: () => void;
}
