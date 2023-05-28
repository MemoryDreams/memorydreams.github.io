function HidePictures(pic){
    let x, i;
    x = document.getElementsByClassName('Image');
    for (i = 0; i < x.length; i++) {
        hidePic(x[i]);
    }
    ShowImage()
    document.getElementById("name").innerHTML = pic.name;
    document.getElementById("desc").innerHTML = pic.description;
    document.getElementById("date").innerHTML = pic.date;
    document.getElementById("img").src = pic.location;
}

function ShowImage(){
    document.getElementById("Picture").className = "flexandcenter";
    document.getElementById("goback").className="";
    document.getElementById("return").className="hide";
}

function hidePic(element){
    element.className = element.className.replace("Image", "Image hide");
}

function ShowPictures(){
    let x, i;
    x = document.getElementsByClassName('Image');
    for (i = 0; i < x.length; i++) {
        showPic(x[i]);
    }
    document.getElementById("Picture").className="hide";
    document.getElementById("goback").className="hide";
    document.getElementById("return").className="";
}

function showPic(element){
    element.className = element.className.replace("Image hide", "Image");
}

class Image {
    constructor(name, description, date, location) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.location = location;
    }
}

class Project {
    constructor(title, description, comment, download) {
        this.title = title;
        this.description = description;
        this.comment = comment;
        this.download = download;
    }
}

