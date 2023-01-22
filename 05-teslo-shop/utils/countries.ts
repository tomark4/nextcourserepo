import { countries } from "../database/countries";

export const getCountryName = (code: string) => {
  // return countries.filter((item) => item.code === code)[0].name;
  return countries.find((item) => item.code === code)?.name;
};
