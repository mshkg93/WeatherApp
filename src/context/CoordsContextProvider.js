import {useState, useContext} from 'react';
import {CoordsContext} from './coordsContext';

const CoordsContextProvider = ({children}) => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  return (
    <CoordsContext.Provider value={{lat, lng, setLat, setLng}}>
      {children}
    </CoordsContext.Provider>
  );
};

export default CoordsContextProvider;
