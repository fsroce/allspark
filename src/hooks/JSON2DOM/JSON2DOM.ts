import JSONType from "./type";
import { h, VNode } from "vue";
const JSON2DOM = (json: JSONType): VNode => {
  const {
    label = "",
    children = [],
    attrs = {},
    style = {},
    content = "",
  } = json;
  let childNodes: Array<VNode | string> = [];
  content && childNodes.push(content);
  if (children.length) {
    childNodes = childNodes.concat(children.map((item) => JSON2DOM(item)));
  }
  return h(label, { ...attrs, style }, childNodes);
};

export default JSON2DOM;
