export const getMovies =async() =>{
  try{
  const response = await fetch (`/api/get-movies`,{
      method:'GET',
  })
  const result = await response.json();
  return result;
  }
  catch(error){
      return error;
  }
  }
  

export async function getMovieDetails(movieId:number) {
    try{
        const url=`/api/get-movie-details/${movieId?? 0}`;
        const response= await fetch (url);
        if(!response.ok){
            return `Movie with id ${movieId} not found`
        }
        const result= await response.json();
        return result;

    }
    catch(error){
        return error
    }
}