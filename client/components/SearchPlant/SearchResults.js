import React from 'react';
import { Link } from 'react-router-dom';

function SearchResults(props) {
  console.log(props);

  return (
    <div className="AllPlants Container">
      {props.plants.map((plant) => {
        return (
          <Link
            to={{
              pathname: '/plant',
              userPlant: plant,
            }}
            key={plant.id}
          >
            <div className="Plant Container">
              <img src={plant.image_url} />
              <p className="plantName">{plant.common_name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default SearchResults;
