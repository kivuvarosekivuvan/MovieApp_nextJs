import { MOVIE_ACCESS_TOKEN,MOVIE_BASE_URL } from "@/app/config";
import { error } from "console";

export async function GET({params}:{params:{movie_id:string} }){
    const movie_id= params.movie_id;
    if(MOVIE_ACCESS_TOKEN){
        return new Response(`No movie access token found`,{
            status:404,
            statusText:'failed'
        })
    }
    if(MOVIE_BASE_URL){
        return new Response(`No movie base url found`,{
            status:404,
            statusText:'failed'
        })
    }

    try{
        const response=await fetch(`${MOVIE_BASE_URL}/3/movie/${movie_id}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${MOVIE_ACCESS_TOKEN}`
            }

        });
        const result= await response.json();
        return new Response (JSON.stringify(result),{
            status:200,
            statusText:'found'
        })

    }
    catch(error:any){
        return new Response(error,{
            status:404,
            statusText:'failed'
        })

    }
  

    // try {
    //     const request = await fetch('https://hp-api.onrender.com/api/character/:id', {    //the id is dynamic here (not hard coded)
    //         method: 'GET',
    //         headers: {
    //             "Content-Type": "application/json",
                
    //         },
    //     });
  
    //     if (!request.ok) {
    //         throw new Error(`Request failed with status ${request.status}`);
    //     }
  
    //     const responseJson = await request.json();
  
    //     return new Response(JSON.stringify(responseJson), {
    //         status: 200,
    //         statusText: 'Success',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     });
    // } catch (error) {
    //     return new Response(JSON.stringify({ error: error }), {
    //         status: 500,
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     });
    // }
  }