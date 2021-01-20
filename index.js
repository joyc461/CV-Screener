//array of object which contains information about the condidates 

const data=[
{
name:"Rohan Das",
age:22,
city:"Kolkata",
langauge:"Python",
framework:"Django",
image:"https://randomuser.me/api/portraits/men/67.jpg"


},
{
name:"Rajarshi Roy",
age:23,
city:"Kolkata",
langauge:"Python",
framework:"Django",
image:"https://randomuser.me/api/portraits/men/11.jpg"


},
{
name:"Argha Chatterjee",
age:22,
city:"Kolkata",
langauge:"Python",
framework:"Flask",
image:"https://randomuser.me/api/portraits/men/51.jpg"


},
{
name:"Ayan Banerjee",
age:23,
city:"Kolkata",
langauge:"Javascript",
framework:"React",
image:"https://randomuser.me/api/portraits/men/45.jpg"


},
{
name:"Aishwariya Rai",
age:25,
city:"Mumbai",
langauge:"Golang",
framework:"Echo",
image:"https://randomuser.me/api/portraits/women/97.jpg"


},
{
name:"Subham Sharma",
age:27,
city:"Bangalore",
langauge:"Javascript",
framework:"Angular",
image:"https://randomuser.me/api/portraits/men/34.jpg"


},
{
name:"Arpita Goswami",
age:27,
city:"Hyderabad",
langauge:"Javascript",
framework:"Vue",
image:"https://randomuser.me/api/portraits/women/56.jpg"


},



]

//CV iterator

function cvIterator(profiles){

    let nextIndex=0;
    return {

        next:function(){

            return nextIndex<profiles.length ?
            {value:profiles[nextIndex++],done:false}:{done:true}
        }
    };

}
const candidates=cvIterator(data);

nextCV();

//Button listener for next button

const next=document.getElementById("next");
next.addEventListener("click",nextCV);




function nextCV(){
    const currentCandidate=candidates.next().value;
    let image=document.getElementById("image");
    
    let profile=document.getElementById("profile");

    if(currentCandidate !=undefined){

    image.innerHTML=`<img src="${currentCandidate.image}">`;
    profile.innerHTML=`<ul class="list-group ">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.langauge}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
    }

    else{

        alert("End of candidate applications");
        window.location.reload();
    }



}