window.onload = function(){
    function $(id){
        return document.getElementById(id);
    }
    //�Զ���ȡ����
    var search = $("search");
    search.focus();
    //�Զ�ѡ��
    search.onmouseover = function(){
        this.select();
    }
    // �û���ʽѡ��
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