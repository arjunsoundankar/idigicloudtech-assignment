/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface BreadcrumbsComponentProps{
  route: string;
}
const BreadcrumbsComponent: React.FC<BreadcrumbsComponentProps> = ({route}) => {
  return (
    <>
    <div className="breadcrums" role="presentation" >
    
    {route.split('.').length === 2 ?( 
      <>
    <Breadcrumbs  separator="›" aria-label="breadcrumb">
    <Link underline="hover" color="inherit" href={`/${route.split('.')[0]}`} >
    {route.split('.')[0]}
   </Link>
   <Typography color="text.primary" variant="body2">{route.split('.')[1]}</Typography> 
   </Breadcrumbs>
   </>
   ):(
    <Breadcrumbs  separator="›" aria-label="breadcrumb">
    <Typography variant="body2" color="text.primary">{route}</Typography>
    </Breadcrumbs>
   )
  }
  
  
    </div>
    </>
  );
}

export default BreadcrumbsComponent;