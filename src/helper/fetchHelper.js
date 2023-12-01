export async function fetchHelper(query, options) {
    
    try {
      const response = await fetch(`https://dummyjson.com${query}`, {...options,headers: {
        'Content-Type': 'application/json',
      }});

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
}