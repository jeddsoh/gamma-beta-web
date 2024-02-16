import React, { ReactNode, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  ...props
}) => {
  // Define a consistent, default padding
  const basePadding = "py-24 px-4"; // Example padding, adjust as needed

  return (
    <div className={`mx-auto container ${basePadding} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