//Pixel Art gallery setup
const WitchInDark = new Image("Witch in Dark", "This was one of the very fisrt arts I made. I still kind of like it. I think it looks cool. Should probably remake it later...Nothing much to say about it.","xx.xx.2018","../pics/Pixel Art/witch-in-dark.png");
const GBWitch = new Image("Gameboy Witch", "Another attempt at a 1-bit pixel art. It's very simple, but that was the point.","xx.xx.2018","../pics/Pixel Art/gameboy-witch.png");
const GothLady = new Image("Strange Boutique", "Hard to tell, but it's actually a pixelart. I would know since I was the one to put every pixel with love and care it deserves. One could call this image an accident. One day I saw a girl who looked like that. I thought she was so cute that I immediately thought of drawing her. On the back of her jacket was written something like \"*something* Boutique\", which reminded me of a band I used to listen back then. A few days later, the art is finished.","xx.09.2019","../pics/Pixel Art/goth-chick.png");
const Birdy = new Image("Birdy", "Another very cute lady I've never met in person. Basically she's a witch who carries a firetail bird under her hat. <br>There\'re lots of things in this picture I don\'t like. It\'s due to lack of experience. But some things turned out to be so good I\'m really proud of them. The hair, for example, is really good looking in my opinion. Though it did look better before I added the nest there. Which is why you can notice how I tried to hide the nest so that it wouldn\'t get in a way of hair. <br>I also like the hat. I finally managed to make it not too huge. <br>You may also notice lots of dithering on this one. One of my goals was to get good at it and I am satisfied with the result. <br>This lady represents my love for birds. A few years ago I discovered that birds have a language of their own and any human can learn it. I never got to learn it though, but the idea of people understanding the birdtongue excites me.","xx.xx.2019","../pics/Pixel Art/birdie.png");
const Kitten = new Image("Kitten", "This one was supposed to be a sprite for a Space Station 13 server. But I never finished it. Though I do have a picture of him sitting in that pose from all four directions. <br>Back then I didn't know that using shades of grey is not the best practice.","xx.xx.2019","../pics/Pixel Art/kitten-sitting-front.gif");
const WalkingCat = new Image("Cat that walks by himself", "It's from an old <a href=\"https://www.youtube.com/watch?v=gSZ7W4u2Py8\">cartoon</a>. It\'s about a cat that walks by himself and all places are alike to him. <br>I can\'t help but associate myself with this cat. He's so cool.","xx.01.2020","../pics/Pixel Art/Cat-that-walks.png");
const Jill = new Image("Jill that walks by herself", "I was going to make a short scene where Jill in a relaxed pose walks along the streets of Raccoon City. But this project is abandoned, as I wasn't very interested in drawing the backgrounds.","xx.02.2020","../pics/Pixel Art/JillSandwitch.gif");
const StudWitch = new Image("Student witch", "This witch reports on Mars during the astronomy lesson. Her hat is magical, which is why it floats above her head. It looks like her costume and hat are made from a thick material, like leather. <br>I like this one as it combines my passion for witches and love for victorian era, steam machines, age of great discoveries for which I love Jules Verne works.","xx.03.2020","../pics/Pixel Art/StudWitch.png");
const MoodyRoom = new Image("Moody Room", "This one was made during lonely nights full of music.","xx.05.2020","../pics/Pixel Art/MoodyRoom.png");
const PSPGo = new Image("PSP Go", "It's one of my favorite consoles. I play it regulary and even modded it.","xx.01.2021","../pics/Pixel Art/PSPGo.gif");
const DS = new Image("DSiXL", "This one is special. Can't quite call it my favorite, but I like it very much. <br>Note that screens are of different colors. I like how natural it turned out.","xx.03.2021","../pics/Pixel Art/DS.gif");
const Mouse = new Image("Mouse", "It's a redraw in an unfamiliar style. Nothing special about it, I think I could do better. <br>Also it's probably the first time I used a watermark.","xx.05.2021","../pics/Pixel Art/mouse.png");
const OutMouse = new Image("Mouse outside", "It's a redraw in an unfamiliar style. Nothing special about it, I think I could do better. <br>There's a different background here. Also it's probably the last time I used a watermark as I gave up on the idea of being popular artist.","xx.05.2021","../pics/Pixel Art/mouseoutside.png");
const Slime = new Image("Slime", "I was thinking of those old slime toys and thought how cool would it be if it was alive. This one tastes like pappermint, hense the name.","xx.08.2021","../pics/Pixel Art/slime.png");
const ExampleCat = new Image("Example cat", "This cartoonish cat was made in about 5 minutes, as an example for my puple. In the end I liked it so much I decided to upload it here. Also, from this point, all of my works will be uploaded in their initial size!","21.07.2022","../pics/Pixel Art/ExampleCat.png");
const Polly = new Image("Polly", "It's the lead singer from Skating Polly. I really like how she looks in Hail Mary video. Also I spent most of the day on her face and by the time I got to everything else, I completely burned out. The original plan was to make a full scene with couch and legs, but it didn't work out. I was thinking of croping everything but the head but ultimately managed to finish some parts with mid quality. Oh well!","02.08.2022","../pics/Pixel Art/Polly.png");
const Mountainview = new Image("Mountainview", "While doing The Odin Project task, I decided that I need a nice background picture and instead of searching for one, I simply made one.","13.09.2022","../pics/Pixel Art/Mountainview.png");
const Onyx = new Image("Onyx", "It is a logo for Space Station 13 server called Chaotic Onyx. I wanted to make a cool and modern logo, but in pixel art. And I like the result, even though it was unused.","17.10.2022","../pics/Pixel Art/Onyxlogo.png");
const Snail = new Image("Chaotic Snail", "It's a snail on fire. It had too many tasks, so it burned out.","19.10.2022","../pics/Pixel Art/OnyxSnail.gif");
const Tracer = new Image("Tracer", "I was discussing poses with another artist. He made a character with some not standard pose, but it looked a bit crooked. Somehow it reminded me of Tracer. So I decided to try drawing her. I was never good in drawing poses. But it turned out to be cool and theraputic experience.","14.10.2022","../pics/Pixel Art/Trace-original.png");
const CatDJ = new Image("CatDJ", "It's a cat DJ. It lives in a cardboard box and plays classic rock for everyone to hear. I really like that image. It was the first one I made in youtube video aspect ratio. Hopefully, one day, it will serve as a background for my podcast. <br>For some reason, it took me ages to export it properly. No matter what I did, colors flickered all the time. I ended up exporting it as separate images and gluing them back togather in different apps, including a video editor and an online gif maker.","22.10.2022","../pics/Pixel Art/catDJ(rev1).gif");
const MicroWiz = new Image("Player animation showcase", "In the February of 2023 I've decided to start making games, using Unity. My first game was going to be a short metroidvania, about a cursed wizard. This is the animations I made for my game. In the end, I only made 3 levels and it took me around 2 month. But I still like these.","xx.02.2023","../pics/Pixel Art/1BitPlayerAnimationShowcase(rev1).gif");
const YuiCrosswalk = new Image("Yui Crosswalk", "It is my take on Yui standing on crosswalk, before her first day in highschool. I like K-On. And Yui is the best girl. I planned to make a couple of these redraws.","23.04.2023","../pics/Pixel Art/Yui CrossWay(rev2).gif");
const YuiFreakout = new Image("Yui Freak out", "Initially, I didn't plan to draw this one. Before rewatching the first episode, I only remembered a couple of funny moments. My initial plan was to make one picture per episode. But after rewatching just one episode, I realized, there were just too many funny moments I wanted to redraw. <br>I think I'll make a couple more in the future.","23.04.2023","../pics/Pixel Art/k-on episode 1 (at school).gif");
const NightRemake = new Image("Night Remake", "Among artist, it is a popular practice, to redraw your old art, to see how much you've grown up. It is my first attempt to do something like that. And I must say, I love the results. This one looks much better, than the previous one.","07.05.2023","../pics/Pixel Art/WitchInNight(OriginalSize).png");
const MockUpBit = new Image("Game mockup", "This was the first thing I made for my game. The character you see here was used as an enemy. I've decided to make the player wear wizard hat. Wizard hats look cool and are easy to animate.","xx.02.2023","../pics/Pixel Art/MockUp.png");

