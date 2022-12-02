# API Documentation

---

## Authentication

All API except login registration must use this authentication.
_Request:_

- Header:
  X-Api-Key : "Your Secret Api Key"

---

## Registration

_Request:_

- Method: POST
- Endpoint: /user/regis
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
- Body:

```
  {
  "nama_depan": "Alya",
  "nama_belakang": "Lala",
  "email": "alya@gmail.com",
  "password": "alya123"
  }
```

_Response_

```
{
    "success": true,
    "data": {
        "nama_depan": "Alya",
        "nama_belakang": "Lala",
        "email": "alya@gmail.com",
        "password": "$2b$10$fMGhqrE/vyXlKr7Q/FkQfeTnLB5ZCTe27tISKzOi2zN9S.pvN0IDm",
        "role": "user",
        "_id": "63815449b6b60c8a94c219d3",
        "__v": 0
    },
    "message": "Register Successfully.."
}
```

---

## Login

_Request:_

- Method: POST
- Endpoint: /user/login
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
- Body:

```
  {
  "email": "alya@gmail.com",
  "password": "alya123"
  }
```

_Response_

```
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFseWFAZ21haWwuY29tIiwiaWF0IjoxNjY5NDIwMjg5fQ.9sCpbMADGlcipT0nU01avyXw5-8IEXu2YqJYSzWNFnc",
    "message": "login Successfully..",
    "role": "user"
}
```

---

## Get Profil

_Request:_

- Method: GET
- Endpoint: /user/byId
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
  - Authorization : bearer [jwt]

_Response_

```
{
    "success": true,
    "data": {
        "_id": "63815449b6b60c8a94c219d3",
        "nama_depan": "Alya",
        "nama_belakang": "Lala",
        "email": "alya@gmail.com",
        "password": "$2b$10$fMGhqrE/vyXlKr7Q/FkQfeTnLB5ZCTe27tISKzOi2zN9S.pvN0IDm",
        "role": "user",
        "__v": 0
    },
    "message": "User is get successfully"
}
```

---

## Update Profil

_Request:_

- Method: POST
- Endpoint: /user/byId
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
  - Authorization : bearer [jwt]
- Body:

```
{
    "nama_depan": "Alya",
    "nama_belakang": "Lala",
    "no_telp": "087737854004",
    "jenis_kelamin": "Perempuan",
    "tempat_lahir": "Cilegon",
    "tanggal_lahir": "31 Desember 2001",
    "email": "alya@gmail.com",
    "alamat": "Jl. Kh. Abdullatif"
}
```

_Response_

```
{
    "data": {
        "_id": "6380c7ade1cd91fb64c6013f",
        "nama_depan": "Alya",
        "nama_belakang": "Lala",
        "email": "alya@gmail.com",
        "password": "$2b$10$K3t5i74Dd3papk71xlogU.F3pp5wJHwvN3Vd1EBMVWIIr.iq9qgAe",
        "role": "admin",
        "__v": 0,
        "alamat": "Jl. Kh. Abdullatif",
        "jenis_kelamin": "Perempuan",
        "no_telp": "087737854004",
        "tanggal_lahir": "31 Desember 2001",
        "tempat_lahir": "Cilegon"
    },
    "message": "Update data user is success"
}
```

---

## Create Dokter

_Request:_

- Method: POST
- Endpoint: /dokter
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
  - Authorization : bearer [jwt]
- Body:

```
{
    "nama": "Dafa",
    "spesialis": "Umum",
    "pengalaman": "3 Tahun",
    "detail_info": "Dr. Dafa adalah Dokter Spesialis Umum yang aktif melayani pasien di RS FEBE Medika. Dr. Dafa mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Indonesia.",
    "harga": "Rp. 250.000"
}
```

_Response_

```
{
    "success": true,
    "data": {
        "nama": "Dafa",
        "spesialis": "Umum",
        "pengalaman": "3 Tahun",
        "detail_info": "Dr. Dafa adalah Dokter Spesialis Umum yang aktif melayani pasien di RS FEBE Medika. Dr. Dafa mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Indonesia.",
        "harga": "Rp. 250.000",
        "_id": "637ebb8b89882e3f26a4e122",
        "__v": 0
    },
    "message": "You Have Successfully Created Doctor Data"
}
```

---

## Get All Dokter

