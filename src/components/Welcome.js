import './Welcome.css';
import im1 from './img/image.png'
export default function Welcome() {
  return (
    <section className="welcome">
      <div className="left">
        <div>
          <h1>Welcome to SelfSense</h1>
          <h3>STAY PREPARED, STAY PROTECTED</h3>
        </div>
        <pre>
          {`SafeSense is a self-defense platform that assesses your safety skills,
matches you with expert trainers, and guides you through
personalized training to boost your confidence and preparedness.`}
        </pre>
        <div>
          <h4>Ready to defend confidently</h4>
          <button>LET'S GET STARTED</button>
        </div>
      </div>
      <div className="right">
        <img src={im1} alt="nkar" />
      </div>
    </section>
  );
}
