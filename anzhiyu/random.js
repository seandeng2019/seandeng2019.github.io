var posts=["2024/09/08/hello-world/","2024/09/09/我的第一篇blog/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };