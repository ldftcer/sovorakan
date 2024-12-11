import './Header.css';
import userimg from './img/user.png';
import laungeimg from './img/launge.png';

export default function Header() {
  const openLoginRegister = () => {
    const newWindow = window.open(`${window.location.origin}/login`, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <header>
      <div className="compname">
        <h1>Logo/SelfSense</h1>
      </div>
      <div className="helpmenu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Chat</a>
          </li>
          <li>
            <a href="/">Quizz</a>
          </li>
        </ul>
      </div>
      <div className="userprofil">
        <button onClick={openLoginRegister} className="link-button">
          Login/Register
        </button>
        <div className="img">
          <img src={userimg} alt="User" />
          <img src={laungeimg} alt="Language" />
        </div>
      </div>
    </header>
  );
}
