import axios from 'axios';

const API_KEY = '28368947-301ca8f9e8bcf54643070db80';
axios.defaults.baseURL = 'https://pixabay.com/api';


export class GetPixabyApi {
    constructor() { 
        this.searchQuery = '';
        this.page = 1;        
    }
    
    async fetchImages() {
        const searchParams = new URLSearchParams({
        key: API_KEY,
        q: this.searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
     
        safesearch: true,
        page: this.page,
        per_page: 40

        });
        const { data } = await axios.get(`?${searchParams}`);
        
        this.incrementPage();       

        return data;
    }

   
    get query() {
        return this.searchQuery
    };

    set query(newSearchQuery) {
        this.searchQuery = newSearchQuery
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }
    
}





    

    
