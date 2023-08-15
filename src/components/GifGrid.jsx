import React from "react";
import CardGifGrid from "./CardGifGrid";
import { useFetchGifs } from "../hooks/useFetchGifs";

export function GifGrid({ category }) {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <CardGifGrid key={image.id} {...image} />
        ))}
      </div>
    </>
  );
}

export default GifGrid;
