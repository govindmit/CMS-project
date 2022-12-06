import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router';
import UserService from '../../../Service/UserService';
import EmailEditor from 'react-email-editor';



const EditPage = () => {

  const emailEditorRef = useRef(null);
  const [onLoadData, setOnLoadData] = useState()
  const [data, setData] = useState('')

  const router = useRouter()
  const { id } = router.query


  useEffect(() => {
    getPage()
  }, [])

  const getPage = async () => {
    const accestoken = localStorage.getItem('accessToken');

    await UserService.getOnePages(id, accestoken).then((data) => {
      // console.log('datatttatat', data.data.html)
      setOnLoadData(data?.data)
      setData(data?.data?.html)
    })
  }
  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(data);
  }
  const onReady = () => {
    // editor is ready
    console.log('onReady');
  };
  console.log(onLoadData, "---")


  console.log("id=====", id)
  return (
    <div> <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} /></div>
  )
}

export default EditPage