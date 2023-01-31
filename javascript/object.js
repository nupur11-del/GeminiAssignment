/*let obj={
    firstName:"demo",
    lastName: "demo2",

    print:function()
    {
        console.log(this.firstName,this.lastName);
    }
};
console.log(obj.firstName);
console.log(obj.lastName);
console.log(obj["firstName"]) // iske through hum object ki property ko dynamically render karskte h

let prop="firstName";
console.log(obj[prop]);

obj.print();*/

//create class
/*class Student{
    constructor(name,age,subject)
    {
        this.name=name;
        this.age=age;
        this.subject=subject;
    }
}
var s1=new Student("ABC",22,"XYZ");
console.log(s1);*/
arr=["Name","Age","DOB","Email","Company"];

        data=[['ABC','23','07-05-2000','abc@gmail.com','Gemini Solutions'],
              ['XYZ','22','11-09-2001','xyz@gmail.com','Gemini Solutions'],
              ['DEF','22','14-07-2001','def@gmail.com','Gemini Solutions'],
              ['GHI','23','01-04-2000','ghi@gmail.com','Gemini Solutions'],
              ['JKL','22','25-01-2001','jkl@gmail.com','Gemini Solutions'],];

         //self invoke function

          ( function invokefunc (){
         const head=document.createElement("h3");
         const head_text=document.createTextNode('SELF INVOKING Table IS HERE!! TAKE A LOOK');
         head.style.textAlign="center";
         head.appendChild(head_text);

         //appending heading  on body
         document.body.appendChild(head);

        const tb=document.createElement("table");
        const tbdy=document.createElement("tbody");

        const th=document.createElement("thead");
        var thr=document.createElement("tr");

        for(let i=0;i<arr.length;i++){
        const cell=document.createElement("th");
        const Text=document.createTextNode(`${arr[i]}`)
        cell.appendChild(Text);
        thr.appendChild(cell);
        }
        th.appendChild(thr);
        
        
        var tbr=document.createElement("tr");
         for( let i=0;i<data.length;i++)
        {
          const row = document.createElement("tr");
           row.setAttribute("padding","6");
        for(let j=0;j<data[i].length;j++)
        {
            const cell = document.createElement("td");
            const Text = document.createTextNode(`${data[i][j]}`);
            cell.appendChild(Text);
             row.appendChild(cell);
        }
        tbdy.appendChild(row);
        }
         tbdy.setAttribute("padding", "5px");
         tb.appendChild(th);
         tb.appendChild(tbdy);

          //setting bording for table 
         tb.setAttribute("border", "3");
         tb.setAttribute("borderColor","blue");
         tb.setAttribute("align","center");
        //appending table to body
        document.body.appendChild(tb);
       
        })();
       