/*
    遍历集合逐个文档修改字段类型
    2代表string类型
    $type见https://docs.mongodb.com/manual/reference/operator/query/type/
 */
db.collection.find({ "field": { "$type": 2 } }).forEach(function (doc) {
    doc.field = new NumberInt(doc.field);
    db.collection.save(doc);
});

db.collection.find({ "field": { "$type" : 2 } }).forEach(function (doc){   
    var isTrueSet = (doc.field === "true");
    doc.field = isTrueSet;
    db.collection.save(doc);
});

db.collection.find().forEach(function (doc) {
    db.collection.update(
        { "_id": doc._id },
        { "$set": { "field": new Date(doc.field) } }
    );
});

/*
    大数据量集合采用bulkWrite API
 */
var cursor = db.collection.find({ "field": { "$exists": true, "$type": 2 } }),
    ops = [];
cursor.forEach(function(doc) { 
    var isTrueSet = (doc.field === "true");
    ops.push({ 
        "updateOne": {
            "filter": { "_id": doc._id },
            "update": { "$set": { "field": isTrueSet } }
         }
    });

    if (ops.length == 1000) {
        db.collection.bulkWrite(ops);
        ops = [];
    }
});

if (ops.length > 0) {
    db.collection.bulkWrite(ops);
}