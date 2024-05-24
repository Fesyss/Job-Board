
    function openLink() {
        var job = document.getElementById('jobInput').value.trim();
        var location = document.getElementById('locationInput').value.trim();
        
        // Combine job and location into a single string
        var jobLocation = job + "|" + location;
        
        switch (jobLocation) {
            case "Sales manager|Warsaw":
                window.open('/html/salesManager/salesManagerWarsaw.html', '_blank');
                break;
            case "Sales manager|Poznan":
                window.open('/html/salesManager/salesManagerPoznan.html', '_blank');
                break;
            case "Sales manager|":
                window.open('/html/salesManager/salesManager.html', '_blank');
                break;
            case "Sales manager|remote":
                window.open('/html/salesManager/salesManagerRemote.html', '_blank');
                break;
            case "Project manager|":
                window.open('/html/projectManager/projectManager.html', '_blank');
                break;
                case "Project manager|Chelm":
                window.open('/html/projectManager/projectManagerChelm.html', '_blank');
                break;
            case "Project manager|remote":
                window.open('/html/projectManager/projectManagerRemote.html', '_blank');
                break;
            default:
                alert('No matching job listings found. Please check your input.');
        }
    }
    
