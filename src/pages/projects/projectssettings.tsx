import React from 'react';
import BreadcrumbsComponent from '../../breadcrumbs';

interface ProjectSettingsProps{
  locale: string;
}

const ProjectSettings: React.FC<ProjectSettingsProps> = ({locale}) => {
  return (
    <div>
      <BreadcrumbsComponent route={locale}/>
      <h1>Project Settings</h1>
    </div>
  );
};

export default ProjectSettings;
