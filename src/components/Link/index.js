import { forwardRef } from "react";
import LinkNext from "next/link";
import { checkLocale } from "@/hooks/checkLocale";

const Link= (props, ref) => {
  const { href, ...rest } = props;

  const hasSource = !!href;

  if (!hasSource) {
    return null;
  }

  return (
    <LinkNext
      href={checkLocale(href)}
      {...rest}
      ref={ref}
    />
  );
};

export default forwardRef(Link);
