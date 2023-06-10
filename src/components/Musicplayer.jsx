import React, { useRef, useState } from 'react';
import './musicplayer.css';

const Musicplayer = () => {

    const [currentMusicDetails,setCurrentMusicDetails] = useState({
        songName : "accident",
        songArtist : "Big Bag",
        songSrc : "./Assets/songs/accident.m4a",
        songAvatar : '/Assets/Images/image1.jpg'
    })
const currentAudio = useRef();
    const [audioProgress, setAudioProgress] = useState(0);
    const [isAudioPlaying , setIsAudioPlaying] = useState(false);
    const [musicIndex, setMusicIndex] = useState(0);
    const [musicTotalLength , setMusicTotalLength] = useState('04 : 38');
    const [musicCurrentTime, setMusicCurrentTime] = useState("00 : 00");
    const [videoIndex, setVideoIndex] = useState(0);
    
    const handleMusicProgressBar = (e) => {
        setAudioProgress(e.target.value);
        currentAudio.current.currentTime = e.target.value * currentAudio.current.duration / 100;
    }

    let avatarClass = ['objectFitCover','objectFitContain','none'];
    const [avatarClassIndex,setAvatarClassIndex] = useState(0);

    const handleAvatar = ()=> {
        if(avatarClassIndex >= avatarClass.length -1){
            setAvatarClassIndex(0);
        }else{
            setAvatarClassIndex(avatarClassIndex +1)
        }
    }
    const handleAudioPlay = () => {
        if(currentAudio.current.paused) {
            currentAudio.current.play();
            setIsAudioPlaying(true);
        }else{
            currentAudio.current.pause();
            setIsAudioPlaying(false)
        }
    }

   

    const musicAPI = [
        {
            songName : "accident",
        songArtist : "Big Bag",
        songSrc : "./Assets/songs/accident.m4a",
        songAvatar : '/Assets/Images/image1.jpg',
        },
        {
            songName : "အချစ်မျက်ဝန်း",
        songArtist : "unknown",
        songSrc : "./Assets/songs/achitmyatwone.m4a",
        songAvatar : '/Assets/Images/image2.jpg',
        },
        {
            songName : "အချစ်ဆိုတာ လျှို့ဝှက်ချက်တစ်ခုပါ",
        songArtist : "Sai Htee Sai",
        songSrc : "./Assets/songs/aa.m4a",
        songAvatar : '/Assets/Images/image3.jpg',
        },
        {
            songName : "အမေ့အိမ်",
        songArtist : "Htoo Eain Theain",
        songSrc : "./Assets/songs/amayeain.m4a",
        songAvatar : '/Assets/Images/image4.jpg',
        },
        {
            songName : "A thousand year",
        songArtist : "unknown",
        songSrc : "./Assets/songs/athousandyear.m4a",
        songAvatar : '/Assets/Images/image1.jpg',
        },
        {
            songName : "ချစ်သူ့လက်ဆောင်",
        songArtist : "Htoo Eain Theain",
        songSrc : "./Assets/songs/chitthulatsaung.m4a",
        songAvatar : '/Assets/Images/image2.jpg',
        },
        {
            songName : "ဒိုင်ယာရီ",
        songArtist : "Lay Phyu",
        songSrc : "./Assets/songs/dairy.m4a",
        songAvatar : '/Assets/Images/image3.jpg',
        },
        {
            songName : "Dandelions",
        songArtist : "unknown",
        songSrc : "./Assets/songs/dandelions.m4a",
        songAvatar : '/Assets/Images/image4.jpg',
        },
        {
            songName : "ဒူးထောက်ပီ",
        songArtist : "Wine Wine",
        songSrc : "./Assets/songs/duuhtutp.m4a",
        songAvatar : '/Assets/Images/image1.jpg',
        },
        {
        songName : "သူငယ်ချင်းချစ်သူ",
        songArtist : "unknown",
        songSrc : "./Assets/songs/friendzone.m4a",
        songAvatar : '/Assets/Images/image2.jpg',
        },
        {
            songName : "ကြယ်တွေစုံတယ့်ည",
        songArtist : "Htoo Eain Theain",
        songSrc : "./Assets/songs/kyal.m4a",
        songAvatar : '/Assets/Images/image3.jpg',
        },
        {
            songName : "ပန်း",
        songArtist : "Adjustor",
        songSrc : "./Assets/songs/pann.m4a",
        songAvatar : '/Assets/Images/image4.jpg',
        },
        {
            songName : "Radio",
        songArtist : "G Fatt",
        songSrc : "./Assets/songs/radio.m4a",
        songAvatar : '/Assets/Images/image1.jpg',
        },
        {
            songName : "စံပယ်ဖြူလေးနဲ့ တွေ့တယ့်နောက်",
        songArtist : "G Fatt",
        songSrc : "./Assets/songs/sapalephyulaynae.m4a",
        songAvatar : '/Assets/Images/image2.jpg',
        },
        {
            songName : "စာ",
        songArtist : "Soe Lwin Lwin",
        songSrc : "./Assets/songs/sar.m4a",
        songAvatar : '/Assets/Images/image3.jpg',
        },
        {
            songName : "‌‌ဆေး",
        songArtist : "ကော်နီ",
        songSrc : "./Assets/songs/say.m4a",
        songAvatar : '/Assets/Images/image4.jpg',
        },
        {
            songName : "အချစ်ဆို သည်မှာ",
        songArtist : "Htoo Eain Thain",
        songSrc : "./Assets/songs/schitsothimar.m4a",
        songAvatar : '/Assets/Images/image1.jpg',
        },
        {
            songName : "စည်း",
        songArtist : "Wine Wine",
        songSrc : "./Assets/songs/see.m4a",
        songAvatar : '/Assets/Images/image2.jpg',
        },
        {
            songName : "ရှိနေမယ်",
        songArtist : "Han Tun",
        songSrc : "./Assets/songs/sheenaymal.m4a",
        songAvatar : '/Assets/Images/image3.jpg',
        },
        {
            songName : "စဉ်းစားပါအုံး",
        songArtist : "Sai Htee Sai",
        songSrc : "./Assets/songs/sinnsarparoone.m4a",
        songAvatar : '/Assets/Images/image4.jpg',
        },
        {
            songName : "Snap",
        songArtist : "unknown",
        songSrc : "./Assets/songs/snap.m4a",
        songAvatar : '/Assets/Images/image1.jpg',
        },
        {
            songName : "Sweet Mistake",
        songArtist : "Flokerose",
        songSrc : "./Assets/songs/sweetmistake.m4a",
        songAvatar : '/Assets/Images/image2.jpg',
        },
        {
            songName : "တစ်နေ့နေ့တော့ ချစ်၍လာလိမ့်မယ်",
        songArtist : "Htoo Eain Thein",
        songSrc : "./Assets/songs/tanaynay.m4a",
        songAvatar : '/Assets/Images/image3.jpg',
        },
        {
            songName : "Telephonitale",
        songArtist : "Adjustor",
        songSrc : "./Assets/songs/tele.m4a",
        songAvatar : '/Assets/Images/image4.jpg',
        },
        {
            songName : "သံလွင်ချောင်းခြား",
        songArtist : "Sai Htee Sai",
        songSrc : "./Assets/songs/thanlwinchaungchar.m4a",
        songAvatar : '/Assets/Images/image1.jpg',
        },
        {
            songName : "Toxic",
        songArtist : "unknown",
        songSrc : "./Assets/songs/toxic.m4a",
        songAvatar : '/Assets/Images/image2.jpg',
        },
    ]
    const handleNextSong= () => {
        if(musicIndex >= musicAPI.length -1){
            let setNumber = 0;
            setMusicIndex(setNumber);
            updateCurrentMusicDetails(setNumber);
        }else {
            let setNumber = musicIndex +1;
            setMusicIndex(setNumber)
            updateCurrentMusicDetails(setNumber);
        }
    }
    const handlePrevSong = () => {
        if(musicIndex === 0){
            let setNumber = musicAPI.length -1;
            setMusicIndex(setNumber);
            updateCurrentMusicDetails(setNumber);
        }else {
            let setNumber = musicIndex - 1;
            setMusicIndex(setNumber)
            updateCurrentMusicDetails(setNumber);
        }
    }
    const updateCurrentMusicDetails = (number) => {
        let musicObject = musicAPI[number];
        currentAudio.current.src = musicObject.songSrc;
        currentAudio.current.play();
        setCurrentMusicDetails({
            songName : musicObject.songName,
            songArtist :musicObject.songArtist,
            songSrc : musicObject.songSrc,
            songAvatar : musicObject.songAvatar,
        })
        setIsAudioPlaying(true);
        
      
    }
    const handleAudioUpdate = () => {
        let minutes = Math.floor(currentAudio.current.duration / 60);
        let seconds= Math.floor(currentAudio.current.duration % 60);
        let musicTotalLength0 = `${minutes < 10 ? `0${minutes}`: minutes} : ${seconds <10 ?`0${seconds}`: seconds}`;
        setMusicTotalLength(musicTotalLength0);

        // input music current time
        let currentMin = Math.floor(currentAudio.current.currentTime / 60);
        let currentSec= Math.floor(currentAudio.current.currentTime % 60);
        let musicCurrentT = `${currentMin < 10 ? `0${currentMin}`: currentMin} : ${currentSec <10 ?`0${currentSec}`: currentSec}`;
        setMusicCurrentTime(musicCurrentT);

        const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
        setAudioProgress(isNaN(progress) ? 0 : progress)
    }

    const vidArray = [
        './Assets/Videos/video1.mp4',
        './Assets/Videos/video2.mp4',
        './Assets/Videos/video3.mp4',
        './Assets/Videos/video4.mp4',
        './Assets/Videos/video5.mp4',
        './Assets/Videos/video6.mp4',

    ]

    const handleChangeBackground = () => {
        if(videoIndex >= vidArray.length -1){
            setVideoIndex(0);
        }else{
            setVideoIndex(videoIndex +1)
        }
    }
    return (
        <>
            <div className="containermusic">
                <audio src='./Assets/songs/accident.m4a' ref={currentAudio} onEnded={handleNextSong} onTimeUpdate={handleAudioUpdate}></audio>
                <video src={vidArray[videoIndex]} loop muted autoPlay  className='backgroundVideo'></video>
                <div className="blackScreen"></div>
                <div className="music-container">
                    <p className="musicPlayer">Music Player</p>
                    <p className="music-Head-Name">{currentMusicDetails.songName}</p>
                    <p className="music-Artist-Name">{currentMusicDetails.songArtist}</p>
                    <img src={currentMusicDetails.songAvatar} className={avatarClass[avatarClassIndex]} 
                    onClick={handleAvatar} alt="son Avaar" id='songAvatar' />
                    <div className="musicTimerDiv">
                        <p className="musicCurrentTime">{musicCurrentTime}</p>
                        <p className="musicTotalLength">{musicTotalLength}</p>
                    </div>
                    <input type="range" name='musicProgressBar' className='musicProgressBar' value={audioProgress}
                    onChange={handleMusicProgressBar} />
                    <div className="musicControlers">
                        <i className="fa-solid fa-backward musicControler" onClick={handlePrevSong}></i>
                        <i className={`fa-solid ${isAudioPlaying ? 'fa-pause-circle' : 'fa-circle-play'} playBtn`} onClick={handleAudioPlay}></i>
                        <i className="fa-solid fa-forward musicControler" onClick={handleNextSong}></i>
                    </div>
                </div>
                <div className="changeBackBtn" onClick={handleChangeBackground}>Change Background</div>
            </div>
        </>
    )
}



export default Musicplayer;