_Request:_

- Method: GET
- Endpoint: /dokter
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
  - Authorization : bearer [jwt]

_Response_

```
{
    "data": [
        {
            "_id": "637ebb8b89882e3f26a4e122",
            "nama": "Dafa",
            "spesialis": "Umum",
            "pengalaman": "3 Tahun",
            "detail_info": "Dr. Dafa adalah Dokter Spesialis Umum yang aktif melayani pasien di RS FEBE Medika. Dr. Dafa mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Indonesia.",
            "harga": "Rp. 250.000",
            "__v": 0
        }
    ],
    "message": "Get All Dokter Successfully"
}
```

---

## Get Dokter By Id

_Request:_

- Method: GET
- Endpoint: /dokter/byId
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
  - Authorization : bearer [jwt]

_Response_

```
{
    "success": true,
    "data": {
        "_id": "637ebb8b89882e3f26a4e122",
        "nama": "Dafa",
        "spesialis": "Umum",
        "pengalaman": "3 Tahun",
        "detail_info": "Dr. Dafa adalah Dokter Spesialis Umum yang aktif melayani pasien di RS FEBE Medika. Dr. Dafa mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Indonesia.",
        "harga": "Rp. 250.000",
        "__v": 0
    },
    "message": "Dokter is Get Successfully"
}
```

---

## Create Riwayat Kesehatan

_Request:_

- Method: POST
- Endpoint: /rikes
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
  - Authorization : bearer [jwt]
- Body

```
{
    "riwayat_penyakit": "Anemia",
    "berat_badan": "42",
    "tinggi_badan": "150",
    "golongan_darah": "AB",
    "id_user": "638805bb61b453f547dd0ff5"
}
```

_Response_

```
{
  "success": true,
  "data": {
    "riwayat_penyakit": "Anemia",
    "berat_badan": 42,
    "tinggi_badan": 150,
    "golongan_darah": "AB",
    "id_user": "638805bb61b453f547dd0ff5",
    "_id": "638814693a3ed99fcbf27efe",
    "__v": 0
  },
  "message": "You Have Successfully Created Health History"
}
```

---

## Get Riwayat Kesehatan By Id

_Request:_

- Method: POST
- Endpoint: /rikes/byId
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
  - Authorization : bearer [jwt]

_Response_

```
{
  "success": true,
  "data": {
    "_id": "638814693a3ed99fcbf27efe",
    "riwayat_penyakit": "Anemia",
    "berat_badan": 42,
    "tinggi_badan": 150,
    "golongan_darah": "AB",
    "id_user": {
      "_id": "638805bb61b453f547dd0ff5",
      "nama_depan": "Sofi",
      "nama_belakang": "Yulianti",
      "email": "sofi@gmail.com",
      "password": "$2b$10$w5FzNtbISyLxdRbrIQVJYOLMZw3RbJ5rY.zyQrX2bv//RHD7jFMcO",
      "role": "user",
      "__v": 0
    },
    "__v": 0
  },
  "message": "Health History is Get Successfully"
}
```

---

## Update Riwayat Kesehatan

_Request:_

- Method: POST
- Endpoint: /rikes/byId
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
  - Authorization : bearer [jwt]
- Body

```
{
    "riwayat_penyakit": "Magh",
    "berat_badan": "48",
    "tinggi_badan": "155",
    "golongan_darah": "B",
    "id_user": "63815449b6b60c8a94c219d3"
}
```

_Response_

```
{
  "data": {
    "_id": "63834c38daf34a5cdb962a34",
    "riwayat_penyakit": "Magh",
    "berat_badan": 48,
    "tinggi_badan": 155,
    "golongan_darah": "B",
    "id_user": "63815449b6b60c8a94c219d3",
    "__v": 0
  },
  "message": "Update Data Health History is Success"
}
```

---

## Delete Riwayat Kesehatan

_Request:_

- Method: DELETE
- Endpoint: /rikes/byId
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
  - Authorization : bearer [jwt]

_Response_

```
{
  "success": true,
  "data": {
    "_id": "638815e6fec9b966e73765f9",
    "riwayat_penyakit": "Anemia",
    "berat_badan": 42,
    "tinggi_badan": 150,
    "golongan_darah": "-",
    "id_user": "638805bb61b453f547dd0ff5",
    "__v": 0
  },
  "message": "Health history deleted successfully"
}
```

