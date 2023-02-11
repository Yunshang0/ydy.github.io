var html = "";
html += '<style> body{ background:#000 url(' + background + ') no-repeat;background-size:cover;}  </style>';
html += '<div class="Vidage"><div class="Vidage__image"></div><video id="VidageVideo" class="Vidage__video" autoplay="" loop="" muted=""><source src="' + video + '" /></video> </div>';
html += '<div id="wrapper"><header id="header"><div class="logo"><img src="' + logo + '" class="logo" /></div><div class="content"><div class="inner"><h1>' + title + '</h1><p>' + subtitle + '<br /><br /></p><p>' + subtitle_line1 + '<br /></p><p>' + subtitle_line2 + '<br /></p></div></div><nav><ul>' + buttons + '</ul></nav></header><footer id="footer"><p class="copyright">' + site_info_copyright + '</p></footer></div>';
html += '<div id="bg"></div>';
html += '<audio autoplay="autoplay"><source src="' + video + '" type="audio/mpeg" /></audio> ';
$('body').append(html);
