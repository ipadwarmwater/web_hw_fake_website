function toggleMoreContent() {
    var moreContent = document.getElementById("more-content");
    var button = document.getElementById("content_button");
    
    if (moreContent.style.display === "none") {
      moreContent.style.display = "flex";
      moreContent.style.flexWrap = "wrap";
      moreContent.style.justifyContent = "center";
    } else {
      moreContent.style.display = "none";
    }
}