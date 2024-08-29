"use client"
import Block from "./block";


const WidgetBlocks = ({
  widgets = [],
  // slug,
}) => {
  const child = widgets.map((widget, i) => (
    <Block
      key={i}
      widget={widget}
      // slug={slug}
    />
  ));
  return child;
};

export default WidgetBlocks;
