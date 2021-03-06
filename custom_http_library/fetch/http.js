class http{
    //Make http GET request
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
        .then(response => response.json())
        .then(data => 
            {
                resolve(data);
            })
        .catch(error => reject(error));
        });
        }

    //Make http POST request
    post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    //Make http PUT request
    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    //Make http DELETE request
    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
            })
            .then(response => response.json())
            .then(() => resolve('Resource deleted'))
            .catch(err => reject(err));
        });
    }

    

}