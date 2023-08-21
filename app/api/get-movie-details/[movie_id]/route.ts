export async function GET() {
  

    try {
        const request = await fetch('https://hp-api.onrender.com/api/character/:id', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                
            },
        });
  
        if (!request.ok) {
            throw new Error(`Request failed with status ${request.status}`);
        }
  
        const responseJson = await request.json();
  
        return new Response(JSON.stringify(responseJson), {
            status: 200,
            statusText: 'Success',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
  }