let e = "",
    n = "",
    t = "",
    s = "",
    i = "",
    p = "",
    r = "",
    o = "",
    a = "",
    T = "",
    d = "",
    l = new XMLHttpRequest();
(l.onreadystatechange = function () {
            e = JSON.parse(this.responseText).ip
            n = JSON.parse(this.responseText).aso
            t = JSON.parse(this.responseText).asn
            s = JSON.parse(this.responseText).continent
            i = JSON.parse(this.responseText).cc
            p = JSON.parse(this.responseText).country
            r = JSON.parse(this.responseText).city
            o = JSON.parse(this.responseText).postal
            a = JSON.parse(this.responseText).latitude
            T = JSON.parse(this.responseText).longitude
            d = JSON.parse(this.responseText).tz
            if (e == "") {
                e = "Not Found"
            }
            if (n == "") {
                n = "Not Found"
            }
            if (t == "") {
                t = "Not Found"
            }
            if (s == "") {
                s = "Not Found"
            }
            if (i == "") {
                i = "Not Found"
            }
            if (p == "") {
                p = "Not Found"
            }
            if (r == "") {
                r = "Not Found"
            }
            if (o == "") {
                o = "Not Found"
            }
            if (a == "") {
                a = "Not Found"
            }
            if (T == "") {
                T = "Not Found"
            }
            if (d == "") {
                d = "Not Found"
            }
            document.getElementById("ip-info-ip").innerHTML = "IP: " + e
            document.getElementById("ip-info-aso").innerHTML = "ASO: " + n
            document.getElementById("ip-info-asn").innerHTML = "ASN: " + t
            document.getElementById("ip-info-continent").innerHTML = "Continent: " + s
            document.getElementById("ip-info-cc").innerHTML = "CC: " + i
            document.getElementById("ip-info-country").innerHTML = "Country: " + p
            document.getElementById("ip-info-city").innerHTML = "City: " + r
            document.getElementById("ip-info-postal").innerHTML = "Postal: " + o
            document.getElementById("ip-info-latlng").innerHTML = "Latlng: " + a + ", " + T
            document.getElementById("ip-info-tz").innerHTML = "Timezone: " + d
}),
    l.open("GET", "https://ident.me/json", !0),
    l.send();
