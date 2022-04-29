import "./../Styles/Rewards.css";
import Header from "../Components/Header";


const myRewards= () =>{
    const rewards={points:500};
    return<>
    <Header/>
    <div className="my-rewards">
        <h1>My Rewards</h1>
        </div>
        <div className="frame-one">
        <span className="instructions" ><br/><h4>Instructions</h4>
        <br/></span>
        <span className="text-one">* 10 Reward points are earned per night booking.</span><br/>
        <span className="text-one">* Redeemable on future bookings
        </span>
      </div>
      <br/>
      <div className="frame-two">
        <span className="text"><br/><h1>Currently Accumulated</h1>
        <br/>
       <span className="_500" >{rewards.points}</span>
        </span>
        <span className="points">Points</span>
      </div>
      </>
}
export default myRewards;