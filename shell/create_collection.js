db.createCollection("xxxx");
//创建唯一索引
db.collection.createIndex({"field1": 1}, {unique: true});
db.collection.getIndexes();