//Projects setup
const MicroVania = new Project("MicroVania","This is the description.","This is a comment.","And this is whatever I put in the downloads page.")


activeTitle="";

function hideProjects(title,tab){
    let x, i;
    x = document.getElementsByClassName('tile');
    for (i = 0; i < x.length; i++) {
        hideTile(x[i]);
    }
    document.getElementById("goback").className="";
    document.getElementById("return").className="hide";
    document.getElementById("fullPage").className="";
    document.getElementById("desctext").innerHTML=title.description;
    document.getElementById("title").innerHTML=title.title;
    document.getElementById("commenttext").innerHTML=title.comment;
    document.getElementById("downtext").innerHTML=title.download;
    document.getElementById(title.title).className=""
    showTab(tab);
    activeTitle=title.title;
}

function backToPortfolio(){
    document.getElementById(activeTitle).className="hide"
    
    let x, i;
    x = document.getElementsByClassName('tile');
    for (i = 0; i < x.length; i++) {
        showTile(x[i]);
    }
    document.getElementById("fullPage").className="hide";
    document.getElementById("goback").className="hide";
    document.getElementById("return").className="";
}

function showTab(num){
    hideTabs()
    switch(num){
        case 0:
            document.getElementById("descbutt").className="active";
            document.getElementById("desc").className="";
            break;
        case 1:
            document.getElementById("commentbutt").className="active";
            document.getElementById("comment").className="";
            break;
        case 2:
            document.getElementById("screenbutt").className="active";
            document.getElementById("screenshots").className="";
            break;
        case 3:
            document.getElementById("downbutt").className="active";
            document.getElementById("download").className="";
            break;
    }
}

function hideTabs(){
    document.getElementById("descbutt").className="inactive";
    document.getElementById("commentbutt").className="inactive";
    document.getElementById("screenbutt").className="inactive";
    document.getElementById("downbutt").className="inactive";

    document.getElementById("desc").className="hide";
    document.getElementById("comment").className="hide";
    document.getElementById("screenshots").className="hide";
    document.getElementById("download").className="hide";
}

function hideTile(obj){
    obj.className = obj.className.replace("tile flexandcenter", "tile hide");
}

function showTile(obj){
    obj.className = obj.className.replace("tile hide", "tile flexandcenter");
}







