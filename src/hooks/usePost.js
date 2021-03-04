const baseurl='http://localhost:8080/'
const Postdata=async(url = '', method='POST',data = {})=> {
    let resdata={};
    console.log(baseurl+url)
    try{
      console.log(JSON.stringify(data))
        const response = await fetch(baseurl+url, {
            method:method,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin':'*'
            },
            body:JSON.stringify(data)
          });
          if (response.status >=300) {
            data=await response.text();
            resdata=0
            alert(JSON.stringify(data))
            
        }else
           resdata=await response.json();
    }catch(e){
        console.log(e.message)
    }
    
    return resdata;
  }
  const PostFormdata=async(url = '', method='POST',data = {})=> {
    
    var formData = new FormData();
    Object.keys(data).map(item=>formData.append(item,data[item]));
   
    const response = await fetch(baseurl+url, {
      method:method,
      headers: {
       // 'access-control-allow-origin':'*'
      },
      body: formData
    });
    const resdata=await response.json();
    return resdata;
  }
  const GetData=async(url = '')=> {
    
  
   
    const response = await fetch(baseurl+url, {
     
    });
    const resdata=await response.json();
    return resdata||[];
  }
  export  {Postdata,PostFormdata,GetData}