import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto max-w-7xl py-8 sm:px-12 lg:px-2">{children}</div>
  );
}
