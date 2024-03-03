import React from "react";
interface IPageLayout {
  children?: React.ReactNode;
}
const PageLayout: React.FC<IPageLayout> = ({ children }) => {
  return <>{children}</>;
};

export default PageLayout;
