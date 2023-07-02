import React from 'react';
import BreadcrumbsComponent from '../../breadcrumbs';

interface AnalysisProps{
    locale: string;
  }

const Analysis: React.FC<AnalysisProps> = ({locale}) => {
  return (
    <div>
      <BreadcrumbsComponent route={locale}/>
      <h1>Analysis </h1>
    </div>
  );
};

export default Analysis;
