import axios from 'axios';

export class AccountRepository{
    url = 'http://localhost:8000';

    getAccounts(){
        return new Promise((resolve, reject) =>{
            axios.get(`${this.url}/user`)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);  
            })
        })
    }

    test(){
        return new Promise((resolve, reject) =>{
            axios.get(`${this.url}`)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);  
            })
        })
    }
    
}