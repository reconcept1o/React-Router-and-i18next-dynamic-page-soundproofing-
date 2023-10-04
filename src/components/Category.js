

import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

function Category() {
  // URL'den kategori ID'sini alın
  const { id } = useParams();

  return (

         <div>
      <h2>Kategori Sayfası</h2>
      <p>Kategori ID: {id}</p>

    </div>

  
  );
}

export default Category;
