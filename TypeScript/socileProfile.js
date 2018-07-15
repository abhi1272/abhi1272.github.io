var socialProfile = /** @class */ (function () {
    function socialProfile(name, cover_pic, profile_pic, works, studies, lives, martialStatus, friends, photos) {
        this.name = name;
        this.cover_pic = cover_pic;
        this.profile_pic = profile_pic;
        this.works = works;
        this.studies = studies;
        this.lives = lives;
        this.martialStatus = martialStatus;
        this.friends = friends;
        this.photos = photos;
        this.getPost = function () {
            console.log('fetch post');
        };
        this.getFriendSuggestions = function () {
            console.log('get friend suggestion');
        };
        this.getStories = function () {
            console.log('get all stories');
        };
        this.getOnlinePeople = function () {
            console.log('get all online people');
        };
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
    return socialProfile;
}());
var Abhishek = new socialProfile("Abhishek", "abhi.jpg", "abhi_profile.jpg", "Infosys", ["svm", "Gyan Niketan"], "Barh", "Single", ["Satihs", "Bijay"], ["abhss.jpg", "jsaa.jpg"]);
console.log(Abhishek);
