
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
        }
    }

    // use this method to parse the incoming product names to the specific store format
    parseInput(query, store) {
        let result = [];
        query.forEach(cat => {
            console.log('cat: ', cat);
            result.push(this.filter[cat][store]);
        });
        console.log('--parseInput-result: ', result);
        return result;
    }

}

const list = {
    "promod": [
        'pulover-kardigan',
        'top-t-shirts',
        'ing-bluz',
        'ruha',
        'szoknya',
        'kabat',
        'zako-kiskabat',
        'nadrag',
        'farmer',
        'overal',
        'short',
        'taskak',
        'cipo',

    ],
    "hm": [
        'felsok',
        'ingek-es-bluzok',
        'kardiganok-es-puloverek',
        'kapucnisok-melegitofelsok',
        'nadragok',
        'farmerek',
        'szoknyak',
        'ruhak',
        'cipok',
        'kotottek',
        'basics',
    ]
};