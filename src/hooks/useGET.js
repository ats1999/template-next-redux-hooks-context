import {useState,useEffect} from "react";
import axios from "axios"
function useGET(url){
    const [request, setRequest] = useState({
        data:null,
        loading:true,
        err:false,
        errMsg:""
    });

    useEffect(()=>{
        axios.get(url)
        .then(res=>setRequest({...request,data:res.data,loading:false}))
        .catch(err=>{
            console.log(err);
            setRequest({...request,err:true,errMsg:err?.response?.data});
        });
    },[]);

    return request;
}

export default useGET;
