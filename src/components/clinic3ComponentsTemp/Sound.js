import React, { useRef, useState } from 'react';
import icon1 from '../../assests/Images/images For C3/headset_6731957.png'
function Sound() {
  const [currentAudio, setCurrentAudio] = useState(null); // للتحكم في الصوت الحالي
  const [currentIcon, setCurrentIcon] = useState(null); // للتحكم في أيقونة التشغيل الحالية
  const [isBoxVisible, setIsBoxVisible] = useState(false); // حالة رؤية الصندوق

  const toggleBox = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  const songs = [
    {
      title: 'Sound of forest birds',
      cover: '/Clinics/clinic3/Forest.png',
      audio: '/Clinics/clinic3/forestAudio.mp3'
    },
    {
      title: 'The sound of rain and thunder',
      cover: '/Clinics/clinic3/Rain.png',
      audio: '/Clinics/clinic3/Rain.mp3'
    },
    {
      title: 'The sound of sea waves',
      cover: '/Clinics/clinic3/Sea.png',
      audio: '/Clinics/clinic3/Sea.mp3'
    }
  ];

  const audioRefs = useRef(songs.map(() => React.createRef()));
  const iconRefs = useRef(songs.map(() => React.createRef()));

  const playAudio = (index) => {
    const audioRef = audioRefs.current[index].current;
    const iconRef = iconRefs.current[index].current;

    if (currentAudio && currentAudio !== audioRef) {
      currentAudio.pause();
      currentIcon.textContent = '▶';
    }

    if (audioRef.paused) {
      audioRef.play();
      iconRef.textContent = '⏸';
      setCurrentAudio(audioRef);
      setCurrentIcon(iconRef);
    } else {
      audioRef.pause();
      iconRef.textContent = '▶';
      setCurrentAudio(null);
      setCurrentIcon(null);
    }
  };

  return (
    <div className="sound">
      {/* أيقونة ثابتة عند التمرير */}
      <div className="sticky-icon" onClick={toggleBox}>
        <img 
          src={icon1}
          alt="relaxing souunds"
          className="toggle-icon"
        />
      </div>

      {isBoxVisible && (
        <div className="song-box">
          {songs.map((song, index) => (
            <div className="song" key={index}>
              <span
                ref={iconRefs.current[index]}
                className="play-icon"
                onClick={() => playAudio(index)}
              >
                ▶
              </span>
              <img src={song.cover} alt="Cover" />
              <div className="song-info">
                <h3>{song.title}</h3>
                <audio ref={audioRefs.current[index]} src={song.audio}></audio>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sound;
