
import { getTodosJson } from '../slices/AllProductsReducer'



export function getTodos(){

    return async ( dispatch , getState ) => {

      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();

       dispatch(getTodosJson(data))
      
     
    }

}