import TableComponent from '../TableComponent/TableComponent';
import './Supporters.css';
import PersonIcon from '@mui/icons-material/Person';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Grid} from '@mui/material';

function Supporters({supporters}) {

  // console.log('campaignData in supporters', campaignData)

  // let supporters = campaignData?.info?.supporters;
  // supporters = supporters?supporters: []
  // console.log('supporters',supporters)

  return (
    <div style={{display:'flex',flexDirection:'row',alignItems:"flex-start", flexWrap:'wrap', justifyContent:'flex-start'}}>
      {supporters.map((user,i)=>{
        if(!user.username) return false;
        return <SupporterElem key={i} user={user}/>
      })}
    </div>
  );
}

export default Supporters;

function SupporterElem({user}){

 return (
   <div style={{display:'flex', flexDirection:'row',alignItems:"center", justifyContent:'start',flexBasis:"33.3%", padding:20}}>
    {user?.photoURL ? <img alt='userProfilePic' src={user.photoURL} style={{borderRadius:18, width:34, height:34}}/> : <PersonIcon style={{border:"1px solid rgba(120,47,238,0.5)", width:34,height:34,borderRadius:18}}/>}
     <a href='#' style={{marginLeft:'10px'}}>{user.username}</a>
   </div>
 )
}