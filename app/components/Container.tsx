import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  isFooter?: boolean;
}

export default function Container({ children, isFooter }: ContainerProps) {
  return (
    <div className="mx-auto max-w-7xl py-8 px-12 lg:px-2 flex flex-col items-center">
      {isFooter ? (
        <div className="w-full flex flex-col items-start md:items-center">
          {children}
        </div>
      ) : (
        <div className="w-full flex flex-col items-center">{children}</div>
      )}
    </div>
  );
}
