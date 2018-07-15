
class youtubeVideo {

    title: string;
    publisheOn: string;
    singers: string[];
    Song: string;
    Lyrics: String[];
    Music: string[];
    Flute: String;
    Guitars: string;
    Music_Produced_by: string
    Song_Dubbing: string;
    Dubbing_Engineer: string; 
    Mix_Assistant_Engineers: string;
    Choreographer: string; 
    Film: string;
    Starring: string[];
    likes: number;
    dislikes: number;
    views: number;
    Comment:string[]

    constructor(title:string,punlishOn: string,singers: string[],Song: string,Lyrics: string[], Music:string[],
    Flute:string,Guitars:string,Music_Produced_by: string, Song_Dubbing: string,Dubbing_Engineer: string,
    Mix_Assistant_Engineers: string,Choreographer: string,Film: string,Starring: string[],likes: number,
    dislikes: number,views: number,Comment:string[]){
        
        this.title = title;
        this.publisheOn = punlishOn;
        this.singers = singers;
        this.Song = Song;
        this.Lyrics= Lyrics;
        this.Music = Music;
        this.Flute = Flute;
        this.Guitars = Guitars;
        this.Music_Produced_by = Music_Produced_by;
        this.Song_Dubbing= Song_Dubbing;
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

getLikes = () =>{
    return this.likes;
}  
getViews = () =>{
    return this.views++;
}    
getComment = () =>{
    return this.Comment
}
getRelatedVideos = () =>{
    console.log('get related videos');
}
getNextVideo = () =>{
    console.log('get next video');
}

}  


let dilbar = new youtubeVideo("dilbar",Date(),["Neha Kakkar", "Dhvani Bhanushali", "Ikka"],"dilbar",
            ["Shabbir Ahmed", "Ikka"],["Tanishk Bagchi"],"Naveen","Shomu Seal","Tanishk Bagchi","T-SERIES","Surajit Ghosh Mazumdar",
        "Michael Edwin Pillai","Adil Shaikh","Satyameva Jayate",["John Abraham","Manoj Bajpayee"],1245,22,1213232344,[
        "good one","love it"])


console.log(dilbar)
dilbar.getLikes();
dilbar.getRelatedVideos();
dilbar.getNextVideo()








