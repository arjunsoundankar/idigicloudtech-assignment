import React from 'react';
import BreadcrumbsComponent from '../../breadcrumbs';

interface MonitorProps{
    locale: string;
  }


const Monitor: React.FC<MonitorProps> = ({locale}) => {
  return (
    <div>
      <BreadcrumbsComponent route={locale}/>
      <h1>Monitor</h1>
    </div>
  );
};

export default Monitor;
