// import React, { useState, useEffect, useRef } from 'react'
// import { useRouter } from 'next/router';
// import UserService from '../../../Service/UserService';
// import EmailEditor from 'react-email-editor';
// import sample from "../sample.json";
// import { Box, FormControl, InputLabel, NativeSelect, TextField } from '@mui/material';


// const EditPage = () => {

//   const emailEditorRef = useRef(null);
//   const [onLoadData, setOnLoadData] = useState()
//   const [data, setData] = useState('')
//   const [user, SetUser] = useState()

//   const router = useRouter()
//   const { id } = router.query


//   useEffect(() => {
//     getPage()
//   }, [])

//   const getPage = async () => {
//     const accestoken = localStorage.getItem('accessToken');

//     await UserService.getOnePages(id).then((data) => {
//       setOnLoadData(data?.data)
//       setData(data?.data?.html)
//     })
//   }

//   const onDesignLoad = (data) => {
//     console.log("onDesignLoad", data);
//   };

//   const onLoad = () => {
//     emailEditorRef.current.editor.addEventListener(
//       "onDesignLoad",
//       onDesignLoad
//     );
//     emailEditorRef.current.editor.loadDesign(sample);
//   };
//   const generateSlug = async (str) => {
//     str = str.replace(/^\s+|\s+$/g, ''); // trim
//     str = str.toLowerCase();

//     // remove accents, swap ñ for n, etc
//     var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
//     var to = "aaaaeeeeiiiioooouuuunc------";
//     for (var i = 0, l = from.length; i < l; i++) {
//       str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
//     }

//     str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
//       .replace(/\s+/g, '-') // collapse whitespace and replace by -
//       .replace(/-+/g, '-'); // collapse dashes


//     return str;
//   }
//   const onReady = () => {
//     // editor is ready
//     console.log('onReady');
//   };
//   console.log(onLoadData, "---")


//   console.log("id=====", id)
//   return (
//     <div>
     
//       <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
//     </div>
//   )
// }

// export default EditPage











import React, { useEffect, useRef, useState } from 'react';
import EmailEditor from 'react-email-editor';
import dynamic from 'next/dynamic'
import { AppBar, Box, Button, FormControl, InputLabel, NativeSelect, TextField, Toolbar } from '@mui/material';
import UserService from '../../../Service/UserService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import sample from "../sample.json";
const EditPage = () => {
  const router = useRouter()

  const [user, SetUser] = useState()
  const [name, setName] = useState();

  const [status, setStatus] = useState('Published');
  const [slug, setSlug] = useState();
  const [onLoadData, setOnLoadData] = useState()
  const [data, setData] = useState('')

  const emailEditorRef = useRef(null);
  const { id } = router.query

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem('loginUser'));
    if(u.role.title === 'Author'){
      setStatus('UnPublished')
    }
    SetUser(u);
    getPage()
  }, [])

  const exportHtml = async () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      pageFn(html,design)
      console.log('designdesign', design);
    });
  };

  const getPage = async () => {
    const accestoken = localStorage.getItem('accessToken');

    await UserService.getOnePages(id).then((data) => {
      console.log("@@@@@@@@@@@@@@@@2",data)
      setStatus(data?.data?.status)
      setName(data?.data?.name)
      setSlug(data?.data?.slug)

      setOnLoadData(data?.data)
      setData(data?.data?.html)
    })
  }
console.log("----",status,'---',name,'----',slug)
  const pageFn = async (html,design) => {
    const s = await generateSlug(slug)
    const accestoken = localStorage.getItem('accessToken');
    const u = JSON.parse(localStorage.getItem('loginUser'));
    console.log(u)
    const pagedata = {
      name: name,
      description: ' ',
      author: u.id,
      status: status,
      slug: s,
      html: html,
      design:JSON.stringify(design)
    }
    console.log(pagedata)
    await UserService.createPageApi(pagedata, accestoken).then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        router.push('/Dashboard/AdminDashboard/PageList')
      }
    })
  }

  const onDesignLoad = (data) => {
    console.log("onDesignLoad", data);
  };

  const onLoad = () => {
    emailEditorRef.current.editor.addEventListener(
      "onDesignLoad",
      onDesignLoad
    );
    emailEditorRef.current.editor.loadDesign(sample);
  };
  const onReady = () => {
    console.log('onReady');
  };

  const generateSlug = async (str) => {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaeeeeiiiioooouuuunc------";
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes


    return str;
  }

  return (
    <div>
      <ToastContainer />

      {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: 'Silver' }}>
          <Toolbar>
            <Button onClick={exportHtml}>Create Page</Button>
          </Toolbar>
        </AppBar>
      </Box> */}
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch', marginTop: '25px' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="name" variant="outlined" defaultValue={name} onChange={(e) => { setName(e.target.value) }} />
     
        {user && user?.role?.title === 'Author' ? '' : <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Status
          </InputLabel>
          <NativeSelect onChange={(e) => setStatus(e.target.value)}  defaultValue={status}>
            <option value='Published'>Published</option>
            <option value='UnPublished'>UnPublished</option>
          </NativeSelect>
        </FormControl>}

        <TextField id="standard-basic" label="slug" variant="outlined"  defaultValue={slug} onChange={(e) => { setSlug(e.target.value) }}/>
      </Box>
      <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
    </div>

  );
}



export default EditPage


