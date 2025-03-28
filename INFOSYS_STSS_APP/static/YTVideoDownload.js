const downloadLinkInput = document.getElementById("downloadLink")
const downloadForm = document.getElementById("downloadForm")
const videoFrame = document.getElementById("videoFrame")
const videoDisplay = document.getElementById("videoDisplay")
const downloadBtn = document.getElementById("downloadBtn")

downloadForm.addEventListener('submit', (e) => {
    e.preventDefault()
    downloadBtn.innerHTML = "Please wait...";
    downloadBtn.disabled = "disabled"
    videoDisplay.style.display = "block";
    let link = downloadLinkInput.value.split("https://youtu.be/");
    let videoId = link[1];
    let newLink = `https://www.youtube.com/embed/${videoId}`
    videoFrame.src = newLink;

    const formData = new FormData();
        formData.append('link', downloadLinkInput.value);
    
    fetch("/download", {
        method: 'POST',
        body: formData
    })
    .then(res=> res.json())
    .then(data=>{
        alert(data.message)
        downloadBtn.innerHTML = "Download";
        downloadBtn.removeAttribute("disabled")
    })
})
