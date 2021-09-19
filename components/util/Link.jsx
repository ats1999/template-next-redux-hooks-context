import Link from "next/link";
export default function LinkWrapper({ href, target, blue, children }) {
  return (
    <Link href={href}>
      <a
        style={{
          color: blue ? "blue" : "",
        }}
        target={target}
      >
        {children}
      </a>
    </Link>
  );
}

LinkWrapper.defaultProps = {
  href: "#",
  target: "_self",
  blue: false,
};
