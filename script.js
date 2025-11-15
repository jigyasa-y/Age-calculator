
 const your_age=document.querySelector("#your_age");
    const button=document.querySelector("button");
 
 
console.log("Hello")


   button.addEventListener('click',()=>{
    const input_date=document.querySelector("#date").value;
   const user_date= new Date(input_date);
    const current_date=new Date();

    

    let user_year=user_date.getFullYear();
    let user_month=user_date.getMonth();
    let user_day=user_date.getDay();

    let current_year=current_date.getFullYear();
    let current_mongth=current_date.getMonth();
    let current_day=current_date.getDay();

    let year=current_year-user_year;
    let month=current_mongth-user_month;
    let day=current_day-user_day;
    if(month < 0)month*=-1;
    if(day < 0 )day*=-1;

    if(!user_year || !user_month || !user_day || current_year <user_year){
        your_age.textContent="Please enter a valid date";
        document.querySelector("#date").classList.add("vibrate");
        your_age.style.color='red'
        setTimeout(() => {
            document.querySelector("#date").classList.remove("vibrate");
            your_age.textContent="";
              your_age.style.color='black'
        }, 2000);
        return ;
    }


    console.log(user_date);
    console.log(year,month,day)

    your_age.textContent=`You are ${year} year's old`;


   })