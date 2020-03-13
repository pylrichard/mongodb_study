/*
    参数说明：
    criteria：查询条件
    objNew：update对象和一些更新操作符
    upsert：如果不存在update的记录，是否插入objNew这个新的文档，true为插入，默认为false，不插入
    multi：默认是false，只更新找到的第一条记录。如果为true，把按条件查询出来的记录全部更新
 */
db.collection.update(criteria, objNew, upsert, multi);
//更改字段名称
db.collection.update({}, { $rename: { "field1": "field3" } }, false, true);
//删除字段
db.collection.update({}, { $unset: { "field2": "" } }, false, true);