import { createContext } from "react";

export const RootAppContext = createContext({
  themeChanger: '',
  formData: [],
  addFormData: ()=> {},
  deleteFormData: ()=> {},
})