import React from "react";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";
import {
  doc,
  query,
  getDocs,
  orderBy,
  setDoc,
  addDoc,
  arrayUnion,
  where,
  collection,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "@jumbo/services/auth/firebase/firebase";

const Comments = ({ comments, campaignId }) => {

  // const data =[
  //   {
  //     userId: '02b',
  //     comId: '017',
  //     fullName: 'Lily',
  //     userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
  //     text: 'I think you have a point🤔',
  //     avatarUrl: 'https://ui-avatars.com/api/name=Lily&background=random',
  //     replies: []
  //   }
  // ]
  comments = comments.map(function(comment){
    let replies = comment.replies.map((reply)=>{
      if(reply.length > 0){
        return JSON.parse(reply);
      }else{
        return reply;
      }
    })

    return {...comment,replies}
  })
  
  return (
    <CommentSection
      currentUser={{
        currentUserId: "01a",
        currentUserImg:
          "https://ui-avatars.com/api/name=Riya&background=random",
        currentUserProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
        currentUserFullName: "Riya Negi",
      }}
      formStyle={{ backgroundColor: "white" }}
      titleStyle={{ fontSize: "17.69px" }}
      hrStyle={{ border: "0.5px solid #fff" }}
      overlayStyle={{position:"relative",width:"auto",height:"auto",background:"transparent"}}
      submitBtnStyle={{
        fontSize: 13.69,
        border: "0.5px solid #FFF",
        backgroundColor: "#782FEE",
        borderRadius: "3px 11px 3px 11px",
      }}
      cancelBtnStyle={{
        fontSize: 13.69,
        backgroundColor: "#D3D3D3",
        color: "black",
        border: "0.5px solid #fff",
        borderRadius: "11px 3px 11px 3px",
      }}
      logIn={{
        loginLink: "http://localhost:3001/",
        signupLink: "http://localhost:3001/",
      }}
      commentData={comments}
      onSubmitAction={(data) => {
        setDoc(doc(db, "campaigns", campaignId, "comments",data.comId), data);
      }}
      onReplyAction={async (data) => {
        const q = doc(db,"campaigns",campaignId,"comments",data.repliedToCommentId);
        updateDoc((q),{
          replies: arrayUnion(JSON.stringify({
            comId: data.comId,
            userId:data.userId,
            avatarUrl: data.avatarUrl,
            text: data.text,
            profileUrl: data.profileUrl,
            fullName: data.fullName
          }))
        })
      }}
      currentData={(data) => {
        // console.log("curent data", data);
      }}
    />
  );
};

export default Comments;

// import './Comments.css';
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { TextField, Button, Divider } from '@mui/material'

// import {useState} from 'react'

// function Comments() {

//   const commentsContents = [
//     {
//       user: {
//         username: 'Julian#000',
//         profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FuEJbKwDdaz1h387130xmYkAIQbZpahhbQ&usqp=CAU',
//       },
//       content: 'This is so cool!',
//       voteCount: 20,
//       userVote: 1,
//     },
//     {
//       user: {
//         username: 'Thompson#132',
//         profilePicture: 'https://play-lh.googleusercontent.com/I-Yd5tJnxw7Ks8FUhUiFr8I4kohd9phv5sRFHG_-nSX9AAD6Rcy570NBZVFJBKpepmc',
//       },
//       content: 'I like this! I like this! I like this! I like this! I like this! I like this! I like this! I like this! I like this! I like this! I like this! I like this! I like this! ',
//       voteCount: 13,
//       userVote: -1,
//       replies: [
//         {
//           user: {
//             username: 'Johnny#007',
//             profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FuEJbKwDdaz1h387130xmYkAIQbZpahhbQ&usqp=CAU',
//           },
//           content: 'Can you stop',
//           voteCount: 4,
//           userVote: 0,
//         },
//         {
//           user: {
//             username: 'Thompson#132',
//             profilePicture: 'https://play-lh.googleusercontent.com/I-Yd5tJnxw7Ks8FUhUiFr8I4kohd9phv5sRFHG_-nSX9AAD6Rcy570NBZVFJBKpepmc',
//           },
//           content: 'No',
//           voteCount: -1,
//           userVote: 0,
//         }
//       ]
//     },
//     {
//       user: {
//         username: 'Morgan#989',
//         profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FuEJbKwDdaz1h387130xmYkAIQbZpahhbQ&usqp=CAU',
//       },
//       content: 'This is so cool!',
//       voteCount: 5,
//       userVote: 0,
//     },
//   ]

//   return (
//     <div>
//       <CommentTextBox/>
//       <Divider  style={{width:450}}/>
//       <br />
//       {commentsContents.map(c => <CommentElem {...c}/>)}
//     </div>
//   );
// }

// export default Comments;

// function CommentElem({user, content, voteCount, userVote, replies}) {
//   // profile picture, username, comment content, like/dislike
//   const [upSelected, setUpSelected] = useState(userVote > 0);
//   const [downSelected, setDownSelected] = useState(userVote < 0);
//   // console.log(upSelected, downSelected)
//   const [renderTextBox, setRenderTextBox] = useState(false)

//   const handleReply = (e) =>{
//     e.preventDefault();
//     setRenderTextBox(!renderTextBox);
//   }

//   return (
//     <div className="CommentElem">
//       <div className='voting'>
//         <ArrowDropUpIcon style={{marginBottom:-10, color:upSelected ? '#000' : '#aaa'}}/>
//         <div style={{color:'#444', fontWeight:'bold'}}>{voteCount}</div>
//         <ArrowDropDownIcon style={{marginTop:-10, color:downSelected ? '#000' : '#aaa'}}/>
//       </div>
//       <img style={{width:40, height:40, borderRadius:10000, marginTop:5, objectFit:'cover'}} src={user.profilePicture} alt='profile-pic'/>
//       <div style={{paddingLeft:20}}>
//         <a href='#' style={{fontWeight:'bold'}}>{user.username}</a>
//         <div style={{marginBottom:-10}}>{content}</div>
//         <a href='#' onClick={handleReply} style={{fontWeight:'bold', fontSize:10}}>reply</a>
//         {renderTextBox ? <CommentTextBox /> : <></>}
//         {replies ? <div style={{marginLeft:-30}}>
//           {replies.map(c => <CommentElem {...c}/>)}
//         </div> : <></>}
//       </div>

//     </div>
//   )
// }

// function CommentTextBox(){
//   return (
//     <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:450, margin:10}}>
//       <TextField multiline={true} placeholder='Make a comment...' variant="standard"
//           InputProps={{
//             disableUnderline: true,
//           }} fullWidth/>
//       <div style={{color:'#782eee'}}>
//             <Button style={{borderRadius:0}} color='inherit'>Send</Button>
//       </div>
//     </div>
//   )
// }
