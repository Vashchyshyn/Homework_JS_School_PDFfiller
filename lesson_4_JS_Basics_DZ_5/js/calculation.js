class Calculation {
    constructor(data) {
        this.data = data.split('\n');
        this.data.shift();
    }

    init() {
        this.total();
        this.department();
        this.month();
    }

    total(){
        let total = 0;
        this.data.map((item,index)=>{
            if(+item.split(',')[3]){
                total += +item.split(',')[3];
            }
        });
        console.log(total);
    }

    department(){

    }

    month(){

    }
}