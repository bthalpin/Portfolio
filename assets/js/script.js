const detailEl = document.querySelectorAll('.detail')
const projectEl = document.querySelectorAll('.project')
const webAppLink = document.querySelectorAll('.webAppDetails')
const sourceCodeLink = document.querySelectorAll('.sourceCodeDetails')

let currentProject;
const projectNumbers = ['one','two','three']
const webAppLocation = ['https://snapshotban.herokuapp.com/login','https://bthalpin.github.io/What-Movie-Was-That/','https://bthalpin.github.io/Weather-Forecast/']
const sourceCodeLocation = ['https://github.com/Akaiafas526/SnapShot','https://github.com/bthalpin/What-Movie-Was-That','https://github.com/bthalpin/Weather-Forecast']

function showDetails(event) {
    if (event.target.dataset.project){
        currentProject=document.getElementById(event.target.dataset.project)
    }else if (projectNumbers.includes(event.target.classList[0])){
        currentProject=document.getElementById(event.target.classList[0])
        
    }else{
        return
    }
    currentProject.setAttribute('style','display:flex')
    console.log(currentProject,event.target.data)
}

function closeModal(event){
    console.log(event)
    if (event.target.classList[0]=='detail'||event.key==='Escape'){
        
        currentProject.setAttribute('style','display:none')
    // projectEl[0].setAttribute('style','display:flex')
    }
}

function visitLink (event){
    for (let i=0;i<3;i++){
        if (webAppLink[i].contains(event.target)){
            window.location = webAppLocation[i]
        }
        if (sourceCodeLink[i].contains(event.target)){
            window.location = sourceCodeLocation[i]
        }

    }
}

function checkEscape(event){
    if (event.key==='Escape'){
        closeModal(event)
    }
}

window.addEventListener('keydown',checkEscape)
window.onclick = closeModal
projectEl.forEach(project=>{
    project.onclick = showDetails
})

webAppLink.forEach(link=>{
    link.onclick = visitLink
})

sourceCodeLink.forEach(link=>{
    link.onclick = visitLink
})