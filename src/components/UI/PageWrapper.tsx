import { ReactNode } from "react";

type pageWrapperProps = {
  children: ReactNode;
};

export default function PageWrapper(props: pageWrapperProps) {
  return (
    <div className="m-8 pt-6 h-screen grid max-h-screen items-start">
      {props.children}
    </div>
  );
}
