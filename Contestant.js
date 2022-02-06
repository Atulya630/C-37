class Contestant {
constructor(){
this.index = null;
this.distance = 0;
this.name = null;
}

getCount(){
    var playerCountRef = database.ref('ContestantCount');
    contestantrCountRef.on('value',(data)=>{
        contestentrCount = data.val();
    })
}

updateCount(count){
    database.ref('/').update({
        contestentCount: count
    });
}

update(){
    var contestentIndex = "contestents/contestent" + this.index;
    database.ref(contestentIndex).set({
        name:this.name,
        distance:this.distance
    });
}
static getPlayerInfo(){
    var contestentInfoRef = database.ref('contestents');
    contestentInfoRef.on("value",(data)=>{
        allcontestents = data.val();
    })
    }
}