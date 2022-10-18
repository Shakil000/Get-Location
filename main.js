const findMe = () => {
    const status = document.querySelector('.status');
    const success = (position) => {
        //console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
//  document.write(today);
//Adding Time

            function formatAMPM(date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            return strTime;
  }
  
//   console.log(formatAMPM(new Date));

        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
        

        fetch(geoApiUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            status.textContent = `${data.locality}, ${data.city} ${data.countryName} ${today} (${formatAMPM(new Date)})`; 
             //document.getElementById(currentDate);


        })
        var currentDate = `${new Date()}`; 
    }

    const error = () => {
        status.textContent = 'Unable to get Location';
    }

    navigator.geolocation.getCurrentPosition(success, error)

} 

 document.querySelector('.find-state').addEventListener('click', findMe);

 