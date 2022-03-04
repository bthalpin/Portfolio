const detailEl = document.querySelectorAll('.detail')
const projectEl = document.querySelectorAll('.project')
const webAppLink = document.querySelectorAll('.screenShot')
const sourceCodeLink = document.querySelectorAll('.sourceCodeDetails')

let currentProject;
const projectNumbers = ['one','two','three']
const webAppLocation = ['https://samif812.github.io/What-Movie-Was-That-/','https://bthalpin.github.io/Code-Quiz/','https://bthalpin.github.io/Weather-Forecast/']
const sourceCodeLocation = ['https://github.com/SamiF812/What-Movie-Was-That-','https://github.com/bthalpin/Code-Quiz','https://github.com/bthalpin/Weather-Forecast']

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
    if (event.target.classList[0]=='detail'){
        
        currentProject.setAttribute('style','display:none')
    // projectEl[0].setAttribute('style','display:flex')
    }
}

function visitLink (event){
    if (event.target.classList[0]==='screenShot'){
        window.location = webAppLocation[Number(event.target.dataset.number)-1]

    }
    else{
        window.location = sourceCodeLocation[Number(event.target.dataset.number)-1]
    }
    // window.location = 'https://samif812.github.io/What-Movie-Was-That-/'
}
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