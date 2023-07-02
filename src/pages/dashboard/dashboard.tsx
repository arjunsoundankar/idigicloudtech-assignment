import React from 'react';
import BreadcrumbsComponent from '../../breadcrumbs';

interface DashboardProps{
    locale: string;
  }
  
const Dashboard: React.FC<DashboardProps> = ({locale}) => {
  return (
    <div>
        <BreadcrumbsComponent route={locale}/>
      <h1>Dashboard  </h1>
    </div>
  );
};

export default Dashboard;
