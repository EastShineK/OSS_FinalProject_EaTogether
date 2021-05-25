const path = require('path')

module.exports = function(app)
{
    

    app.get('/storelist_ChineseFood.html', function(request, response){
      response.sendFile(path.join(__dirname, '../storelist_ChineseFood.html'));
    })
}