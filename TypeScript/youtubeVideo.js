var youtubeVideo = /** @class */ (function () {
    function youtubeVideo(title, punlishOn, singers, Song, Lyrics, Music, Flute, Guitars, Music_Produced_by, Song_Dubbing, Dubbing_Engineer, Mix_Assistant_Engineers, Choreographer, Film, Starring, likes, dislikes, views, Comment) {
        var _this = this;
        this.getLikes = function () {
            return _this.likes;
        };
        this.getViews = function () {
            return _this.views++;
        };
        this.getComment = function () {
            return _this.Comment;
        };
        this.getRelatedVideos = function () {
            console.log('get related videos');
        };
        this.getNextVideo = function () {
            console.log('get next video');
        };
        this.title = title;
        this.publisheOn = punlishOn;
        this.singers = singers;
        this.Song = Song;
        this.Lyrics = Lyrics;
        this.Music = Music;
        this.Flute = Flute;
        this.Guitars = Guitars;
        this.Music_Produced_by = Music_Produced_by;
        this.Song_Dubbing = Song_Dubbing;
        this.Dubbing_Engineer = Dubbing_Engineer;
        this.Mix_Assistant_Engineers = Mix_Assistant_Engineers;
        this.Choreographer = Choreographer;
        this.Film = Film;
        this.Starring = Starring;
        this.likes = likes;
        this.dislikes = dislikes;
        this.views = views;
        this.Comment = Comment;
    }
    return youtubeVideo;
}());
var dilbar = new youtubeVideo("dilbar", Date(), ["Neha Kakkar", "Dhvani Bhanushali", "Ikka"], "dilbar", ["Shabbir Ahmed", "Ikka"], ["Tanishk Bagchi"], "Naveen", "Shomu Seal", "Tanishk Bagchi", "T-SERIES", "Surajit Ghosh Mazumdar", "Michael Edwin Pillai", "Adil Shaikh", "Satyameva Jayate", ["John Abraham", "Manoj Bajpayee"], 1245, 22, 1213232344, [
    "good one", "love it"
]);
console.log(dilbar);
dilbar.getLikes();
dilbar.getRelatedVideos();
dilbar.getNextVideo();
