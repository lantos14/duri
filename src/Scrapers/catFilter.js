
export default class productCategories {

    constructor() {
        this.filter = {
            "ingek-blúzok": {
                "promod": 'ing-bluz',
                "hm": 'ingek-es-bluzok',
            },
            "pulóverek-kardigánok": {
                "promod": 'pulover-kardigan',
                "hm": 'kardiganok-es-puloverek',
            },
            "ruhák": {
                "promod": 'ruha',
                "hm": 'ruhak',
            }
        },
        
        this.fetchList = {
            "promod": [
                'pulover-kardigan',
                'top-t-shirts',
                'ing-bluz',
                'ruha',
                'szoknya',
                'kabat',
                'nadrag',
                'farmer',
                'short',
        
            ],
            "hm": [
                'kardiganok-es-puloverek',
                'felsok',
                'ingek-es-bluzok',
                'ruhak',
                'szoknyak',
                'nadragok',
                'farmerek',
                'kotottek',
            ]
        };
    }

    // use this method to parse the incoming product names to the specific store format
    parseInput(query, store) {
        let result = [];
        query.forEach(cat => {
            result.push(this.filter[cat][store]);
        });
        return result;
    }

}
