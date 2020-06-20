class Page{
    constructor(){
        this.year7=createButton('7th Year');
        this.year8=createButton('8th Year');
        this.year9=createButton('9th Year');
        this.year10=createButton('10th Year');
        this.year11=createButton('11th Year');
        this.year12=createButton('12th Year');
        this.year13=createButton('13th Year');
        this.back=createButton('BACK');
        this.title=createElement('h1');
    }

    display(){
        this.year7.position(0,100);
        this.year8.position(100,100);
        this.year9.position(200,100);
        this.year10.position(300,100);
        this.year11.position(400,100);
        this.year12.position(500,100);
        this.year13.position(600,100);
        this.back.position(0,0);
        this.title.html("6 years of Memories With DAD");
        this.title.position(50,150);

        this.year7.mousePressed(()=>{
            this.year7.hide();
            this.year8.hide();
            this.year9.hide();
            this.year10.hide();
            this.year11.hide();
            this.year12.hide();
            this.year13.hide();
            this.title.hide();
            gs=1;
            State=7;
        })

        this.year8.mousePressed(()=>{
            this.year7.hide();
            this.year8.hide();
            this.year9.hide();
            this.year10.hide();
            this.year11.hide();
            this.year12.hide();
            this.year13.hide();
            this.title.hide();
            gs=1;
            State=8;
        })

        this.year9.mousePressed(()=>{
            this.year7.hide();
            this.year8.hide();
            this.year9.hide();
            this.year10.hide();
            this.year11.hide();
            this.year12.hide();
            this.year13.hide();
            this.title.hide();
            gs=1;
            State=9;
        })

        this.year10.mousePressed(()=>{
            this.year7.hide();
            this.year8.hide();
            this.year9.hide();
            this.year10.hide();
            this.year11.hide();
            this.year12.hide();
            this.year13.hide();
            this.title.hide();
            gs=1;
            State=10;
        })

        this.year11.mousePressed(()=>{
            this.year7.hide();
            this.year8.hide();
            this.year9.hide();
            this.year10.hide();
            this.year11.hide();
            this.year12.hide();
            this.year13.hide();
            gs=1;
            State=11;
        })

        this.year12.mousePressed(()=>{
            this.year7.hide();
            this.year8.hide();
            this.year9.hide();
            this.year10.hide();
            this.year11.hide();
            this.year12.hide();
            this.year13.hide();
            gs=1;
            State=12;
        })

        this.year13.mousePressed(()=>{
            this.year7.hide();
            this.year8.hide();
            this.year9.hide();
            this.year10.hide();
            this.year11.hide();
            this.year12.hide();
            this.year13.hide();
            this.title.hide();
            gs=1;
            State=13;
        })


    if(State===0){
            this.year7.show();
            this.year8.show();
            this.year9.show();
            this.year10.show();
            this.year11.show();
            this.year12.show();
            this.year13.show();
            this.title.show();
    }
    this.back.mousePressed(()=>{
        State=0;
    })
    }
}