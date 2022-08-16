
import "./single.css";

import img1 from 'assets/images/users/avatar-nassime.jpg'
import SensorTable from 'components/Table/TableDesCapteurs/Table'


const Profile = () => {
  return (
    <div className="single">
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
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
        <div className="bottom">
        <h1 className="title">Table capteur</h1>
        <SensorTable />
{/*           <List/>
 */}        </div>
      </div>
    </div>
  );
};

export default Profile;