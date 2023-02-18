export function toPersianDigits(txt){
    var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return txt.toString().replace(/[0-9]/g, function(w){
        return id[+w]
    });
}


export function insertrialcamma( n ) {
    let s = toPersianDigits(n)
    var m = "";
    for ( var i = 0; i < s.length; i++ ) {
        var c = s.substr( s.length - i - 1, 1 );
        if ( i % 3 == 0 & i > 0 ) {
            m = c + ',' + m;
        } else {
            m = c + m;
        }
    }
    return m;
}