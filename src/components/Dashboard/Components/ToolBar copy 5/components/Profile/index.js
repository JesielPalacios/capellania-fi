import './Profile.styles.css'

export const Profile = () => (
  <li className="profile">
    <div className="profile-details">
      <img src="profile.png" alt="profileImg" />
      <div className="name_job">
        <div className="name">Jesiel Palacios</div>
        <div className="job">Full Stack Developer</div>
      </div>
    </div>
    <i className="bx bx-log-out" id="log_out"></i>
  </li>
)