---

## Create Keluhan Web-Home

_Request:_

- Method: POST
- Endpoint: /home
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
  - Authorization : bearer [jwt]
- Body

```
{
    "nama_lengkap": "Sri",
    "email": "Sri@gmail.com",
    "keluhan": "Sangat Bagus Mantap"
}
```

_Response_

```
{
  "success": true,
  "Message": "Keluhan anda terkirim"
}
```

---

## Pembayaran

_Request:_

- Method: POST
- Endpoint: /pembayaran
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
  - Authorization : bearer [jwt]
- Body

```
{
    "id_user": "638805bb61b453f547dd0ff5",
    "id_dokter": "638809bdbf0bc501f380f786",
    "total": "269000"
}
```

_Response_

```
{
  "success": true,
  "token": "4a74c0e9-8ff8-4bfa-8d9a-5fcaa9577162",
  "redirectURL": "https://app.sandbox.midtrans.com/snap/v2/vtweb/4a74c0e9-8ff8-4bfa-8d9a-5fcaa9577162"
}
```

---

## Update Dokter

_Request:_

- Method: POST
- Endpoint: /dokter/byId
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
  - Authorization : bearer [jwt]
- Body

```
{
    "nama": "Drg. Aan Afrianto",
    "spesialis": "Sp. Gigi",
    "pengalaman": "17 th",
    "detail_info": "Drg. Aan Afrianto adalah Dokter Gigi yang aktif melayani pasien di FEBE 22 Klinik. Drg. Aan Afrianto mendapatkan gelar Kedokteran Gigi setelah menamatkan pendidikan di Universitas Gadjah Mada.",
    "harga": "150000",
    "id_jadwal": "63880e2f70631fb1393aab16"
}
```

_Response_

```
{
  "data": {
    "_id": "638808ff29204d8c563b7d2e",
    "nama": "Drg. Aan Afrianto",
    "spesialis": "Sp. Gigi",
    "pengalaman": "17 th",
    "detail_info": "Drg. Aan Afrianto adalah Dokter Gigi yang aktif melayani pasien di FEBE 22 Klinik. Drg. Aan Afrianto mendapatkan gelar Kedokteran Gigi setelah menamatkan pendidikan di Universitas Gadjah Mada.",
    "harga": "150000",
    "id_jadwal": "63880e2f70631fb1393aab16",
    "__v": 0
  },
  "message": "The Doctor Data has been Successfully Updated"
}
```

---

## Delete Dokter

_Request:_

- Method: DELETE
- Endpoint: /dokter/byId
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
  - Authorization : bearer [jwt]

_Response_

```
{
  "success": true,
  "data": {
    "_id": "63881299bf0bc501f380f78a",
    "nama": "Dr. A. D. Pasaribu, Sp.A",
    "spesialis": "Sp. Anak",
    "pengalaman": "31 Tahun",
    "detail_info": "D",
    "harga": "Rp. 269000",
    "id_jadwal": "6386ded921b9b04c75203085",
    "__v": 0
  },
  "message": "Doctor Data is Deleted Successfully"
}
```

---

## Create Jadwal

_Request:_

- Method: POST
- Endpoint: /jadwal
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
  - Authorization : bearer [jwt]
- Body

```
{
    "hari": "Minggu",
    "waktu": "09.00-20.00"
}
```

_Response_

```
{
  "success": true,
  "data": {
    "hari": "Minggu",
    "waktu": "09.00-20.00",
    "_id": "63880e6770631fb1393aab1e",
    "__v": 0
  },
  "message": "You have successfully create jadwal"
}
```

---

## Get All Jadwal

_Request:_

- Method: GET
- Endpoint: /jadwal
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
  - Authorization : bearer [jwt]

_Response_

