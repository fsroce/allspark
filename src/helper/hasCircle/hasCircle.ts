import { isObject } from "../../utils";

function hasCircle(obj: any): boolean {
  const s = new Set();
  function _checkCircle(obj: any): boolean {
    if (!isObject(obj)) return false;
    const keys = Object.keys(obj);
    for (const key of keys) {
      const o = obj[key];
      if (s.has(o)) return true;
      s.add(o);
      if (_checkCircle(o)) return true;
    }
    return false;
  }
  return _checkCircle(obj);
}
