function  get(url) {
    return fetch(
        url,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwttoken')
            },
        }    
    
    );
        
}