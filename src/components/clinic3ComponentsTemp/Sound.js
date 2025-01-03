import React, { useRef, useState } from 'react';

function Sound() {
  const [currentAudio, setCurrentAudio] = useState(null); // للتحكم في الصوت الحالي
  const [currentIcon, setCurrentIcon] = useState(null); // للتحكم في أيقونة التشغيل الحالية

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

  // إنشاء مراجع للأيقونات والأصوات بشكل آمن
  const audioRefs = useRef(songs.map(() => React.createRef()));
  const iconRefs = useRef(songs.map(() => React.createRef()));

  const playAudio = (index) => {
    const audioRef = audioRefs.current[index].current;
    const iconRef = iconRefs.current[index].current;

    // إذا كان هناك صوت آخر يعمل، قم بإيقافه
    if (currentAudio && currentAudio !== audioRef) {
      currentAudio.pause();
      currentIcon.textContent = '▶';
    }

    // تحكم في التشغيل/الإيقاف
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
        <div className="header-sound">
          <h2>Relaxing Sounds</h2>
        </div>
      

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
  );
}

export default Sound;
