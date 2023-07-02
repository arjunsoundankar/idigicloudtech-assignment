import React from 'react';
import BreadcrumbsComponent from '../../breadcrumbs';

interface WorkplaceProps{
    locale: string;
  }

const Workplace: React.FC<WorkplaceProps> = ({locale}) => {
  return (
    <div>
      <BreadcrumbsComponent route={locale}/>
      <h1>Workplace</h1>
    </div>
  );
};

export default Workplace;
