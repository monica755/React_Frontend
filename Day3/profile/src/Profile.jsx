import Image from './assets/images/girl.avif'

const Profile = () => {
  return (<>
    <div style={{width:"400px",padding:"30px",height:"450px",borderRadius:"10px",boxShadow:"1px 2px 1px 2px",margin:"30px auto"}}>
<h2 style={{padding:"10px",textAlign:"center"}}>My Profile</h2>

<div style={{textAlign:"center"}}>
  <img src={Image} alt="" width="100px" />
  <p><strong>Name:</strong>Monicakarthikeyan</p>
  <p><strong>Role:</strong>Front developer</p>
  <button style={{backgroundColor:"green",padding:"10px",borderRadius:"10px"}}>submit</button>
</div>

    </div>
  </>)
}

export default Profile
