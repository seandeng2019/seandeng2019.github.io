var posts=["2024/09/09/免费虚拟主机/","2024/09/09/这是一篇新的博文/","2024/09/08/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };