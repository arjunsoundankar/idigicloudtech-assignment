import React from 'react';
import BreadcrumbsComponent from '../../breadcrumbs';

interface ProjectDetailsProps{
  locale: string;
}


const ProjectDetails: React.FC<ProjectDetailsProps> = ({locale}) => {
  return (
    <div>
      <BreadcrumbsComponent route={locale}/>
      <h1>Project Details</h1>
    </div>
  );
};

export default ProjectDetails;
