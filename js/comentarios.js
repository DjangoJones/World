var oneall_subdomain = '#your_subdomain#';
 
    
    var oa = document.createElement('script');
    oa.type = 'text/javascript'; oa.async = true;
    oa.src = '//' + oneall_subdomain + '.api.oneall.com/socialize/library.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(oa, s);