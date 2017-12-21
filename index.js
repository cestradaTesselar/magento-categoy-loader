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

// for (let i = 0; i < Categories.length; i++) {

//     let newCategory = {
//         category: {
//             parentId: 4,
//             name: Categories[i],
//             isActive: true,
//             includeInMenu: true,
//         }
//     }

//     client.categories.create(newCategory).then(result => console.log(result))
// }

