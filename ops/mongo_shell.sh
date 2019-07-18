/*
    客户端连不上MongoDB，提示需要新key
    1 重新输入密码/清除keychain保存的密码
    2 ssh-keygen -R host 生成新的key
 */
mongo db名称 --host=x.x.x.x --authenticationDatabase admin --port 2701x -u "xxx" -p "xxx"