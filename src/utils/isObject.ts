function isObject(obj: unknown): boolean {
  return obj !== null && typeof obj === "object";
}

export default isObject;
