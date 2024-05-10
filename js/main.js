    function openLink() {
        var job = document.getElementById('jobInput').value;
        var location = document.getElementById('locationInput').value;
        
        if (job === "Sales manager" && location === "Poznan") {
            window.open('/html/salesManagerPoznan.html', '_blank');
        }
        if (job === "Sales manager" && location === "") {
            window.open('/html/salesManager.html', '_blank');
        }
        if (job === "Sales manager" && location === "remote") {
            window.open('/html/salesManager2.html', '_blank');
        }
        
    }
