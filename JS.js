axios.get('https://graph.facebook.com/TranTienDat5951071014/posts?fields=likes.summary(true),comments,message&access_token=EAAAAZAw4FxQIBALOZARSJXOHGs4oeO3XhgzEYxZBo3fPj8kx0TDHwUpltBKIvecKPkHK16MRytJrKTZBjuUZCf4EhVlRBv7sKM7UX3tB8157ogInMnXm4cD8RLc1WyN4UZAGcwkQpEqsVCskZByCGFDhiTWp03ePoOSngS9efHjFgZDZD')
    .then(response => {
        var output = "";
        output += " <u><b><span id='custom'>Bài viết số 1</span></b></u></br> <b> Lượt likes bài viết: </b>" + response.data.data[0].likes.summary.total_count + "<br>";
        output += " <u><b><span id='custom'>Bài viết số 2</span></b></u></br> <b> Lượt likes bài viết: </b>" + response.data.data[1].likes.summary.total_count + "<br>";
        output += " <u><b><span id='custom'>Bài viết số 3</span></b></u></br> <b> Lượt likes bài viết: </b>" + response.data.data[2].likes.summary.total_count + "<br>";

        document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.error(error));

axios.get('https://graph.facebook.com/TranTienDat5951071014/posts?access_token=EAAAAZAw4FxQIBALOZARSJXOHGs4oeO3XhgzEYxZBo3fPj8kx0TDHwUpltBKIvecKPkHK16MRytJrKTZBjuUZCf4EhVlRBv7sKM7UX3tB8157ogInMnXm4cD8RLc1WyN4UZAGcwkQpEqsVCskZByCGFDhiTWp03ePoOSngS9efHjFgZDZD')
    .then(response => {
        var comment = "them comment"
        axios.post('https://graph.facebook.com/' + response.data.data[0].id + '/comments?message=' + comment + '&access_token=EAAAAZAw4FxQIBALOZARSJXOHGs4oeO3XhgzEYxZBo3fPj8kx0TDHwUpltBKIvecKPkHK16MRytJrKTZBjuUZCf4EhVlRBv7sKM7UX3tB8157ogInMnXm4cD8RLc1WyN4UZAGcwkQpEqsVCskZByCGFDhiTWp03ePoOSngS9efHjFgZDZD')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        axios.post('https://graph.facebook.com/' + response.data.data[1].id + '/comments?message=' + comment + '&access_token=EAAAAZAw4FxQIBALOZARSJXOHGs4oeO3XhgzEYxZBo3fPj8kx0TDHwUpltBKIvecKPkHK16MRytJrKTZBjuUZCf4EhVlRBv7sKM7UX3tB8157ogInMnXm4cD8RLc1WyN4UZAGcwkQpEqsVCskZByCGFDhiTWp03ePoOSngS9efHjFgZDZD')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        axios.post('https://graph.facebook.com/' + response.data.data[2].id + '/comments?message=' + comment + '&access_token=EAAAAZAw4FxQIBALOZARSJXOHGs4oeO3XhgzEYxZBo3fPj8kx0TDHwUpltBKIvecKPkHK16MRytJrKTZBjuUZCf4EhVlRBv7sKM7UX3tB8157ogInMnXm4cD8RLc1WyN4UZAGcwkQpEqsVCskZByCGFDhiTWp03ePoOSngS9efHjFgZDZD')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    })
    .catch(error => console.error(error))


    