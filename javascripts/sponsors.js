$.ajax({
  type: 'GET',
  dataType: 'jsonp',
  url: 'http://api.meetup.com/2/groups?radius=25.0&order=id&group_urlname=Norfolkjs&desc=false&offset=0&format=json&page=20&fields=sponsors%2C&signed=true&sig_id=81917392&sig=f4fe3cdddb7d11559f1c0b02c44f8520e9485d84',
  data: {}
})

.done(function (json) {
  //add class, set height, width is auto
  $.each(json.results[0].sponsors, function (key,val) {
    var image;
    if (!val.hasOwnProperty("redeem")) {
        image = $('<a>', {href: val.url, html: $('<img>', {src: val.image_url, alt: val.name})});
        $(".sponsors").append(image);
    }
  });
});
