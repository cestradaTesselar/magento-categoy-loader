const Magento2Client = require('magento2-rest-client').Magento2Client
const options = require('./config.json')
const client = Magento2Client(options)
const Categories = require('./Categories.json')

client.categories.list().then(categories => console.log('En lista: ', categories))

Categories.map(cat => client.categories.create({
    "category": {
        "parentId": 4,
        "name": cat,
        "isActive": true,
        "includeInMenu": true,
    }
}).then(res => console.log(res)))