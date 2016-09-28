window.onload = function(){
    function $(id){
        return document.getElementById(id);
    }
    //自动获取焦点
    var search = $("search");
    search.focus();
    //自动选择
    search.onmouseover = function(){
        this.select();
    }
    // 用户样式选择
    var user_type = $("user_type");
    var user_a = user_type.getElementsByTagName("a");
    var len = user_a.length;
    for(var i = 0; i<len; i++){
        user_a[i].onclick = function(){
            for(var i = 0;i<len;i++){
                user_a[i].className="";
            }
            this.className="current";
        }
    }

}