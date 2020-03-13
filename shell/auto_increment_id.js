db.createCollection("products");
db.createCollection("counters");
db.counters.insert({
    _id: "productId",
    sequence_value: 0
});
function getNextSequenceValue(sequenceName) {
    var sequenceDocument = db.counters.findAndModify({
        query: {
            _id: sequenceName
        },
        update: {
            $inc: {
                sequence_value: 1
            }
        },
        "new": true
    });
    return sequenceDocument.sequence_value;
};
db.products.insert({
    "_id": getNextSequenceValue("productId"),
    "product_name": "iPad Pro"
});
db.products.insert({
    "_id": getNextSequenceValue("productId"),
    "product_name": "MacBook Pro"
});