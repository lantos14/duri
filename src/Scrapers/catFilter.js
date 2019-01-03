
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
                'nadrag',
                'farmer',
                'cipo',
                'kabat',
                'zako-kiskabat',
                'overal',
                'short',
                'taskak',
        
            ],
            "hm": [
                'kardiganok-es-puloverek',
                'felsok',
                'ingek-es-bluzok',
                'ruhak',
                'szoknyak',
                'nadragok',
                'farmerek',
                'cipok',
                'kapucnisok-melegitofelsok',
                'kotottek',
                'basics',
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
