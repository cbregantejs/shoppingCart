import { useState, useEffect } from "react";
import { getProducts } from '../helpers/getProducts';

export const useFechProducts = (  ) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect( () => {
     getProducts()
      .then( products => {
        setState({
          data: products,
          loading: false
        });        
      })
  }, []);

  return state;
}
