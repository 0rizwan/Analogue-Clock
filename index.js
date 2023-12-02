function Clock(){
    setInterval(()=>{
        date = new Date();
        hTime = date.getHours();
        mTime = date.getMinutes();
        sTime = date.getSeconds();
        hRotate = 30*hTime + mTime/2;
        mRotate = 6*mTime;
        sRotate = 6*sTime;
        hour.style.transform = `rotate(${hRotate}deg)`; 
        minutes.style.transform = `rotate(${mRotate}deg)`;
        seconds.style.transform = `rotate(${sRotate}deg)`;
    }, 1000)
    // console.log("bsdk")
}
Clock();