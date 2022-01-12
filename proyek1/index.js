const express = require ('express'); //memanggil library express js
const bodyParser = require('body-parser'); // memanggil library body parser
const cors = require('cors'); //memanggil library cors

const app = express(); //mengimplementsikan express

app.use(bodyParser.json());//penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// ** pembuatan end point ** //
app.get("/test", (req,res) => {
    let raikiri = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }

    res.json(raikiri)
})
//pemuatn end-point dengan parameter
app.get("/profil/:name/:age", (req,res) => {
    let name = req.params.name
    let age = req.params.age

    let outputdata = {
        nama : name,
        umur : age
    }

    res.json(outputdata)
})

app.post("/bujur_sangkar", (req,res) => {
    let panjang  = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)

    let luas = panjang * lebar 
    let keliling = 2 * (panjang + lebar)

    let outputdata = {
        Panjang : panjang,
        Lebar : lebar,
        Luas : luas,
        Keliling : keliling
    }

    res.json(outputdata)
})

app.post("/volumekubus", (req,res) => {
    let sisi = Number(req.body.sisi)

    let volume = sisi * sisi *  sisi
    let luas = sisi * sisi * 6

    let outputdata = {
        Sisi : sisi,
        Luas : luas,
        Volume : volume
    }

    res.json(outputdata)
})

app.post("/volumetabung", (req,res) => {
    let radius = Number(req.body.radius)
    let tinggi = Number(req.body.tinggi)

    let volume = 22/7 * radius * radius * tinggi
    let luastutup = 22/7 * radius * radius * 2
    let luasselimut = 22/7 * radius * tinggi * 2
    let luas = luastutup + luasselimut

    let outputdata = {
        Radius : radius,
        Tinggi : tinggi,
        luas : luas,
        Volume : volume
    }

    res.json(outputdata)
})

app.post("/volumebalok", (req,res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)

    let volume = panjang * lebar * tinggi
    let luas = 2 * (p*l + p*t + l*t)

    let outputdata = {
        Panjang : panjang,
        Lebar : lebar,
        Tinggi : tinggi,
        Luas : luas,
        Volume : volume
    }

    res.json(outputdata)
})

app.post("/volumekerucut", (req,res) => {
    let radius = Number(req.body.radius)
    let tinggi = Number(req.body.tinggi)
    let radius2 = radius * radius
    let tinggi2 = tinggi * tinggi

    let alas = radius2 * 22/7
    let volume = alas * tinggi * 1/3
    let pelukis = Math.sqrt(radius2 + tinggi2)
    let selimut = 22/7 * radius * pelukis
    let luas = alas + selimut

    let outputdata = {
        Radius : radius,
        Tinggi : tinggi,
        Alas : alas,
        Luas : luas,
        Volume : volume
    }

    res.json(outputdata)
})

app.post("/celsius", (req,res) => {
    let celsius = Number(req.body.celsius)
    let reamur = celsius * 0.8
    let fahrenheit = celsius * 9/5 + 32
    let kelvin = celsius + 273

    let outputdata = {
        Celsius : celsius,
        result : {
            Reamur : reamur,
            Fahrenheit : fahrenheit,
            Kelvin : kelvin
        }
    }
    res.json(outputdata)
})
app.post("/reamur", (req,res)=> {
    let reamur = Number(req.body.reamur)
    let celsius = reamur * 5/4
    let fahrenheit = reamur * 9/4 + 32
    let kelvin = reamur * 5/4 + 273

    let outputdata = {
        Reamur : reamur,
        result : {
            Celsius : celsius,
            Fahrenheit : fahrenheit,
            Kelvin : kelvin
        }
    }
    res.json(outputdata)
})

app.post("/fahrenheit", (req,res) => {
    let fahrenheit = Number(req.body.fahrenheit) + 32
    let celsius = (fahrenheit - 32) * 5/9
    let reamur = (fahrenheit - 32) * 5/4
    let kelvin = fahrenheit * 9/5 - 459.67

    let outputdata = {
        Fahrenheit : fahrenheit,
        result : {
            Celsius : celsius,
            Reamur : reamur,
            Kelvin : kelvin
        }
    }
    res.json(outputdata)
})

app.post("/kelvin", (req,res) => {
    let kelvin = Number(req.body.kelvin) + 273

    let celsius = kelvin - 273
    let reamur = 4/5 * (kelvin - 273)
    let fahrenheit = 9/5 * (kelvin - 273) + 32

    let outputdata = {
        Kelvin : kelvin,
        result : {
            Celsius : celsius,
            Reamur : reamur,
            Fahrenheit : fahrenheit
        }
    }
    res.json(outputdata)
})

app.post("/decimal", (req,res) => {
    let decimal = Number(req.body.decimal)
    binary = decimal.toString(2)
    octa = decimal.toString(8)
    hexa = decimal.toString(16)

    let outputdata = {
        decimal : decimal,
        result : {
            Binary : binary,
            Octa : octa,
            Hexa : hexa
        }
    }
    res.json(outputdata)
})

app.post("/binary", (req,res) => {
    let binary = Number(req.body.binary)

    let decimal = parseInt(binary, 2)
    let octa = parseInt(binary, 2).toString(8)
    let hexa = parseInt(binary, 2).toString(16).toUpperCase();


    let outputdata = {
        Binary : binary,
        result : {
            Decimal : decimal,
            Octa : octa,
            Hexa : hexa
        }
    }
    res.json(outputdata)
})

app.post("/octal", (req,res) => {
    let octal = Number(req.body.octal)

    let decimal = parseInt(octal, 8)
    let binary = parseInt(octal, 8).toString(2)
    let hexa = parseInt(octal, 8).toString(16).toUpperCase();

    let outputdata = {
        Octal : octal,
        result : {
            Decimal : decimal,
            Binary : binary,
            Hexa : hexa
        }
    }
    res.json(outputdata)
})

app.post("/hexa", (req,res) => {
    let hexa = Number(req.body.hexa)

    let decimal = parseInt(hexa, 16)
    let binary = parseInt(hexa, 16).toString(2)
    let octal = parseInt(hexa, 16).toString(8);

    let outputdata = {
        Hexa : hexa,
        result : {
            Decimal : decimal,
            Binary : binary,
            Octal : octal
        }
    }
    res.json(outputdata)
})

app.post("/BMI", (req,res) => {
    let berat = Number(req.body.berat)
    let tinggi = Number(req.body.tinggi)
    let tinggi2 = tinggi * tinggi

    let Bmi = berat / tinggi2
    let status 
        if(Bmi < 18.5){
            console.log(status = "anda kurang berat badan")
        } else if(Bmi > 18.5 && Bmi < 24.9){
            console.log(status = "Normal(ideal)")
        } else if(Bmi > 25 && Bmi < 29.9){
            console.log(status = "kelebihan berat badan")
        } else if(Bmi > 30){
            console.log(status = "kegemukan(obesitas)")
        }

    let outputdata = {
        Berat : berat,
        Tinggi : tinggi,
        result : {
            BMI : Bmi,
            Status : status
        }
    }
    res.json(outputdata)
    

})

app.listen(8001, () => {
    console.log("Server run on port 8001");
})