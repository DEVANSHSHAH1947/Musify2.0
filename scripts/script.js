new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Arijit Singh",
          artist: "Jaan Nisaar",
          source: "mp3/1.mp3",
         cover: "img/1.jpg",
          url: "https://www.youtube.com/watch?v=za4Q_7gYyS4",
          favorited: false
        },
        {
          name: "Billie Ellish & Khalid",
          artist: "Lovely",
          source: "mp3/2.mp3",
         cover: "img/2.png",
          url: "https://www.youtube.com/watch?v=V1Pl8CzNzCw",
          favorited: false
        },        {
          name: "Taylor Swift",
          artist: "Exile",
          source: "mp3/3.mp3",
         cover: "img/3.jpg",
          url: "https://www.youtube.com/watch?v=osdoLjUNFnA",
          favorited: false
        },        {
          name: "Arjun Kanugo",
          artist: "Fursat",
          source: "mp3/4.mp3",
         cover: "img/4.jpg",
          url: "https://www.youtube.com/watch?v=qMfvbKBvOtI",
          favorited: false
        },        {
          name: "A. R. Rahman & Mohit Chauhan",
          artist: "Kun Faya Kun",
          source: "mp3/5.mp3",
         cover: "img/5.jpg",
          url: "https://www.youtube.com/watch?v=T94PHkuydcw",
          favorited: false
        },        {
          name: "Album Song From A Tv Show 'Dahleez'",
          artist: "More Jiya",
          source: "mp3/6.mp3",
         cover: "img/6.jpg",
          url: "https://www.youtube.com/watch?v=hzDQGKx8YEU",
          favorited: false
        },        {
          name: "Jasleen Royal & B Praak",
          artist: "Ranjha",
          source: "mp3/7.mp3",
         cover: "img/7.jpg",
          url: "https://www.youtube.com/watch?v=V7LwfY5U5WI",
          favorited: false
        },        {
          name: "Bruno Mars & Kina",
          artist: "Talking To The Moon x Play Date",
          source: "mp3/8.mp3",
         cover: "img/8.jpg",
          url: "https://www.youtube.com/watch?v=woZyS_TGZ4I",
          favorited: false
        },        {
          name: "Aurora",
          artist: "Runaway",
          source: "mp3/9.mp3",
         cover: "img/9.jpg",
          url: "https://www.youtube.com/watch?v=d_HlPboLRL8",
          favorited: false
        },        {
          name: "Arijit Singh & Alka Yagnik",
          artist: "Agar Tum Sath Ho",
          source: "mp3/10.mp3",
         cover: "img/10.jpg",
          url: "https://www.youtube.com/watch?v=xRb8hxwN5zc",
          favorited: false
        },        {
          name: "Kina Ft. Snow ",
          artist: "Get You The Moon",
          source: "mp3/11.mp3",
         cover: "img/11.png",
          url: "https://www.youtube.com/watch?v=jOFVF6V8th8",
          favorited: false
        },        {
          name: "Momina Musthsan & Rahat Fateh Ali Khan",
          artist: "Afreen Afreen",
          source: "mp3/12.mp3",
         cover: "img/12.jpg",
          url: "https://www.youtube.com/watch?v=kw4tT7SCmaY",
          favorited: false
        },        {
          name: "Lindsey Sterling",
          artist: "Carol Of The Bells",
          source: "mp3/13.mp3",
         cover: "img/13.jpg",
          url: "https://www.youtube.com/watch?v=EKkzbbLYPuI",
          favorited: false
        },        {
          name: "Nusrat Fateh Ali Khan",
          artist: "Yeh Jo Halka Halka Fitoor Hai",
          source: "mp3/14.mp3",
         cover: "img/14.jfif",
          url: "https://www.youtube.com/watch?v=3R1eUfVxOGI",
          favorited: false
        },        {
          name: "Darshan Raval",
          artist: "O Meherma",
          source: "mp3/15.mp3",
         cover: "img/15.jpg",
          url: "https://www.youtube.com/watch?v=HYUpNJJELeE",
          favorited: false
        },        {
          name: "Arijit Singh",
          artist: "Tuje Kitna Chahne Lage Hum",
          source: "mp3/16.mp3",
         cover: "img/16.jpg",
          url: "https://www.youtube.com/watch?v=2IGDsD-dLF8",
          favorited: false
        },        {
          name: "Mohit Chauhan & Suzanne D'mello",
          artist: "Tum Ho",
          source: "mp3/17.mp3",
         cover: "img/17.jpg",
          url: "https://www.youtube.com/watch?v=gkCKTuR-ECI",
          favorited: false
        },        {
          name: "Ali Azmat",
          artist: "Ishq Bhi Kiya Re Maula",
          source: "mp3/18.mp3",
         cover: "img/18.jpg",
          url: "https://www.youtube.com/watch?v=yqiNOCfn-wU",
          favorited: false
        },        {
          name: "Arijit Singh Arijit Singh & Altamash Faridi",
          artist: "Aayat",
          source: "mp3/19.mp3",
         cover: "img/19.jpg",
          url: "https://www.youtube.com/watch?v=bk_Z79Fjqss",
          favorited: false
        },        {
          name: "Shivam Pathak",
          artist: "Ek Dil Ek Jaan",
          source: "mp3/20.mp3",
         cover: "img/20.jpg",
          url: "https://www.youtube.com/watch?v=OtiyixnhLpA",
          favorited: false
        },        {
          name: "Hymn For The Weekend",
          artist: "ColdPlay",
          source: "mp3/21.mp3",
         cover: "img/21.jpg",
          url: "https://www.youtube.com/watch?v=YykjpeuMNEk",
          favorited: false
        },
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };


  }
});
