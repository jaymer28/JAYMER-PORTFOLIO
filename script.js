const $ = function( id ) {
    return document.getElementById( id ); 
   }

const resume = $('showResume');  
const projects = document.getElementsByClassName('projectIndex');
const html = $('HTML');
const cssAndMediaQuery = $('CSSMEDIAQUERY')
const javaScript = $('JS');
const click = '#EAF2FA';
const unClick = '#212529';
const date = new Date().getFullYear();
// 

const sendContactDate = $('contactSend');
let myEmails = [

]
let getLocalStorage;
//   
const projectDom = {
    "HTML CSS": `<div class="col" >
                <div class="d-flex d-flex justify-content-around">
                    <img src="./images/card.png" width="300px" height="200px" class="rounded-3 p-1 bg-dark" alt="project1 Img">
                    <div class="col-lg-4 text-center projectPStlye m-4">
                        <p class="desciptionInProjects h3">card</p>
                        <p class="desciptionInProjects">Link: <a href="https://jaymer28.github.io/activity-2/" class="link h5" target="_blank">Sample Project1</a></p>
                        <a href="https://github.com/jaymer28/activity-2" target="_blank" class="link" ><button class="btn-sm">CODE</button></a>
                    </div>
                </div>

                <div class="d-flex d-flex justify-content-around mt-5">
                    <img src="./images/resumecsshtml.png" width="300px" height="200px" class="rounded-3 p-1 bg-dark" alt="project2 Img">
                    <div class="col-lg-4 text-center projectPStlye m-4">
                        <p class="desciptionInProjects h3">Resume</p>
                        <p class="desciptionInProjects">Link: <a href="https://jaymer28.github.io/resume-html-css/" class="link h5" target="_blank">Sample Project2</a></p>
                        <a href="https://github.com/jaymer28/resume-html-css" class="link" target="_blank"><button class="btn-sm ">CODE</button></a>
                    </div>
                </div>

                <div class="d-flex d-flex justify-content-around mt-5">
                    <img src="./images/portfolio css html.png" width="300px" height="200px" class="rounded-3 p-1 bg-dark" alt="project3 Img">
                    <div class="col-lg-4 text-center projectPStlye m-4">
                        <p class="desciptionInProjects h3">card</p>
                        <p class="desciptionInProjects">Link: <a href="https://jaymer28.github.io/portfolio-css-html/" class="link h5" target="_blank">Sample Project3</a></p>
                        <a href="https://github.com/jaymer28/portfolio-css-html" class="link" target="_blank"><button class="btn-sm btn-white" >CODE</button></a>
                    </div>
                </div>
            </div>`,
    "BOOTSTRAP MEDIAQUERY":     `<div class="col mQuery">
                                    <div class="d-flex d-flex justify-content-around">
                                        <img src="./images/Screenshot (24).png" width="300px" height="200px" class="rounded-3 p-1 bg-dark" alt="project4 Img">
                                        <div class="col-lg-4 text-center projectPStlye m-4">
                                            <p class="desciptionInProjects h3">Cloned Girrafe and Annika</p>
                                            <p class="desciptionInProjects">Link: <a href="https://jaymer28.github.io/girrafeandannika/" class="link h5" target="_blank">Sample Project4</a></p>
                                            <a href="https://github.com/jaymer28/girrafeandannika" class="link" target="_blank"><button class="btn-sm">CODE</button></a>
                                        </div>
                                    </div>

                                    <div class="d-flex d-flex justify-content-around mt-5">
                                        <img src="./images/Screenshot (22).png" width="300px" height="200px" class="rounded-3 p-1 bg-dark" alt="project5 Img">
                                        <div class="col-lg-4 text-center projectPStlye m-4">
                                            <p class="desciptionInProjects h3">Cloned BitBucket</p>
                                            <p class="desciptionInProjects">Link: <a href="https://dream-team-ni-jaymer.github.io/clone-website/" class="link h5" target="_blank">Sample Project5</a></p>
                                            <a href="https://github.com/dream-team-ni-jaymer/clone-website" class="link" target="_blank"><button class="btn-sm ">CODE</button></a>
                                        </div>
                                    </div>

                                    <div class="d-flex d-flex justify-content-around mt-5">
                                        <img src="./images/Screenshot (21).png" width="300px" height="200px" class="rounded-3 p-1 bg-dark" alt="project6 Img">
                                        <div class="col-lg-4 text-center projectPStlye m-4">
                                            <p class="desciptionInProjects h3">Cloned Shopify</p>
                                            <p class="desciptionInProjects">Link: <a href="https://jaymer28.github.io/shopifyclone/" class="link h5" target="_blank">Sample Project6</a></p>
                                            <a href="https://github.com/jaymer28/shopifyclone" class="link" target="_blank"><button class="btn-sm btn-white">CODE</button></a>
                                        </div>
                                    </div>
                                </div>`,

    "JAVASCRIPT":   `<div class="col mQuery">
                        <div class="d-flex d-flex justify-content-around">
                            <img src="./images/javscript1 (1).png" width="300px" height="200px" class="rounded-3 p-1 bg-dark" alt="project7 Img">
                            <div class="col-lg-4 text-center projectPStlye m-4">
                                <p class="desciptionInProjects h3">Random Javscript Practices</p>
                                <p class="desciptionInProjects">Link: <a href="https://jaymer28.github.io/randomJS/" class="link h5" target="_blank">Sample Project7</a></p>
                                <a href="https://github.com/jaymer28/randomJS" class="link" target="_blank"><button class="btn-sm">CODE</button></a>
                            </div>
                        </div>

                        <div class="d-flex d-flex justify-content-around mt-5">
                            <img src="./images/javascript2.png" width="300px" height="200px" class="rounded-3 p-1 bg-dark" alt="project5 Img">
                            <div class="col-lg-4 text-center projectPStlye m-4">
                                <p class="desciptionInProjects h3">Chrome Extension</p>
                                <p class="desciptionInProjects">Link: <a href="https://jaymer28.github.io/CHROME-EXTENSION1/" class="link h5" target="_blank">Sample Project8</a></p>
                                <a href="https://github.com/jaymer28/CHROME-EXTENSION1/settings" class="link" target="_blank"><button class="btn-sm ">CODE</button></a>
                            </div>
                        </div>
                    </div>`,

}




