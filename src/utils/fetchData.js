export const exerciseOptions =  {
    method: 'GET',
    //params: {limit: '10'},
    headers: {
      
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '4245381770msha497eb962e51bc2p185e6bjsn66dbf0ee384d'
    }
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'd0c1c7b7a9mshf80e0919b294449p1d270fjsn05dd16c86bca'
    
  }
};



export const fetchData = async(url,options) => {
        const response = await fetch(url,options);
        const data = await response.json();
        return data;
}