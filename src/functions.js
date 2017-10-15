var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};



function loadData(){
    getJSON('https://facebook.github.io/react-native/movies.json',
    function(err, data) {
      if (err !== null) {
        alert('Something went wrong: ' + err);
      } else {
          count =0

          for (i = 1; i <= 8 ; i++) {
                 cmd = 'data.'+'Button_'+ JSON.stringify(i)
                 if(eval(cmd) == 'True')
                    count = count +1;
        }
      //   alert(JSON.stringify(this.state.bottleCount))
          state.bottleCount = count
          if (count > 3) {
              state.refillAlert = true
          }

      }

    });
}
