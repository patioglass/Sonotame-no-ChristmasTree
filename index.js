window.onload = () => {
    const christmasTree = document.getElementById("christmasTree");
    const footerContents = document.getElementById("footerContents");
    const replayButton = document.getElementById("replay");
    const tweetButton = document.getElementById("tweet");
    let fallDownCount = 0;

    christmasTree.addEventListener("animationend", () => {
        footerContents.style.display = "block";
        tweetButton.href = `http://twitter.com/share?text=そのためのクリスマスツリー - ${fallDownCount}回倒した&url=${location.href}&hashtags=そのためのクリスマスツリー`;      
    })
    christmasTree.addEventListener("click", () => {
        christmasTree.classList.add("fallDown");
        fallDownCount++;
    })
    replayButton.addEventListener("click", () => {
        footerContents.style.display = "none";
        christmasTree.classList.remove("fallDown");
    })
}