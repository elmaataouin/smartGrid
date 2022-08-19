
import "./single.css";

import img1 from 'assets/images/users/avatar-nassime.jpg'
import Button from '@mui/material/Button';
import EditDialog from 'components/Modal/EditUser/EditDialog';
import ModeEditIcon from '@mui/icons-material/ModeEdit';



const Profile = () => {

  const row = [  { id: 1, avatar : img1 , userName: 'EL MAATAOUI Nassime', status: 'Active',role: 0 } ]
  return (
    <div className="single">
      <div className="singleContainer">
        <div className="top">
          <div className="left">
        {/* <Button className="editButton" variant="text">Edit</Button> */}
        <EditDialog icon = {<ModeEditIcon/>} data = { row }/>

            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={img1}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">EL MAATAOUI Nassime</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">elmaataouin@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Role </span>
                  <span className="itemValue">Admin</span>
                  </div>

            {/*     <div className="detailItem">
                  <span className="itemKey"></span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div> */}
              </div>
            </div>
          </div>
          <div className="right">
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Profile;