let imad0 ={
    name1: 1,
    hallo: function(){
        return 'hallo welt aus Berlin';
    }
}
let imad2 ={
    name2: 2
}
let imad3 ={
    name3: 3
}
let imad4 = Object.assign(imad0,imad2,imad3,{
    name5: 10,

});/* und wenn ein neue Project hinfüge dann nach der komma  offne { }, schreibe das Project  in dem project rein  z.b name5: 5,  */
imad4.name1=10,/* wir können die elementzahl  oder irgendwas ändern */
imad4.name3=22,
imad4.imad10=100,
console.log(imad4.imad10);/* wir können da element rufen */