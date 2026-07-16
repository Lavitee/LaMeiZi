import type { AnchorHTMLAttributes, ReactNode } from "react";
import { sitePage } from "./site-data";

type ReserveLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "children"
> & {
  children: ReactNode;
};

export function ReserveLink({ children, ...props }: ReserveLinkProps) {
  return (
    <a {...props} href={sitePage("/reserve")}>
      {children}
    </a>
  );
}
