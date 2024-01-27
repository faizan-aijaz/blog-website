import React from 'react';
import {MDBBadge} from "mdb-react-ui-kit";

const Badge = ({children, styleInfo}) => {
    const colorKey = {
        Fashion: "primary",
        Travel: "success",
        Fitness: "danger",
        Food: "warning",
        tech: "info",
        sports: "dark",
    };
  return (
   <h5 style={styleInfo}>
        <MDBBadge color={colorKey[children]}>{children}</MDBBadge>
   </h5>
  )
};

export default Badge
