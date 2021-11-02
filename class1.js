//class1.js
const obj = {
    name: 'pochaco',
    age: 4,
    score: 30,
    getScore : function(){
        return this.score;
    }
};
console.log(obj.getScore());


function Student(name, math, eng) {
    this.name = name;
    this.math = math;
    this.eng = eng;

    this.getName = function () {
        return this.name;
    }
    this.getMathScore = function () {
        return this.math;

    }
    this.getEngScore = function () {
        return this.eng;
    }
}
const s1 = new Student('포챠코', 80, 70);
let result = s1.getMathScore();
console.log(s1.getName() + ', ' + s1.getEngScore() + ', ' + s1.getMathScore());



class Car { //Car = this
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    //method
    showColor() {
        return this.color; //Car가 갖고 있는 color값을 되돌려줌
    }
    setColor(color) {
        this.color = color;
    }
    getInfoByDom() {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = this.name;
        let td2 = document.createElement('td');
        td2.innerHTML = this.color;
        tr.append(td1, td2); //여러개를 달아줄 수 있음
        return tr;
    }
    getRowByTr() {
        let td = document.createElement('td');
        tr.appendChild(this.getNameByTd());
        tr.appendChild(this.getColorByTd());
        return tr;
    }
    getNameByTd() {
        let td = document.createElement('td');
        td.innerHTML = this.name;
        return td;
    }
    getColorByTd() {
        let td = document.createElement('td');
        td.innerHTML = this.color;
        return td;

    }
}

const sonata = new Car('소나타', '흰색');
const avante = new Car('아반떼', '검은색');
let color = sonata.showColor();
// sonata.setColor('검은색');
// color = sonata.showColor();
console.log(color);

document.write('<table border = "1" id = "tbl" ></table>');
document.getElementById("tbl").appendChild(sonata.getInfoByDom());
document.getElementById("tbl").appendChild(avante.getInfoByDom());