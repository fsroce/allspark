enum HTMLTag {
  Div = "div",
  Span = "span",
  H3 = "h3",
  Img = "img",
  P = "p",
  Ol = "ol",
  Li = "li",
  Ul = "ul",
}

type JSONType = {
  label: HTMLTag;
  attrs: {
    className: string;
  };
  content: string;
  style: CSSStyleSheet;
  children: JSONType[];
};

export default JSONType;
