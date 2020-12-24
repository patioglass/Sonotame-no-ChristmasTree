window.onload = () => {
    const christmasTree = document.querySelectorAll(".christmasTree");
    const tweetButton = document.getElementById("tweet");
    tweetButton.href = `http://twitter.com/share?text=そのためのクリスマスツリー&url=${location.href}&hashtags=そのためのクリスマスツリー`;
    const loopElement = document.getElementById("loop");
    let fallDownCount = 0;

    Array.from(christmasTree).forEach((target) => {
        const w = screen.width;
        const settingWidth =  Math.floor(Math.random() * Math.floor(w - 1));

        target.style.left = `${settingWidth}px`;
        addListenerImg(target);
    })
    
    const createTree = setInterval(() => {
        const tree = document.querySelectorAll(".christmasTree");
        const w = screen.width;
        for(let i = 0; i < 8 - tree.length; i++) {
            const settingWidth =  Math.floor(Math.random() * Math.floor(w - 1));
            const newTree =  document.createElement("img");
            newTree.src = "christmastree.png";
            newTree.classList.add("christmasTree");
            newTree.style.left = `${settingWidth}px`;
            addListenerImg(newTree);
            loopElement.appendChild(newTree);
        }
    }, 1000)
    function addListenerImg(element) {
        element.addEventListener("animationend", () => {
            element.classList.remove("christmasTree");
    
            if (fallDownCount > 1) {
                tweetButton.href = `http://twitter.com/share?text=そのためのクリスマスツリー - ${fallDownCount}本倒した&url=${location.href}&hashtags=そのためのクリスマスツリー`;
            } else {
                tweetButton.href = `http://twitter.com/share?text=そのためのクリスマスツリー&url=${location.href}&hashtags=そのためのクリスマスツリー`;
            }
        })
        element.addEventListener("click", () => {
            element.classList.add("fallDown");
            fallDownCount++;
        })
    }
}