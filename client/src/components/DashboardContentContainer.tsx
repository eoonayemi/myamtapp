import React from "react";

const DashboardContentContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-white-shade001 p-5 md:p-5 overflow-x-hidden overflow-y-auto h-screen">
      {children}
    </div>
  );
};

export default DashboardContentContainer;
