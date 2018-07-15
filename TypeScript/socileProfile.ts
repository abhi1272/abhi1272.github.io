
class socialProfile {

    constructor(public name:string,public cover_pic:string,public profile_pic:string,public works:string,
        public studies:string[],public lives:string,
        public martialStatus: string,public friends: string[],public photos:string[] ){
        
        this.name = name;
        this.cover_pic = cover_pic;
        this.profile_pic = profile_pic;
        this.works = works;
        this.studies = studies;
        this.lives = lives;
        this.martialStatus = martialStatus;
        this.friends = friends;
        this.photos = photos;
    }

getPost = () => {
    console.log('fetch post');
}
getFriendSuggestions = () =>{
    console.log('get friend suggestion');
}
getStories = () =>{
    console.log('get all stories')
}
getOnlinePeople = () =>{
    console.log('get all online people');
}
}

let Abhishek = new socialProfile("Abhishek","abhi.jpg","abhi_profile.jpg","Infosys",["svm","Gyan Niketan"],
                "Barh","Single",["Satihs","Bijay"],["abhss.jpg","jsaa.jpg"])


console.log(Abhishek);








