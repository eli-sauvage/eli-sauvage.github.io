export default function() {
    let sideMenu = document.querySelector("#sideMenu");
    let titles = sideMenu?.children;
    let projects = document.querySelectorAll(".projectType");
    let largestContentIndex = 0;
    window.addEventListener("scroll", () => {
        if (titles?.length != projects.length) {
            console.error("err len");
            return;
        }
        for (let i = 0; i < projects.length; i++) {
            let project = projects[i];
            let size = computeVisibleSize(project);
            if (
                largestContentIndex != i &&
                size > computeVisibleSize(projects[largestContentIndex])
            ) {
                largestContentIndex = i;
                document.querySelector(".currentType")?.classList.remove("currentType");
                titles[largestContentIndex].classList.add("currentType");
            }
        }
    });

    function computeVisibleSize(project: Element) {
        let prRect = project.getBoundingClientRect();
        let size = prRect.height;
        if (prRect.top < 0) size -= -prRect.top;
        if (prRect.bottom > window.innerHeight)
            size -= prRect.bottom - window.innerHeight;
        if (size < 0) size = 0;
        return size;
    }
}
