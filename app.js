/**
MONGODB SERVER
1: login MongoDB
2: New Project
3: đặt tên project và đợi 
5: lấy đường dẫn 
6: kết nối mongoDB với noSQLBooster
7: vào connect -> from uri và pate đường dẫn vào(nhớ thêm uer và pas)
8: tạo foder code js và thêm câu lệnh npm install mongodb --save
9: viết code tao bang them sua xoa data

 */



// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Phamminhduc98:1998@cluster0.mbuwn.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });




const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Phamminhduc98:1998@cluster0.mbuwn.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(function (err, db) {
    if (err) throw err;
    var dbo = db.db("NodeJSMongoDB");//su dung CSDL NodeJSMongoDB
    console.log("Connect thanh cong");
    // dbo.createCollection("TableTow", function (err, res) {//tao bang moi
    //     if (err) throw err;
    //     console.log("Tao bang thanh cong");
    // });

    // //Insert du lieu
    // var myObj = { name: "Admin Pham Minh Duc 1998", address: "Dien Chau - Nghe An" };
    // dbo.collection("TableTow").insertOne(myObj,function(err,res){
    //     if(err) throw err;
    //     console.log("Insert thanh cong");
    //     db.close();
    // })


    // //Delete du lieu
    // var myQuery = { name: "Admin Minh Duc", address: "Nghe An" };
    // dbo.collection("TableTow").deleteOne(myQuery,function(err,res){
    //     if(err) throw err;
    //     console.log("Delete thanh cong");
    //     db.close();
    // })


    // //Update du lieu
    // var myQuery = { name: "Admin 1998", address: "Dien Chau - Nghe An" };
    // var newValue = {$set:{name:"PHAM MINH DUC", address:"NGHE AN"}};
    // dbo.collection("TableTow").updateOne(myQuery,newValue,function(err,res){
    //     if(err) throw err;
    //     console.log("Update thanh cong ");
    //     db.close();
    // })

    // //Find du lieu dau tien
    // dbo.collection("TableTow").findOne({name:"PHAM MINH DUC"},function(err,obj){
    //     if(err) throw err;
    //     console.log("Find thanh cong " + obj.name + " " + obj.address);
    //     db.close();
    // })


    // //Find All du lieu 
    // dbo.collection("TableTow").find({}).toArray(function(err,obj){
    //     if(err) throw err;
    //     console.log("Find thanh cong " + obj.name + " " + obj.address);
    //     db.close();
    // })

});
