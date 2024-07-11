import { isObject } from "../../utils";

const deepClone = <T extends Record<string, any>>(obj: T): T => {
  if (!isObject(obj)) return obj;
  const clonedObj = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      (clonedObj as Record<string, any>)[key] = deepClone(obj[key]);
    }
  }
  return clonedObj as T;
};

export default deepClone;