$('aboutUsContent').innerHTML = projectDom["HTML CSS"];
$('skills').style.background = "#EAF2FA"



$('biography1').innerHTML = `Last August 6, I received my bachelor's degree in information technology from Our Lady of Fatima.` 
$('biography2').innerHTML = `I'm a front end developer who is on my way to becoming a full stack developer because I'm still learning about the back end.
I worked as an intern at Quixpress between the months of March and June, where we used the javascript framework vue js.`



html.style.backgroundColor = '#EAF2FA'
html.style.color = "#7A5649"
html.style.fontWeight = "bolder"


cssAndMediaQuery.style.color = 'white'
javaScript.style.color = 'white'





for(var project of projects){
    project.addEventListener('click', function(){
        var clickValue = this.innerHTML;
        let changeContent = projectDom[clickValue]
        $('aboutUsContent').innerHTML = changeContent
        for(let proj of projects){
            proj.style.backgroundColor = unClick
            proj.style.color = 'white'
            proj.style['font-weight'] = 'normal'
        }
        this.style.backgroundColor = click
        this.style['font-weight'] = 'bolder'
        this.style.color = "#7A5649"
        
    })
}



$('rights').innerHTML = `© 2020 - ${date} All rights reserved`






sendContactDate.addEventListener('click', function(){
    let text =  $('text1').value;
    let email = $('exampleInputEmail1').value;
    let message = $('exampleFormControlTextarea1').value;
    myEmails.push(text)
    myEmails.push(email)
    myEmails.push(message)

   localStorage.setItem("name",JSON.stringify(myEmails))

   rendered()

})



getLocalStorage = JSON.parse( localStorage.getItem("name"))

if(getLocalStorage){
    myEmails = getLocalStorage
    rendered()
}

function rendered(){

    console.log(myEmails)
}



