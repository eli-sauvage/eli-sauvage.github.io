import $ from "jquery"
export default function(){
    let titles = $("#sideMenu").children()
    let projects = $(".projectType")
    let largestContentIndex = 0
    $(window).on("scroll", () => {
        if (titles.length != projects.length) {
            console.error("err len")
            return
        }
        for (let i = 0; i < projects.length; i++) {
            let project = projects[i]
            let size = computeVisibleSize(project)
            if (largestContentIndex != i && size > computeVisibleSize(projects[largestContentIndex])) {
                largestContentIndex = i
                // $(".sideMenu").on("animationend", ()=>{
                $(".currentType").removeClass("currentType")
                $(titles[largestContentIndex]).addClass("currentType")
                // })
            }
        }
    })

    function computeVisibleSize(project: HTMLElement) {
        let prRect = project.getBoundingClientRect()
        let size = prRect.height
        if (prRect.top < 0)
            size -= -prRect.top
        if (prRect.bottom > window.innerHeight)
            size -= prRect.bottom - window.innerHeight
        if (size < 0) size = 0
        return size
    }
}