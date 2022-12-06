import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser';
import { useRouter } from 'next/router';
import UserService from '../../../Service/UserService';

const ViewPage = () => {

  
  const router = useRouter()
  const { id } = router.query

  const [html,setHtml] = useState('');
  console.log("id=====", id)
   

  useEffect(()=>{
    getPage()
  },[])

  const getPage = async ()=>{
    const accestoken = localStorage.getItem('accessToken');

    await UserService.getOnePages(id,accestoken).then((data)=>{
      console.log('datatttatat',data.data.html)
      setHtml(data?.data?.html)
    })
  }
  
  const options = {
    replace: (domNode) => {
      if (domNode.attribs && domNode.attribs.class === 'remove') {
        return <>
        </>;
      }
    },
  };
  return parse(html, options);
}

export default ViewPage