async function fetchdata(){
    var res = document.getElementById('output');
    res.className="har"
    var url=await fetch("https://jsonplaceholder.typicode.com/photos")
    var store=await url.json()
    store.map((akshaya)=>{
      var ak=document.createElement("div")
      ak.className="aa"
      res.appendChild(ak)
      var ha=document.createElement("p")
      ha.innerText=akshaya.id
       res.appendChild(ha)
       ak.appendChild(ha)
       var img2=document.createElement("img")
      img2.src=akshaya.url
      img2.className="zzz"
      res.appendChild(img2);
      ak.appendChild(img2)
      var t=document.createElement("p")
      t.innerText=akshaya.title
      res.appendChild(t)
      ak.appendChild(t)
    })
   }  
   fetchdata()
  