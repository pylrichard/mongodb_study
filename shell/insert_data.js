/*
    批量插入数据到集合
 */
var app_id_array = [
    166,
    188
];
var user_info_array = [
    [666, "彭怼怼"],
    [888, "NoNo"]
];
for (i = 0, len1 = app_id_array.length; i < len1; i++) {
    for (j = 0, len2 = user_info_array.length; j < len2; j++) {
        db.app_info.insert( {
            app_id: app_id_array[i],
            user_id: user_info_array[j][0],
            user_name: user_info_array[j][1]
        } );
    }
}