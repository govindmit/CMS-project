import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser';
import { useRouter } from 'next/router';
import UserService from '../../../Service/UserService';

const ViewPage = () => {
  const router = useRouter()
  const { slug } = router.query

  const [html, setHtml] = useState('');

  console.log("slug ===", slug)
  useEffect(() => {
    getPage()
  }, [])


  const getPage = async () => {
    const accestoken = localStorage.getItem('accessToken');
    const slug = localStorage.getItem('viewFlag');
    await UserService.getOnePages(slug).then((data) => {
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

