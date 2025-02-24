import Button from "./Button";
import trackingMyButtonComp from "./trackingMyButtonComp";

const HoC = () =>{
    const ButtonTrack = trackingMyButtonComp(Button);
    return(
        <div>
            <h1>welcomme to Higher Order Components Hawk Tuah </h1>
            <Button value={"Login"} /> <br />
            <ButtonTrack value={"Login" } trackingInfo={{"CustID":"Hello","Password":"Password"}} / >
        </div>
    )
}

export default HoC;