```
{
  "data": [
    {
      "_id": "6386ded921b9b04c75203085",
      "hari_tanggal": "Senin",
      "waktu": "09.00-12.00",
      "__v": 0
    },
    {
      "_id": "63880d3270631fb1393aaaf8",
      "hari": "Senin",
      "waktu": "07.00-09.00",
      "__v": 0
    },
    {
      "_id": "63880d4470631fb1393aaafa",
      "hari": "Senin",
      "waktu": "13.00-15.00",
      "__v": 0
    },
    {
      "_id": "63880d5e70631fb1393aaafc",
      "hari": "Senin",
      "waktu": "15.00-17.00",
      "__v": 0
    },
    {
      "_id": "63880d7670631fb1393aaafe",
      "hari": "Senin",
      "waktu": "19.00-21.30",
      "__v": 0
    },
    {
      "_id": "63880d8d70631fb1393aab00",
      "hari": "Selasa",
      "waktu": "07.00-11.30",
      "__v": 0
    },
    {
      "_id": "63880da270631fb1393aab02",
      "hari": "Selasa",
      "waktu": "13.00-17.00",
      "__v": 0
    },
    {
      "_id": "63880db170631fb1393aab04",
      "hari": "Selasa",
      "waktu": "18.3.00-22.00",
      "__v": 0
    },
    {
      "_id": "63880db470631fb1393aab06",
      "hari": "Selasa",
      "waktu": "18.30.00-22.00",
      "__v": 0
    },
    {
      "_id": "63880dba70631fb1393aab08",
      "hari": "Selasa",
      "waktu": "18.30-22.00",
      "__v": 0
    },
    {
      "_id": "63880dd870631fb1393aab0a",
      "hari": "Rabu",
      "waktu": "07.00-12.30",
      "__v": 0
    },
    {
      "_id": "63880de570631fb1393aab0c",
      "hari": "Rabu",
      "waktu": "13.00-17.00",
      "__v": 0
    },
    {
      "_id": "63880df170631fb1393aab0e",
      "hari": "Rabu",
      "waktu": "19.00-22.00",
      "__v": 0
    },
    {
      "_id": "63880e0f70631fb1393aab10",
      "hari": "Kamis",
      "waktu": "07.00-12.00",
      "__v": 0
    },
    {
      "_id": "63880e1670631fb1393aab12",
      "hari": "Kamis",
      "waktu": "13.00-17.00",
      "__v": 0
    },
    {
      "_id": "63880e1f70631fb1393aab14",
      "hari": "Kamis",
      "waktu": "19.30-22.00",
      "__v": 0
    },
    {
      "_id": "63880e2f70631fb1393aab16",
      "hari": "Jum'at",
      "waktu": "07.00-11.00",
      "__v": 0
    },
    {
      "_id": "63880e3870631fb1393aab18",
      "hari": "Jum'at",
      "waktu": "13.30-17.00",
      "__v": 0
    },
    {
      "_id": "63880e4770631fb1393aab1a",
      "hari": "Jum'at",
      "waktu": "19.00-21.30",
      "__v": 0
    },
    {
      "_id": "63880e5f70631fb1393aab1c",
      "hari": "Sabtu",
      "waktu": "09.00-20.00",
      "__v": 0
    },
    {
      "_id": "63880e6770631fb1393aab1e",
      "hari": "Minggu",
      "waktu": "09.00-20.00",
      "__v": 0
    }
  ],
  "message": "Get All data Jadwal Successfully"
}
```

---

## Get Jadwal By Id

_Request:_

- Method: GET
- Endpoint: /jadwal/byId
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
  - Authorization : bearer [jwt]

_Response_

```
{
  "success": true,
  "data": {
    "_id": "63880db470631fb1393aab06",
    "hari": "Selasa",
    "waktu": "18.30.00-22.00",
    "__v": 0
  },
  "message": "Get Jadwal Success"
}
```

---

## Delete Jadwal

_Request:_

- Method: DELETE
- Endpoint: /jadwal/byId?
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
  - Authorization : bearer [jwt]

_Response_

```
{
  "success": true,
  "data": {
    "_id": "63880db170631fb1393aab04",
    "hari": "Selasa",
    "waktu": "18.3.00-22.00",
    "__v": 0
  },
  "message": "Data Jadwal delete"
}
```

---

## Update Jadwal

_Request:_

- Method: POST
- Endpoint: /jadwal/byId?
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
  - Authorization : bearer [jwt]
- Body

```
{
    "hari": "Minggu",
    "waktu": "09.00-17.00"
}
```

_Response_

```
{
  "data": {
    "_id": "63880e6770631fb1393aab1e",
    "waktu": "09.00-17.00",
    "__v": 0,
    "hari": "Minggu"
  },
  "message": "Update data jadwal is succes"
}
```

---
