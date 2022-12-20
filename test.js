{# axios({
    method: 'get',
    url: 'https://cors-anywhere.herokuapp.com/https://www.lianatech.com/resources/blog.rss',
    headers: {
      {# 'Origin': 'https://www.lianatech.com/resources/blog.rss', #}
      'access-control-allow-origin' : "*",
    }
}).then((response) => {
  console.log(response);
  const titles = response.data.getElementsByTagName("title");
  console.log(titles.values);
}) #}
testting how to get the data out